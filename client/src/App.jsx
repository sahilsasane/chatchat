import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "./router/Router"
import { AuthProvider, useAuthContext } from './context/AuthContext';


function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center bg-gray-950">
        <AuthProvider>
          <Router />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </AuthProvider>
      </div>
    </>
  )
}

export default App
