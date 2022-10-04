import React, { useState } from 'react'
import { Link, Switch } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './Header.css'
import Home from './Home'
import {useNavigate} from 'react-router-dom'

function Header({allPokemons}) {
  const[search,setSearch] = useState('')
  const navigate = useNavigate()

  function selectSearch(e){
    console.log(e.id)
    navigate(`/pokemon/${e.id}`)
  }
  return (
    <>
    <nav className='header'>
        {/* Logo Image */}
        <Link to='/'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" className='header__logo'/>
        </Link>

{/* Search Bar */}
        <div style={{ width: 1050 }}>
          <ReactSearchAutocomplete
            autoFocus
            items={allPokemons}
            onSearch={e => setSearch(e)}
            onSelect={selectSearch}
          />
        </div>

        <div className='header__nav'>

            <Link to='/'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" className='header__logo'/>
        </Link>

        </div>
    </nav>

{/* Render the home page */}
    <Home allPokemons={allPokemons} search={search}/>
    </>
  )
}

export default Header