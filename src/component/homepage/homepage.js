import React from 'react'
import "./homepage.css"
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import logo from "../Images/logo.svg"
import paper from "../Images/imgpaperhome.svg"
import ei from "../Images/imgEIhome.svg"
import poster from "../Images/imgposterhome.svg"
import electra from "../Images/electrahome.svg"

export default function Homepage() {
  return (
    <>
        <Navbar />
        <div className="home">
            <div className="content">
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <h3>NESCO 2022</h3>
                <div className="arrow">
                </div>
            </div>
        </div>
 
        <div className="trailer">
            <div className="transition"></div>
            <div className="trailercontent">
                <div className="desc">
                    <h5>GET TO KNOW ABOUT NESCO</h5>
                    <h3>National Electrical Power<br></br>System Competition</h3>
                    <p>National Electrical Power System Competition (NESCO) merupakan sebuah kompetisi tingkat nasional Badan Semi Otonom (BSO) Magatrika (Mahasiswa Ketenagalistrikan) yang berada di bawah arahan Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada (KMTETI FT UGM) yang membahas mengenai permasalahan listrik tegangan tinggi yang bertujuan untuk meningkatkan perkembangan ketenagalistrikan khususnya di Indonesia.</p>
                </div>
                <div className="video">
                    <iframe   iframe width="560" height="315" src="https://www.youtube.com/embed/bTfLXu7cr_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="transition flip"></div>
        </div>
        <div className="competition">
            <div className="title">
                <p>Ikuti lomba-lomba di bawah ini dan menangkan</p>
                <h2>TOTAL HADIAH BELASAN JUTA RUPIAH!!</h2>
            </div>
            <div className="compeitem">
                <div className="listcompe">
                    <p>Paper Competition</p>
                    <img src={paper}></img>
                </div>
                <div className="listcompe">
                    <p>Electricity Innovation</p>
                    <img src={ei}></img>
                </div>
                <div className="listcompe">
                    <p>Poster Competition</p>
                    <img src={poster}></img>
                </div>
            </div>
        </div>
        <div className="webnas">
            <div className="title">
                <p>Webinar Nasional NESCO 2022</p>
                <h2>COMING REALLY SOON!!</h2>
            </div>
            <div className="electra">
                <img src={electra}></img>
            </div>
        </div>
        <div className="medpartsponsor">
            <div className="transition"></div>
            <h3>SPONSOR</h3>
            <div className="medpartsponsorlogo">

            </div>
            <h3>MEDIA PARTNER</h3>
            <div className="medpartsponsorlogo">

            </div>
        </div>
        <Footer />
    </>
  )
}
