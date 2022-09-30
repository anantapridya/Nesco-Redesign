import React from 'react'
import './navbar.css'
import logonavbar from "./logonavbar.svg"
import { Link } from 'react-router-dom'
import { Dropdown, NavDropdown, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  return (
    <>
        <nav>
            <div className='Wrapper'>
                <Link to="/"><div className='logo'>
                    <img src={logonavbar}></img>
                    <p>NESCO 2022</p>
                </div>
                </Link>
                <div className='navitem'>
                    <ul>
                        <li><Link className='link' to="/">FAQ</Link></li>
                        <li>
                            <NavDropdown title="Competition" className='link'>
                            <div className='dropdownitem'>
                                <NavDropdown.Item><Link to="/paper" className='dropitem linkdrop'>Paper Competition</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/electricityinnovation" className='linkdrop'>
                                    Electricity Innovation</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item><Link to="/poster" className='linkdrop'>Poster Competition</Link></NavDropdown.Item>
                                {/* <NavDropdown.Item><Link to="/webinar" className='linkdrop'>Webinar Nasional</Link></NavDropdown.Item> */}
                            </div>
                            </NavDropdown></li>
                        <li><Link className='link' to="/webinar" >Webinar</Link></li>
                        <li><Link className='link' to="/gallery" >Gallery</Link></li>
                        <li><Link className='link login' to="/login" >Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}
