import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
const LogoutButton = () => {
    const { logout, loading } = useLogout();
    return (
        <div className='mt-auto'>
            <BiLogOut className='w-6 h-6 text-white cursor-pointer hover:text-gray-400'
                onClick={logout}
            />
        </div>
    )
}

export default LogoutButton