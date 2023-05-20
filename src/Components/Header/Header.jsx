import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <header className='container mymain' >
    
    <div className='one'>
    <div className='header'>
      <h2>Welcome.</h2>
       <p>
       Millions of movies, TV shows and people to discover. Explore now.
       </p>
      <form className='myform row'>
      <div className='col-lg-8 col-md-6 col-sm-6'>
       <input className='inputsearch' type='text' placeholder='Search for a movie, tv show, person.....'/>
      </div>
      <div className='col-lg-2 col-md-4 col-sm-2'>
       <input type='submit' className='buttomsearch' value='Search'/>
     </div>
       </form>
      </div>
    </div>
    </header>
  )
}
