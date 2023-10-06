import React from 'react'
import './Hero.scss'
function Hero() {
  return (
    <div className='Hero'>
        <div className="container">
            <div className="hero_inner">
                <div className="hero_slider1">
                    <div className='hero_slider_im1'>
                        <img className='hero_img1' src="https://media.japanesewithanime.com/uploads/akira-bike-slide-tengen-toppa-gurren-lagann-ep01.jpg" alt="" />
                    </div>
                    <div className='hero_slider_button1'>
                        <div className='hero_slider_title'>
                            <h1>Lorem ipsum dolor sit amet consectetur [2- mavsum]</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut dignissimos obcaecati, in illum atque fugiat, expedita dolorum delectus dicta assumenda! Vel enim quas quasi, asperiores doloremque pariatur rerum aliquid.</p>
                        </div>
                        <button>Tomosha qilish</button>
                    </div>
                    <div className="hero_navigation">
                        <i class="bi bi-caret-left-fill hero_navigation_left"></i>
                        <i class="bi bi-caret-right-fill hero_navigaton_right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero