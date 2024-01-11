import React from 'react'
import { Card } from 'react-bootstrap'

function Restcard({restaurent}) {
  return (
    <>
     <Card style={{ width: '18rem',marginTop:'25px' }}>
      <Card.Img style={{height:'250px'}} variant="top" src={restaurent.photograph} />
      <Card.Body>
        <Card.Title className='text-success' style={{fontSize:'25px'}}>{restaurent.name}</Card.Title>
        <Card.Text>
        <p className='fw-bolder'><span >Neighborhood: {restaurent.neighborhood}</span></p>
         <p className='fw-bolder '><span >Cuisine Type: {restaurent.cuisine_type}</span></p>
        </Card.Text>
      </Card.Body>
    </Card>
    
    
    
    </>
  )
}

export default Restcard