import React, { useRef, useState } from 'react'
import './Header.scss'
import { data } from '../../lib/data'
function Header() {
    const Refsun = useRef()
    const sun = ()=>{
        Refsun.current.classList.toggle('nav_dark')
    }
    const Refsearch = useRef()
    const Inpref = useRef()
    const [searchNames , setSearch] = useState('')
    const search = ()=>{
        Refsearch.current.classList.toggle('nav_search_list2')
        setSearch(Inpref.current.value)
    }
    // window.addEventListener('click',(e)=>{
    //     e.preventDefault()
    //     Refsearch.current.classList.toggle('nav_search_list3')
    // })

  return (
    <div className='Header'>
        <div className="container">
            <nav className='nav'>
                <div className="nav_inner">
                    <ul className='nav_list'>
                        <li className='nav_item1'> AniSeezn</li>
                        <li className='nav_list_item nav_item2'>
                            <input ref={Inpref} onClick={search} onKeyUp={()=> setSearch(Inpref.current.value)} type="text" name="" id="" placeholder='anime nomini kiriting' />
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
                    <ul ref={Refsearch} className='nav_search_list'>

                        {
                            data?.filter((item)=> item.name.includes(searchNames)).map((item, index)=>(
                                <li key={index} className='nav_itemsearch'>
                                            <img src={item.img} alt="" />
                                        <div className='nv_itemsearch_div'>
                                            <h3>{item.name}</h3>
                                            <p>{item.title}</p>
                                        </div>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header