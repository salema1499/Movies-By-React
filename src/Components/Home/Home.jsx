import React from 'react'
import { Navs } from '../Navs/Navs'
import { Header } from '../Header/Header'
import { Trend } from '../TrendingMovies/Trend'

export const Home = () => {
  return (
    <div>
      <Navs/>
       <Header/>
       <Trend/>
    </div>
  )
}
