import {Route, Routes} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LandingPage = lazy(() => import('./pages/landing-page'));
const SignUpPage = lazy(() => import('./pages/sign-up-page'));
const LoginPage = lazy(() => import('./pages/log-in-page'));

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Suspense fallback={<>Loading...</>}><LandingPage/></Suspense>}/>
        <Route path='/login' element={<Suspense fallback={<>Loading...</>}><LoginPage/></Suspense>}/>
        <Route path='/sign-up' element={<Suspense fallback={<>Loading...</>}><SignUpPage/></Suspense>}/>
        <Route path='/dashboard' element={<Suspense fallback={<>Loading...</>}><>Dashboard</></Suspense>}/>
      </Routes>
    </>
  )
}

export default App
