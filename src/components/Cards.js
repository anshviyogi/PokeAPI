import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Cards({id,name,image}) {
  return (
    <Link style={{color:"black",textDecoration:"none",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;"}} to={`/pokemon/${id}`}>
    <Card style={{ width: '16rem',marginRight:"20px",marginBottom:"30px", justifyContent:"center",display:"flex",textAlign:"center"}}>

      <div style={{backgroundColor:"rgb(245,245,245)"}} >
      <Card.Img variant="top" src={image} style={{width:"120px",paddingBottom:"50px"}} />
      </div>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p>#00{id}</p>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default Cards;