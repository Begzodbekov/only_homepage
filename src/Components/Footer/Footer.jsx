import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <div className='Footer'>
        <div className="container">
            <div className="footer_inner">
                <div className='footer_location'>
                    <h2>Manzil</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus tempora inventore maxime? Sequi, laudantium.</p>
                </div>
                <div className='footer_contact'>
                    <h2>Kontaktlar</h2>
                    <p>+998992343294</p>
                </div>
                <div className='footer_social'>
                    <h2 className='footer_social_title'>Ijtimoiy tarmoqlar</h2>
                    <ul className='footer_social_list'>
                        <li className='footer_social_item'><i class="bi bi-instagram"></i></li>
                        <li className='footer_social_item'><i class="bi bi-youtube"></i></li>
                        <li className='footer_social_item'><i class="bi bi-telegram"></i></li>
                    </ul>
                    <h2 className='footer_social_feedback'>Talablar va takliflar uchun</h2>
                    <form action="" className='footer_social_form'>
                        <input type="text" placeholder='Emailni kiriting' />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer