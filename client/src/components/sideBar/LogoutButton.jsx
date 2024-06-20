import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
const LogoutButton = () => {
    const { logout, loading } = useLogout();
    return (
        <div className='mt-auto'>
            <BiLogOut className='w-8 h-8 text-white  cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out'
                onClick={logout}
            />
        </div>
    )
}

export default LogoutButton