import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "./router/Router"
import { AuthProvider, useAuthContext } from './context/AuthContext';
import { SocketProvider } from './context/SocketContext';


function App() {
  return (
    <>
      <div>
        <AuthProvider>
          <SocketProvider>
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
          </SocketProvider>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
