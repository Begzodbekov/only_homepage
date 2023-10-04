import React from 'react'
import './Header.scss'
function Header() {
  return (
    <div className='Header'>
        <div className="container">
            <nav className='nav'>
                <div className="nav_inner">
                    <ul className='nav_list'>
                        <li className='nav_item1'> AniSeezn</li>
                        <li className='nav_list_item nav_item2'>
                            <input type="text" name="" id="" placeholder='anime nomini kiriting' />
                            <i class="bi bi-search nav_search"></i>
                        </li>
                        <li className='nav_list_item nav_item3'>
                            <button>Lorem ipsum</button>
                        </li>
                        <li className='nav_list_item nav_item4'><span>Uz</span>/Ru</li>
                        <li className='nav_list_item nav_item5'>
                            <button>Login</button>
                        </li>
                        <li className='nav_list_item nav_item6'><i class="bi bi-brightness-high nav_sun"></i></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header