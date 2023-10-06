import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.scss'
import Hero from '../../Components/Hero/Hero'
import AnimeContent from '../../Components/AnimeContent/AnimeContent'
import News from '../../Components/News/News'
import Footer from '../../Components/Footer/Footer'
function Home() {
  return (
    <div className='Home'>
        <Header/>
        <Hero/>
        <AnimeContent/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Home