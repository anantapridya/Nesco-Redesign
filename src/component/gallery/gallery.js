import React from 'react'
import Footer from '../footer/footer'
import Navigation from '../navbar/navbar'
import "./gallery.css"
import galleryphoto from "../Images/galleryphoto.svg"
export default function Gallery() {
  return (
    <>
        <Navigation/>
        <div className='gallery'>
            <div className='title'>
                <h2>NESCO GALLERY</h2>
            </div>
            <div className='galleryphotos'>
                <div className='columns'>
                    <img src={galleryphoto}></img>
                    <img src={galleryphoto}></img>
                    <img src={galleryphoto}></img>
                    <img src={galleryphoto}></img>
                </div>
                <div className='columns'>
                    <img src={galleryphoto}></img>
                    <img src={galleryphoto}></img>
                    <img src={galleryphoto}></img>
                    <img src={galleryphoto}></img>
                </div>
                <div className='columns'>
                    <img src={galleryphoto}></img>
                    <img src={galleryphoto}></img>
                    <img src={galleryphoto}></img>
                    <img src={galleryphoto}></img>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
