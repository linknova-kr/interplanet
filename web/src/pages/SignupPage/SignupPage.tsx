import { useRef, useState } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
  DateField,
  EmailField,
  useForm,
  CheckboxField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

enum SignupStep {
  INFO,
  INTEREST,
}

interface SignupForm {
  email: string
  identifier: string
  password: string
  passwordAgain: string
  realName: string
  nickname: string
  phoneNumber: string
  birthday: string
}

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()
  const [step, setStep] = useState(SignupStep.INFO)
  const formMethods = useForm<SignupForm>()
  const [interests, setInterests] = useState<string[]>([])

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.index())
    }
  }, [isAuthenticated])

  // focus on identifier box on page load
  const identifierRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    identifierRef.current?.focus()
  }, [])

  const onSubmit = async (data: SignupForm) => {
    if (step === SignupStep.INFO) {
      if (data.password !== data.passwordAgain) {
        formMethods.setError('passwordAgain', {
          type: 'manual',
          message: 'Passwords do not match',
        })
        return
      } else {
        setStep(SignupStep.INTEREST)
      }
    } else {
      if (interests.length != 3) {
        toast.error('Please select 3 interests')
        return
      }
      const response = await signUp({
        username: data.identifier,
        password: data.password,
        realName: data.realName,
        nickname: data.nickname,
        phoneNumber: data.phoneNumber,
        birthday: data.birthday,
        email: data.email,
        interests,
      })

      if (response.message) {
        toast(response.message)
      } else if (response.error) {
        toast.error(response.error)
      } else {
        // user is signed in automatically
        toast.success('Welcome!')
        formMethods.reset()
      }
    }
  }

  const stepInfoForm = () => (
    <>
      <Label
        name="email"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Email
      </Label>
      <EmailField
        name="email"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{
          required: {
            value: true,
            message: 'Email is required',
          },
          validate: {
            isEmail: (value) => {
              if (!value.includes('@')) {
                return 'Email is not valid'
              }
              return null
            },
          },
        }}
      />
      <FieldError name="email" className="rw-field-error" />

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
        name="passwordAgain"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        Password Again
      </Label>

      <PasswordField
        name="passwordAgain"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        autoComplete="current-password"
        validation={{
          required: {
            value: true,
            message: 'Password Again is required',
          },
        }}
      ></PasswordField>
      <FieldError name="passwordAgain" className="rw-field-error" />

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
    </>
  )

  const stepInterestForm = () => (
    <>
      {[
        '음악',
        '요리',
        '운동',
        '언어',
        '공예',
        '사진/영상제작',
        '독서',
        '여행',
        '게임',
        '패션',
        '프로그래밍',
        '영화',
        '커피',
        '맥주와 와인',
        '인테리어',
        '환경',
        '스포츠',
        '명상',
        '반려동물',
        '봉사',
      ].map((interest) => (
        <div key={interest} className="rw-checkbox-group">
          <CheckboxField
            id={interest}
            name={interest}
            value={interest}
            onChange={(e) => {
              if (e.target.checked) {
                setInterests((prev) => [...prev, interest])
              } else {
                setInterests((prev) => prev.filter((i) => i !== interest))
              }
            }}
          />
          <label htmlFor={interest}>{interest}</label>
        </div>
      ))}
    </>
  )

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
                <Form
                  onSubmit={onSubmit}
                  className="rw-form-wrapper"
                  formMethods={formMethods}
                >
                  {step === SignupStep.INFO
                    ? stepInfoForm()
                    : stepInterestForm()}

                  <div className="rw-button-group">
                    {step === SignupStep.INFO ? (
                      <Submit className="rw-button rw-button-blue">다음</Submit>
                    ) : (
                      <>
                        <button
                          className="rw-button"
                          onClick={() => setStep(SignupStep.INFO)}
                        >
                          이전
                        </button>
                        <Submit className="rw-button rw-button-blue">
                          회원가입
                        </Submit>
                      </>
                    )}
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
