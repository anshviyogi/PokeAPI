import React from 'react'
import './Home.css'
import {Container} from 'react-bootstrap'
import Cards from './Cards';

function Home({allPokemons,search}){

  return (
    <Container>
        <h3 style={{textAlign:"center",padding:"10px"}}>Pokemon Cards</h3>

        {
          allPokemons.filter((val) =>{
            if(search === ""){
              return val
            }else if(val.name.toLowerCase().includes(search.toLowerCase())){
              return val
            }
          }).map(data =>{
            return (
              <div className='home__cards'>
                <Cards id={data.id} name={data.name} image={data.sprites.other.home.front_default}/>
              </div>
            )
          })
        }

    </Container>
  )
}

export default Home