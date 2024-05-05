import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type AuthenticatedLayoutProps = {
  children?: React.ReactNode
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const { currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        {currentUser && (
          <div>
            <span>Logged in as {currentUser.nickname}</span>{' '}
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        )}
      </header>
      <main>{children}</main>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default AuthenticatedLayout
