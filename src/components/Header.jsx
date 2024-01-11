import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar className="bg-danger ">
                <Container>
                    <Navbar.Brand href="#home">
                        <h3 style={{textTransform:'capitalize'}}><i class="fa-solid fa-utensils fa-2x me-3"></i>{' '}
                        Cafeteria</h3>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header