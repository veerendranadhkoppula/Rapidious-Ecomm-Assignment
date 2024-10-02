import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { useHistory } from "react-router-dom";
import SearchBarForProducts from './SearchBarForProducts'


function NavBar() {

    let history = useHistory()
    const dispatch = useDispatch()

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // logout
    const logoutHandler = () => {
        dispatch(logout()) // action
        history.push("/login")
        window.location.reload()
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to="/">
    <Navbar.Brand>
        <img 
            src="https://media.licdn.com/dms/image/v2/D560BAQGNuXsGUBddAg/company-logo_200_200/company-logo_200_200/0/1666854408230/rapidious_logo?e=2147483647&v=beta&t=HV1UB-7pvK9ee3Qv--Q39Ij8FbBRJUnGnDJHzCXZ7QE" 
            alt="Rapidious Logo" 
            width="50" // Set the width as needed
            height="50" // Set the height as needed
        />
    </Navbar.Brand>
              </LinkContainer>
                <LinkContainer to="/">
                        <Navbar.Brand> Rapidious Ecomm</Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <Navbar.Brand><i className="mb-2 fas fa-home"> Home</i></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            {/* All Products */}
                            <LinkContainer to="/">
                                <Nav.Link >All Products</Nav.Link>
                            </LinkContainer>

                            {/* New Product (Admins Only) */}

                            {userInfo && userInfo.admin ?
                                <LinkContainer to="/new-product/">
                                    <Nav.Link >Add Product</Nav.Link>
                                </LinkContainer>
                                : ""
                            }

                                <span className="">
                                    <SearchBarForProducts />
                                </span>

                        </Nav>

                        {/* login-logout condition here */}

                        {userInfo ?
                            <div>
                                <NavDropdown className="navbar-nav text-capitalize" title={userInfo.username} id='username'>
                                    <LinkContainer to="/account">
                                        <NavDropdown.Item>Account Settings</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/all-addresses/">
                                        <NavDropdown.Item>Address Settings</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/stripe-card-details/">
                                        <NavDropdown.Item>Card Settings</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/all-orders/">
                                        <NavDropdown.Item>All Orders</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            :

                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                            </LinkContainer>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
