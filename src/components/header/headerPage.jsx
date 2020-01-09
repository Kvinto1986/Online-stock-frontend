import React from 'react'
import DesktopNav from './desktopNavBar'
import MobileNav from './mobileNavBar'


export default ({screenSize, user, logout}) => {
    return (
        <>
            {screenSize > 1250 ? (<DesktopNav
                user={user}
                logout={logout}
            />) : (<MobileNav
                user={user}
                logout={logout}
            />)}
        </>
    )
}
