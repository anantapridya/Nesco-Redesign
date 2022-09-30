import React from 'react'
import Footer from '../footer/footer'
import Navigation from '../navbar/navbar'
import electra from "../Images/electrawebnas.svg"

export default function Webnas() {
  return (
    <>
        <Navigation/>
        <div className="webnas">
            <div className="title">
                <p>Webinar Nasional NESCO 2022</p>
                <h2>COMING REALLY SOON!!</h2>
            </div>
            <div className="electra">
                <img src={electra}></img>
            </div>
        </div>
        <Footer/>
    </>
  )
}
