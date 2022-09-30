import React from 'react'
import Footer from '../footer/footer'
import Navigation from '../navbar/navbar'
import paperimg from "../Images/imgposter.svg"
import paperregis from "../Images/imgposterregis.svg"
import attendee from "../Images/attendee.svg"
import fee from "../Images/fee.svg"
import reward from "../Images/rewardposter.svg"
import timeline from "../Images/timelineposter.svg"
import whatsapp from "../Images/whatsapp.svg"
import line from "../Images/line.svg"

export default function Poster() {
  return (
    <>
    <Navigation />
      <div className='compehome'>
          <h3>Poster Competition</h3>
          <p>Lomba pembuatan poster mengenai ketenagalistrikan yang dapat diikuti oleh mahasiswa maupun pelajar SMA sederajat. Pembagian<br></br> subtema dapat dilihat pada buku panduan (guidebook).</p>
          <div className='compeimg'>
            <img src={paperimg}></img>
          </div>
      </div>
      <div className="transition"></div>
      <div className='compecontent'>
        <div className='comperegis'>
          <h5>Poster Competition</h5>
          <div>
            <img src={paperregis}></img>
          </div>
          <div className='info'>
            <div className='attendee'>
              <img src={attendee}></img>
              <a>Mahasiswa</a>
            </div>
            <div className='attendee fee'>
              <img src={fee}></img>
              <a>Rp 50.000 / team</a>
            </div>
          </div>
          <a className='guidebook'>Guidebook</a>
          <a className='guidebook enroll'>Daftar Sekarang</a>
          <a className='help'>pusat bantuan</a>
        </div>
        <div className='reward'>
          <img src={reward}></img>
          <img src={timeline}></img>
        </div>
      </div>
      <div className='compecontact'>
        <div className='cp'>
          <h5>Contact Person</h5>
          <div className='person'>
            <div className='p1'>
              <p>Lia</p>
              <div className='listcp'>
                <div className='whatsapp'>
                  <img src={whatsapp}></img>
                  <a>08xxxxxxxxxx</a>
                </div>
                <div className='line'>
                  <img src={line}></img>
                  <a>abcd1234</a>
                </div>
              </div>
            </div>
            <div className='p1'>
              <p>Arsy</p>
              <div className='listcp'>
                <div className='whatsapp'>
                  <img src={whatsapp}></img>
                  <a>08xxxxxxxxxx</a>
                </div>
                <div className='line'>
                  <img src={line}></img>
                  <a>abcd1234</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}
