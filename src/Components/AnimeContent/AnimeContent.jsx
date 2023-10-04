import React from 'react'
import './AnimeContent.scss'
function AnimeContent() {
  return (
    <div className='AnimeContent'>
        <div className="container">
            <div className="animecontent_inner">
                <div className="anime_top">
                <div class="btn-group animecontent_btnjanrlar" role="group">
                                <p className='nav_btn_languagename'>Janrlar</p>
                                  <ul  class="dropdown-menu">
                                    <li><a  class="dropdown-item" href="#">Janrlar 1</a></li>
                                    <li><a  class="dropdown-item" href="#">Janrlar 2</a></li>
                                    <li><a  class="dropdown-item" href="#">Janrlar 3</a></li>
                                  </ul>
                                  <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnimeContent