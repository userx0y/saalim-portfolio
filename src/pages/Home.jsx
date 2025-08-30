import { useRef, useEffect } from "react";
import Profile from "../assets/Saalim.jpg";
import Typed from "typed.js";
import Button from "../components/Button";
import TechStackButton from "../components/TechStackButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
const Home = () => {
    const ref = useRef(null);
    useEffect(()=>{
        AOS.init({duration: 1000});
        const typed = new Typed(ref.current, { strings:[".NET DEVELOPER", "REACTJS DEVELOPER", "FULL STACK DEVELOPER", "SOFTWARE DEVELOPER"],
            backSpeed: 30,
            typeSpeed: 50,
            loop : true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
  return (
    <>
    <div className="container-fluid" style={{height: '550px', 'backgroundColor': '#1a1a1a'}}>
        <div className="container pt-5 home-flex" style={{display : 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{height: '150px'}}>
                <span ref={ref} style={{fontSize: '3rem', color: '#044bb4ff'}}></span>
                <p className="text-below-span" style={{color: 'white', fontSize: '2.2rem', marginTop: '50px', fontFamily: "'Montserrat'"}}>Building Scalable & Modern Web Solutions</p>
            </div>
            
            <img src={Profile} alt="noimage" style={{maxWidth: '400px', width: '100%', borderRadius: '20px', height: '500px', objectFit: 'cover'}} />
        </div>
    </div>
    <div className="container-fluid pt-4" style={{height: '140px', backgroundColor: '#1a1a1a', display: 'flex', justifyContent : 'center'}}>
        <div className="exp-btn">
            <Button />
        </div>
    </div>
    <div className="container-fluid text-center small-intro" style={{height: '800px', paddingTop: '20px', letterSpacing : '1px', fontFamily: 'Montserrat', backgroundColor: '#1a1a1a', color: 'white', width: '100%'}}>
        <div className="aboutmex">
            <h1 data-aos="fade-in">Hello!</h1>
            <h1 data-aos="fade-in">My Name is Mohammed Saalim Kartapillai</h1>
            <h4 data-aos="zoom-in" style={{color: 'gray'}}>I’m passionate about coding and creating projects that solve real problems.</h4>
            <br /><br /><br />
            <h1 style={{color: 'rgb(180, 157, 91)'}}>Quick REVIEW</h1>
            <a href="#tech-stack" className="btn btn-outline-warning mt-3" style={{borderRadius: "30px", padding: "10px 20px", fontWeight: "600"}}>Go to Tech Stack Section</a><br />
            <a href="#academics-section" className="btn btn-outline-warning mt-3" style={{borderRadius: "30px", padding: "10px 24px", fontWeight: "600"}}>Go to Academic Section</a><br/>
            <NavLink to="projects" className="btn btn-outline-warning mt-3" style={{borderRadius: "30px", padding: "10px 47px", fontWeight: "600"}}>Go to Open Source</NavLink>
        </div>
        <div className="certificates" style={{paddingTop: '100px'}}>
            <h1 className="pb-3" style={{fontSize: '30px', color : 'rgb(180, 157, 91)'}}>CERTIFICATES</h1>
            <div>
                <p data-aos="fade-in" style={{color: 'gray'}}>Microsoft Certified Azure Developer Associate (Apr 2025)</p>
                <p data-aos="fade-in" style={{color: 'gray'}}> <a href="https://learn.microsoft.com/en-us/users/mohammedsaalim-6321/credentials/70ec23230f2f61e4" target="_blank" rel="noopener noreferrer">Microsoft Certified Azure Fundamentals (Dec 2024)</a></p>
                <p data-aos="fade-in" style={{color: 'gray'}}>React – The Complete Guide certificate from Udemy (Jan. 2021)</p>
                <p data-aos="fade-in" style={{color: 'gray'}}>British Council Spoken English Upper Intermediate M1 (Aug. 2019)</p>
                <p data-aos="fade-in" style={{color: 'gray'}}>NIIT Data Structures & Algorithms & C,C++ (Sep.2018)</p>
            </div>
        </div>
    </div>
    <div className="container-fluid text-center tech-stack-heading" id="tech-stack" style={{paddingTop: '50px',height: '100px', fontFamily: "'Montserrat'", backgroundColor: '#1a1a1a'}}>
        <h1 data-aos="fade-in" style={{fontSize: '30px', color: 'rgb(180, 157, 91)'}} >TECH STACK</h1>
    </div>
    <div className="container-fluid gap-4 d-flex tech-logo" style={{backgroundColor: '#1a1a1a', height: "100px", justifyContent: 'center'}}>
        <div className="card mb-3" style={{maxWidth: "18rem", height: '150px', border: 'none'}}>
            <div className="card-body card-body-logo" style={{backgroundColor: '#1a1a1a'}}>
                <h1 className="card-title" style={{fontSize: '100px'}}><i data-aos="fade-in" className="devicon-csharp-plain colored"></i></h1>
            </div>
        </div>
        <div className="card mb-3" style={{maxWidth: "18rem", height: '150px', border: 'none'}}>
            <div className="card-body card-body-logo" style={{backgroundColor: '#1a1a1a'}}>
                <h1 className="card-title" style={{fontSize: '100px'}}><i data-aos="fade-in" class="devicon-dotnetcore-plain colored"></i></h1>
            </div>
        </div>
        <div className="card mb-3" style={{maxWidth: "18rem", height: '150px', border: 'none'}}>
            <div className="card-body card-body-logo" style={{backgroundColor: '#1a1a1a'}}>
                <h1 className="card-title" style={{fontSize: '100px'}}><i data-aos="fade-in" class="devicon-azure-plain colored"></i></h1>
            </div>
        </div>
        <div className="card mb-3" style={{maxWidth: "18rem", height: '150px', border: 'none'}}>
            <div className="card-body card-body-logo" style={{backgroundColor: '#1a1a1a'}}>
                <h1 className="card-title" style={{fontSize: '100px'}}><i data-aos="fade-in" class="devicon-react-original colored"></i></h1>
            </div>
        </div>
    </div>
    <div className="container-fluid last-section" style={{display: 'flex', height: '250px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1a'}}>
        <TechStackButton />
    </div>
    <div className="container-fluid education-section" style={{textAlign: 'center', color: 'rgb(180, 157, 91)', backgroundColor: '#1a1a1a', height: '100px'}}>
        <h1 id="academics-section" style={{fontSize: '30px', fontFamily: "'Montserrat'"}} data-aos="fade-in">ACADEMICS</h1>
    </div>
    <div className="container-fluid depaul-card" style={{backgroundColor: '#1a1a1a', height: '400px', display: 'flex', justifyContent: 'center'}}>
        <div class="card mb-3" style={{border: 'none', height: '50px'}}>
            <img src="../../assets/depaul_blue.jpeg" class="card-img-top" alt="noimage"  />
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', fontFamily: "'Montserrat'", maxWidth:'900px'}}>
                <h5 class="card-title">Postgraduate (PG)</h5>
                <p class="card-text">M.S in Computer Science</p>
                <p class="card-text">DePaul University | Aug 2023 — Jun 2025</p>
                <p class="card-text"><small class="text-body-light">Location: Chicago, United States</small></p>
            </div>
        </div>
    </div>
    <div className="container-fluid svce-section" style={{backgroundColor: '#1a1a1a', height: '550px', display: 'flex', justifyContent: 'center'}}>
        <div class="card mb-3" style={{border: 'none', height: '50px'}}>
            <img className="svce-image" src="../../assets/svce.jpg" class="card-img-top" alt="no_image" style={{width: '100%', height: '167px', objectFit: 'cover'}} />
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', fontFamily: "'Montserrat'", maxWidth:'900px'}}>
                <h5 class="card-title">Undergraduate (UG)</h5>
                <p class="card-text">B.Tech Information Technology</p>
                <p class="card-text">Sri Venkateswara College of Engineering | Aug 2017 — May 2021</p>
                <p class="card-text"><small class="text-body-light">Location: Chennai, India</small></p>
            </div>
        </div>
    </div>
    <style>
        {`
        .typed-cursor{
        font-size : 3rem;
        color : white;
        }
        @media (max-width: 768px){
        span{
        font-size : 19px !important;
        }
        .svce-section{
        height : 400px !important;
        }
        .text-below-span{
        margin-top : 20px !important;
        font-size : 1.2rem !important;
        }
        .home-flex{
        flex-direction : column;
        align-items : center;
        }
        .exp-btn{
        margin-top : 140px;
        }
        .aboutmex{
        margin-top : 90px;
        }
        .small-intro{
        height : 1000px !important;
        }
        .tech-stack-heading{
        height : 400px !important;
        padding-top : 100px !important;
        }
        .tech-logo{
        padding-top : 150px !important;
        display: flex;
        flex-direction : column;
        align-items : center;
        }
        .card-body-logo:hover{
        background-color : rgb(16, 17, 18) !important;
        }
        .last-section{
        height : 500px !important;
        padding-top : 300px !important;
        }
        .education-section{
        height : 100px !important;
        }
        .depaul-card{
        height : 320px !important;
        }
        }

        .card-body-logo:hover{
        background-color : rgba(18, 16, 16, 1) !important;
        }
        `}        
    </style>
    </>
  )
}
export default Home