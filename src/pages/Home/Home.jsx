import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.scss'
import Hero from '../../Components/Hero/Hero'
import AnimeContent from '../../Components/AnimeContent/AnimeContent'
function Home() {
  return (
    <div className='Home'>
        <Header/>
        <Hero/>
        <AnimeContent/>
    </div>
  )
}

export default Home