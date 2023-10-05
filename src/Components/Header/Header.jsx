import React, { useRef } from 'react'
import './Header.scss'
function Header() {
    const Refsun = useRef()
    const sun = ()=>{
        Refsun.current.classList.toggle('nav_dark')
    }
    console.log(sun);
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
                        <li className='nav_list_item nav_item4'>
                            <a href=""> <span>Uz</span></a>
                            <a href="">/Ru</a> 
                            </li>
                        <li className='nav_list_item nav_item5'>
                            <button>Login</button>
                        </li>
                        <li className='nav_list_item nav_item6'><i ref={Refsun} onClick={sun} class="bi bi-brightness-high nav_sun"></i></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header