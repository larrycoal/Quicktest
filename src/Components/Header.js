import React from 'react'
import Auth from './GoogleAuth'



const Header = () => {
    return (
        <div className="ui secondary pointing menu container">
            <div className='right menu '>
               <Auth/>
            </div>
        </div>
    )
}

export default Header