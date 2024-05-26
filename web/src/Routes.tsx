// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { PrivateSet, Route, Router, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthenticatedLayout from './layouts/AuthenticatedLayout/AuthenticatedLayout'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <PrivateSet unauthenticated="login">
        <Set wrap={AuthenticatedLayout}>
          <Route path="/" page={HomePage} name="index" />
          <Route path="/home/{tab}" page={HomePage} name="home" />
          <Route path="/my" page={MyPage} name="my" />
          <Route path="/boards" page={BoardsPage} name="boards" />
        </Set>
        <Set wrap={DefaultLayout}>
          <Route path="/group-programs/{id}" page={GroupProgramPage} name="groupProgram" />
          <Route path="/posts/{id}" page={PostPage} name="post" />
          <Route path="/boards/{id}/posts-new" page={PostNewPage} name="postNew" />
          <Route path="/posts/{id}/update" page={PostUpdatePage} name="postUpdate" />
          <Route path="/season-department/{id}" page={SeasonDepartmentPage} name="seasonDepartment" />
          <Route path="/user-season-department-group/{id}/request-refund" page={UserSeasonDepartmentGroupRequestRefundPage} name="userSeasonDepartmentGroupRequestRefund" />
          <Route path="/group-program-create" page={GroupProgramCreatePage} name="groupProgramCreate" />
          <Route path="/spot-events/{id}" page={SpotEventPage} name="spotEvent" />
          <Route path="/spot-event-create" page={SpotEventCreatePage} name="spotEventCreate" />
          <Route path="/spot-events/{id}/update" page={SpotEventUpdatePage} name="spotEventUpdate" />
        </Set>
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
