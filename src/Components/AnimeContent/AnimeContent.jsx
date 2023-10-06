import React from 'react'
import './AnimeContent.scss'
function AnimeContent() {
  return (
    <div className='AnimeContent'>
        <div className="container">
            <div className="animecontent_inner">
                <div className="anime_top">
                  {/* <div class="btn-group animecontent_btnjanrlar" role="group">
                                <p className='nav_btn_languagename'>Janrlar</p>
                                  <ul  class="dropdown-menu">
                                    <li><a  class="dropdown-item" href="#">Janrlar 1</a></li>
                                    <li><a  class="dropdown-item" href="#">Janrlar 2</a></li>
                                    <li><a  class="dropdown-item" href="#">Janrlar 3</a></li>
                                  </ul>
                                  <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button>
                    </div> */}
                </div>
                <div className="anime_bottom">
                  <div className="anime_bottom_left">
                    <div className='anime_left_slider1'>
                      <div className='anime_left_slidertop'>
                        <h3>Yangi enimelar</h3>
                        <span>
                          <i class="bi bi-caret-left-fill anime_slider_arrow1"></i>
                          <i class="bi bi-caret-right-fill anime_slider_arrow1"></i>
                        </span>
                      </div>
                      <div className='anime_left_card1'>
                        <div>
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                        </div>
                        {/* <div>
                          <i class="bi bi-play-circle"></i>
                          <i class="bi bi-play-circle"></i>
                          <i class="bi bi-play-circle"></i>
                          <i class="bi bi-play-circle"></i>
                        </div> */}
                      </div>
                    </div>

                    <div className='anime_left_slider1'>
                      <div className='anime_left_slidertop'>
                      <h3>Yangi enimelar</h3>
                        <span>
                          <i class="bi bi-caret-left-fill anime_slider_arrow1"></i>
                          <i class="bi bi-caret-right-fill anime_slider_arrow1"></i>
                        </span>
                      </div>
                      <div className='anime_left_card1'>
                      <div>
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                        </div>
                        {/* <div>
                          <i class="bi bi-play-circle"></i>
                          <i class="bi bi-play-circle"></i>
                          <i class="bi bi-play-circle"></i>
                          <i class="bi bi-play-circle"></i>
                        </div> */}
                      </div>
                    </div>

                    <div className='anime_left_slider1'>
                      <div className='anime_left_slidertop'>
                      <h3>Yangi enimelar</h3>
                        <span>
                          <i class="bi bi-caret-left-fill anime_slider_arrow1"></i>
                          <i class="bi bi-caret-right-fill anime_slider_arrow1"></i>
                        </span>
                      </div>
                      <div className='anime_left_card1'>
                        <div>
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                          <img className='anime_card_img' src='https://i0.wp.com/thegeekiary.com/wp-content/uploads/2023/01/HIGH-CARD_visual.png?fit=806%2C1200&ssl=1' alt="" />
                        </div>
                        {/* <div>
                          <i class="bi bi-play-circle"></i>
                          <i class="bi bi-play-circle"></i>
                          <i class="bi bi-play-circle"></i>
                          <i class="bi bi-play-circle"></i>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="anime_bottom_right">
                    <h2 className='anime_bottom_righth2'>Lorem, ipsum dolor.</h2>
                    <img className='anime_bottom_righimg' src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                    <ul className='anime_bottom_rightList'>
                      <li className='anime_bottom_rightitem'>
                        <h2>1</h2>
                        <img src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                        <span>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem, ipsum.</p>
                        </span>
                      </li>
                      <li className='anime_bottom_rightitem'>
                        <h2>2</h2>
                        <img src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                        <span>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem, ipsum.</p>
                        </span>
                      </li>
                      <li className='anime_bottom_rightitem'>
                        <h2>3</h2>
                        <img src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                        <span>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem, ipsum.</p>
                        </span>
                      </li>
                      <li className='anime_bottom_rightitem'>
                        <h2>4</h2>
                        <img src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                        <span>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem, ipsum.</p>
                        </span>
                      </li>
                      <li className='anime_bottom_rightitem'>
                        <h2>5</h2>
                        <img src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                        <span>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem, ipsum.</p>
                        </span>
                      </li>
                      <li className='anime_bottom_rightitem'>
                        <h2>6</h2>
                        <img src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                        <span>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem, ipsum.</p>
                        </span>
                      </li>
                      <li className='anime_bottom_rightitem'>
                        <h2>7</h2>
                        <img src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                        <span>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem, ipsum.</p>
                        </span>
                      </li>
                      <li className='anime_bottom_rightitem'>
                        <h2>8</h2>
                        <img src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                        <span>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem, ipsum.</p>
                        </span>
                      </li>
                      <li className='anime_bottom_rightitem'>
                        <h2>9</h2>
                        <img src="https://i.ytimg.com/vi/f-bAvlTfJI8/maxresdefault.jpg" alt="" />
                        <span>
                          <h3>Lorem, ipsum.</h3>
                          <p>Lorem, ipsum.</p>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnimeContent