import './profile.css';
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth-context';

function ProfileSidebar() {

    const { setIsAuth }  = useAuth()
    const logOutHandler = () => {
        localStorage.removeItem("AuthToken");
        setIsAuth(false)
    }

    return (
        <ul className="profile-menu">
            <Link className='profile-menu-li' to='/profile'>Profile</Link>
            <Link className='profile-menu-li' to='/profile/address'> Address </Link>
            {/* <Link className='profile-menu-li' to='/profile/orders'> Orders </Link> */}
            <div className='profile-menu-li' onClick={ logOutHandler } > Logout </div>
        </ul>
    )
}

function Profile() {

    
     return (
        <div className='filter-productlist-container p-2' >
            <ProfileSidebar/>
            <main >
                <div className="productlist-container profile-page-main">
                    My Profile
                </div>
            </main>
        </div>
    );
}

export { Profile , ProfileSidebar };