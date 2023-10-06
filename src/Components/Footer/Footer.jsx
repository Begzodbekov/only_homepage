import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <div className='Footer'>
        <div className="container">
            <div className="footer_inner">
                <div>
                    <h2>Manzil</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus tempora inventore maxime? Sequi, laudantium.</p>
                </div>
                <div>
                    <h2>Kontaktlar</h2>
                    <p>+998992343294</p>
                </div>
                <div>
                    <h2>Ijtimoiy tarmoqlar</h2>
                    <ul>
                        <li><i class="bi bi-instagram"></i></li>
                        <li><i class="bi bi-youtube"></i></li>
                        <li><i class="bi bi-telegram"></i></li>
                    </ul>
                    <h2>Talablar va takliflar uchun</h2>
                    <form action="">
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