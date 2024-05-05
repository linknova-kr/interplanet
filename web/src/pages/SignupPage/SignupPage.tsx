import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
  DateField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on identifier box on page load
  const identifierRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    identifierRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.identifier,
      password: data.password,
      realName: data.realName,
      nickname: data.nickname,
      phoneNumber: data.phoneNumber,
      birthday: data.birthday,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <Metadata title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="identifier"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Identifier
                  </Label>
                  <TextField
                    name="identifier"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={identifierRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Identifier is required',
                      },
                    }}
                  />
                  <FieldError name="identifier" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="rw-field-error" />

                  <Label
                    name="realName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    realName
                  </Label>
                  <TextField
                    name="realName"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'realName is required',
                      },
                    }}
                  />
                  <FieldError name="realName" className="rw-field-error" />

                  {/* realName            String
                    nickname            String
                    phoneNumber         String
                    birthday            DateTime */}

                  <Label
                    name="nickname"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    nickname
                  </Label>

                  <TextField
                    name="nickname"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'nickname is required',
                      },
                    }}
                  />
                  <FieldError name="nickname" className="rw-field-error" />

                  <Label
                    name="phoneNumber"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    phoneNumber
                  </Label>

                  <TextField
                    name="phoneNumber"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'phoneNumber is required',
                      },
                    }}
                  />
                  <FieldError name="phoneNumber" className="rw-field-error" />

                  <Label
                    name="birthday"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    birthday
                  </Label>

                  <DateField
                    name="birthday"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'birthday is required',
                      },
                    }}
                  ></DateField>
                  <FieldError name="birthday" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
