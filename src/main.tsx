import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import  { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId='933672914625-o5a1b02bbdnnasfqv30rb4n9p3qugrm1.apps.googleusercontent.com'>
            <App />
        </GoogleOAuthProvider>
        <Toaster/>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
