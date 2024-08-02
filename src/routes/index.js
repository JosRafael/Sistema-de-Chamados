import { Routes, Route } from 'react-router-dom'
import SignIn from '../pages/signIn'
import SignUp from '../pages/SignUp'

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/registro" element={<SignUp />} />
    </Routes>
  )
}
