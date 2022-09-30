import React from 'react'
import "./footer.css"
import logomini from "./image/logokecil.svg"
import instagram from "./image/instagram.svg"
import tiktok from "./image/tiktok.svg"
import twitter from "./image/twitter.svg"
import linkedin from "./image/linkedin.svg"
import facebook from "./image/facebook.svg"
import youtube from "./image/youtube.svg"
import line from "./image/line.svg"
import whatsapp from "./image/whatsapp.svg"
import email from "./image/email.svg"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <div className='Footer'>
            <div className='bagian bagian1'>
                <div className='logofooter'>
                    <img src={logomini}></img>
                    <p>NESCO 2022</p>
                </div>
                <div className='sosmed'>
                    <img src={instagram}></img>
                    <img src={facebook}></img>
                    <img src={line}></img>
                    <img src={youtube}></img>
                    <img src={linkedin}></img>
                    <img src={facebook}></img>
                    <img src={twitter}></img>
                </div>
            </div>
            <div className='bagian bagian2'>
              <h5>Quick Links</h5>
              <div className='various'>
                <div className='comp'>
                  <p><Link to="/paper">Paper Competition</Link></p>
                  <p><Link to="/poster">Poster Competition</Link></p>
                </div>
                <div className='comp'>
                  <p><Link to="/electricityinnovation">Electrivity Innovation</Link></p>
                  <p><Link to="/webinar">Webinar Nasional</Link></p>
                </div>
              </div>
            </div>
            <div className='bagian bagian3'>
              <h5>Get in touch</h5>
              <div className='contact'>
                <img src={whatsapp}></img>
                <p>+62 8xx-xxxx-xxxx</p>
              </div>
              <div className='contact'>
                <img src={email}></img>
                <p>xxxx@gmail.com</p>
              </div>
            </div>
        </div>
    </>
  )
}
