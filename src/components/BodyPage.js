import React,{useState,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import './BodyPage.css'

function BodyPage({allPokemons}) {

  const[data,setData] = useState('')
    const id = useParams()

    // Sorting data
    useEffect(()=>{
      allPokemons.filter(data =>{
        if(data.id == id.id){
          setData(data)
        }
      })
    })
    
    // For first undefined value
    if(data.sprites == undefined){
      return(
        <div>
            <h1 style={{textAlign:"center"}}>Loading Data . . .</h1>
        </div>
      );
  }

  return (
    <Container>
      <Row>
        <Col className='image-col'>
      <img className='poke-image' src={data.sprites.other.home.front_default}/>
      </Col>
      </Row>


      <Col>
      <div style={{textAlign:"center"}}>
      <h3 className='pokemon-name'>Specialization of {data.name}</h3>
      {/* Height and column row */}
      <Row>
        <Col>
        <p style={{fontWeight:"500"}}>Height : {data.height}feet</p>
        </Col>
        <Col>
        <p style={{fontWeight:"500"}}>Weight : {data.weight}Kg</p>
        </Col>
      </Row>
      </div>

      {/* Abilities */}
      <h4 style={{textAlign:"center"}}>{data.abilities.length} Abilities of {data.name}</h4>
      <ol style={{marginLeft:"60px"}}>
      {
        data.abilities.map(data =>{
          return(
              <li>{data.ability.name}</li>
          )
        })
      }
      </ol>

      {/* Moves */}
      <h4 style={{textAlign:"center"}}>Moves</h4>

      {/* List of the moves */}
      <div className='pokemon-moves'>
        {
          data.moves.map(data =>{
            return <li>{data.move.name}</li>
          })
        }
      </div>


      {/* Stats */}
      <h4 style={{textAlign:"center"}}>Stats</h4>

      <div className='pokemon-stats'>
        {
          data.stats.map(data =>{
            return <li>{data.stat.name}</li>
          })
        }
      </div>
      </Col>
    </Container>
  )
}

export default BodyPage