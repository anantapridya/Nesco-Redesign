import React from 'react'
import Footer from '../footer/footer'
import Navigation from '../navbar/navbar'
import imgei from "../Images/imgei.svg"
import imgeiregis from "../Images/imgeiregis.svg"
import attendee from "../Images/attendee.svg"
import fee from "../Images/fee.svg"
import rewardei from "../Images/rewardei.svg"
import timelineei from "../Images/timelineei.svg"
import whatsapp from "../Images/whatsapp.svg"

export default function EI() {
  return (
    <>
    <Navigation />
      <div className='compehome'>
          <h3>Electricity Innovation</h3>
          <p>Lomba pembuatan esai mengenai kendaraan bertenaga listrik yang bertemakan Electric Vehicle's Battery efficiency for Sustainable<br></br> Capacity. Kegiatan ini merupakan ajang kompetisi yang bertujuan untuk mewadahi ide dan kreativitas pelajar Indonesia di bidang<br></br> pengembangan kendaraan listrik.</p>
          <div className='compeimg'>
            <img src={imgei}></img>
          </div>
      </div>
      <div className="transition"></div>
      <div className='compecontent'>
        <div className='comperegis'>
          <h5>Electricity Innovation</h5>
          <div>
            <img src={imgeiregis}></img>
          </div>
          <div className='info'>
            <div className='attendee'>
              <img src={attendee}></img>
              <a>Mahasiswa</a>
            </div>
            <div className='attendee fee'>
              <img src={fee}></img>
              <a>Rp 75.000 / team</a>
            </div>
          </div>
          <a className='guidebook'>Guidebook</a>
          <a className='guidebook enroll'>Daftar Sekarang</a>
          <a className='help'>pusat bantuan</a>
        </div>
        <div className='reward'>
          <img src={rewardei}></img>
          <img src={timelineei}></img>
        </div>
      </div>
      <div className='compecontact'>
        <div className='cp'>
          <h5>Contact Person</h5>
          <div className='person'>
            <div className='p1'>
              <p>Attha</p>
              <div className='listcp'>
                <div className='whatsapp'>
                  <img src={whatsapp}></img>
                  <a>08xxxxxxxxxx</a>
                </div>
              </div>
            </div>
            <div className='p1'>
              <p>Fahreza</p>
              <div className='listcp'>
                <div className='whatsapp'>
                  <img src={whatsapp}></img>
                  <a>08xxxxxxxxxx</a>
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
