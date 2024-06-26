import { Suspense } from 'react'

import { RelayEnvironmentProvider } from 'react-relay'
import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

import type { AuthContextInterface } from '@redwoodjs/auth'
import {
  LoginAttributes,
  ResetPasswordAttributes,
  SignupAttributes,
} from '@redwoodjs/auth-dbauth-web'
import { useIsBrowser } from '@redwoodjs/prerender/browserUtils'
import { FetchConfigProvider, useFetchConfig } from '@redwoodjs/web'

import { useAuth as useRWAuth } from '../auth'

export type UseAuthProp = () => AuthContextInterface<
  string,
  LoginAttributes,
  any,
  unknown,
  boolean,
  SignupAttributes,
  any,
  any,
  ResetPasswordAttributes,
  any,
  any,
  any
>

const RelayProviderWithFetchConfig: React.FunctionComponent<{
  environment: Environment
  useAuth: UseAuthProp
  children: React.ReactNode
}> = ({ environment, children, useAuth }) => {
  const { uri, headers } = useFetchConfig()
  const { getToken, type: authProviderType, isAuthenticated } = useAuth()

  async function fetcher(operation, variables) {
    // Gets the access token before every query, this IMO is wasteful
    // but is what redwood does OOTB
    let token: string | undefined = undefined
    if (isAuthenticated && getToken) {
      token = await getToken()
    }

    const authHeaders = token
      ? {
          'auth-provider': authProviderType,
          authorization: `Bearer ${token}`,
        }
      : {}

    // Relay offers a lot of info in the original outgoing request
    // { cacheID: "64f3434db5fcda977516dfe1b15852f7", id: null, metadata: {}, name: "UsersPageQuery", operationKind: "query", text: "...", variables: {} }
    // We re-format it to fit the setup inside graphql-helix
    const body = {
      query: operation.text,
      operationName: operation.name,
      // operationKind: operation.operationKind,
      variables,
    }

    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        ...headers,
        ...authHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    // Get the response as JSON
    return await response.json()
  }

  const env = environment || createDefaultEnvironment(fetcher)
  // const hooks = createHooks(env)

  return (
    <RelayEnvironmentProvider environment={env}>
      {/* <GraphQLHooksProvider useQuery={hooks.useQuery} useMutation={hooks.useMutation}> */}
      {children}
      {/* </GraphQLHooksProvider> */}
    </RelayEnvironmentProvider>
  )
}

export const createDefaultEnvironment = (fetch: FetchFunction) => {
  // // Export a singleton instance of Relay Environment configured with our network function:
  return new Environment({
    network: Network.create(fetch),
    store: new Store(new RecordSource()),
  })
}

export const RedwoodRelayProvider: React.FunctionComponent<{
  environment?: Environment
  useAuth?: UseAuthProp
  children: React.ReactNode
}> = ({ environment, useAuth = useRWAuth, children }) => {
  const browser = useIsBrowser()
  const SsrCompatibleSuspense = browser ? Suspense : (props) => props.children

  return (
    <FetchConfigProvider useAuth={useAuth}>
      <RelayProviderWithFetchConfig environment={environment} useAuth={useAuth}>
        <SsrCompatibleSuspense fallback={<div>Site loader</div>}>
          {children}
        </SsrCompatibleSuspense>
      </RelayProviderWithFetchConfig>
    </FetchConfigProvider>
  )
}
