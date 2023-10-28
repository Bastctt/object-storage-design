import './Header.css'
import React from 'react'
import '../../Styles/Styles.css'

function Header () {
    return (
        <nav>
            <div className='header-logo'>
                <a>OUT</a>
            </div>
            <div className='nav-container'> 
                <ul>
                    <li className='links'><a>Collection</a></li>
                    <li className='links'><a>Echantillons</a></li>
                    <li className='links'><a>Salles d'exposition</a></li>
                    <li className='links'><a>A propos de nous</a></li>
                </ul>
                <div className='cart'>
                <a>cart</a>
            </div>
            </div>
        </nav>
    );
}

export default Header;