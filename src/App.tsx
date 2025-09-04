import {Route, Routes} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LandingPage = lazy(() => import('./pages/landing-page'));

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Suspense fallback={<>Loading...</>}><LandingPage/></Suspense>}/>
        <Route path='/login' element={<>LoginPage</>}/>
        <Route path='/sign-up' element={<>SignUpPage</>}/>
      </Routes>
    </>
  )
}

export default App
