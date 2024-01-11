import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurent } from '../redux/storeSlice'


function Home() {
  const dispatch = useDispatch()
  const allRestaurent = useSelector((state) => state.storeSlice.allRestaurents)


  useEffect(() => {
    dispatch(fetchRestaurent())
  })
  return (
    <div className='bg-dark'>
      <h3 className='text-center text-white pt-3'>Available Dishes</h3>
      <Row className='p-3'>
        {
          allRestaurent ?
            allRestaurent.map(item => (
              <Col sm={12} md={4} lg={3} className='mb-3'>
                <Restcard restaurent={item}/>
              </Col>
            ))
            :
            null
        }

      </Row>
    </div>
  )
}

export default Home