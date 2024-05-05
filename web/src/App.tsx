import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'
import { RedwoodRelayProvider } from './relay/RedwoodRelayProvider'

import './index.css'
import './scaffold.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <RedwoodRelayProvider useAuth={useAuth}>
          <Routes />
        </RedwoodRelayProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
