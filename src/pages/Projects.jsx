import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[]);
  return (
    <>
    <div className="container-fluid pt-5" style={{backgroundColor: '#1a1a1a', height: '200px'}}>
        <h1 data-aos="fade-in" className='text-center page-title' style={{fontFamily: 'Montserrat', margin: '0px 0px', color : 'rgb(180, 157, 91)', fontSize: '50px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase'}}>open source contribution</h1>
    </div>
    <div className="container-fluid d-flex pt-5 card-1" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
        <div class="card mb-3 card-1-size" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
            <div class="col-md-4" style={{display: 'flex'}}>
            <img src="../../assets/power_toys.jpg" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain'}}/>
            </div>
            <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
                <h5 class="card-title"><b style={{color: 'rgb(180, 157, 91)'}}>Microsoft PowerToys: New Functionality for Hosts File Editor</b></h5>
                <br />
                <p class="card-text">
                    Added a 'No leading spaces' toggle to Hosts File Editor, improving formatting control and reliability through updated logic and unit tests.
                </p>
                <p class="card-text"><small class="text-body-secondary"><a href="https://github.com/microsoft/PowerToys/pull/41206" target='_blank' rel='noopener noreferrer'>https://github.com/microsoft/PowerToys/pull/41206</a></small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="container-fluid d-flex pt-5 card-2" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
        <div class="card mb-3 card-1-size" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
            <div class="col-md-4" style={{display: 'flex'}}>
            <img src="../../assets/power_toys.jpg" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain'}}/>
            </div>
            <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
                <h5 class="card-title"><b style={{color: 'rgb(180, 157, 91)'}}>Microsoft PowerToys: CmdPal Calculator Testing Title - Enhancing Code Quality</b></h5>
                <br />
                <p class="card-text">
                    Enhanced CmdPal Calculator stability by adding unit tests for 'Close on Enter,' ensuring reliable core functionality and long-term code health.
                </p>
                <p class="card-text"><small class="text-body-secondary"><a href="https://github.com/microsoft/PowerToys/pull/41202" target='_blank' rel='noopener noreferrer'>https://github.com/microsoft/PowerToys/pull/41202</a></small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="container-fluid d-flex pt-5 card-3" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
        <div class="card mb-3" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
            <div class="col-md-4" style={{display: 'flex'}}>
            <img src="../../assets/MM.jpeg" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain'}}/>
            </div>
            <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
                <h5 class="card-title"><b style={{color: 'rgb(180, 157, 91)'}}>MockMate: AI-Powered Interview Simulator</b></h5>
                <br />
                <p class="card-text">
                    MockMate: AI Interview Simulator – Full-stack app with FastAPI, React, and TensorFlow that analyzes body language, generates AI-driven questions, and evaluates answers. 🏆 1st Prize, DePaul Hackathon.
                </p>
                <p class="card-text"><small class="text-body-secondary"><a href="https://hackdepaul-mockmate.vercel.app/" target='_blank' rel='noopener noreferrer'>https://hackdepaul-mockmate.vercel.app/</a></small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="container-fluid d-flex pt-5 card-3" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
        <div class="card mb-3" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
            <div class="col-md-4" style={{display: 'flex'}}>
            <img src="../../assets/poly.jpg" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain'}}/>
            </div>
            <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
                <h5 class="card-title"><b style={{color: 'rgb(180, 157, 91)'}}>Polly Library - Unit Testing and Code Coverage</b></h5>
                <br />
                <p class="card-text">
                    Contributions to Polly, a popular .NET resilience tool, where I wrote extensive unit tests to improve code quality and stability for the RateLimiting feature.
                </p>
                <p class="card-text"><small class="text-body-secondary"><a href="https://github.com/App-vNext/Polly/pull/2711" target='_blank' rel='noopener noreferrer'>https://github.com/App-vNext/Polly/pull/2711</a></small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="container-fluid d-flex pt-5 card-3" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
        <div class="card mb-3" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
            <div class="col-md-4" style={{display: 'flex'}}>
            <img src="../../assets/poly.jpg" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain'}}/>
            </div>
            <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
                <h5 class="card-title"><b style={{color: 'rgb(180, 157, 91)'}}>Polly Library - New Caching Strategy (IHybrid)</b></h5>
                <br />
                <p class="card-text">
                    A significant contribution to the Polly library, involving the implementation of a new Polly.Caching package to provide developers with a powerful caching strategy.
                </p>
                <p class="card-text"><small class="text-body-secondary"><a href="https://github.com/App-vNext/Polly/pull/2709" target='_blank' rel='noopener noreferrer'>https://github.com/App-vNext/Polly/pull/2709</a></small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="container-fluid d-flex pt-5 card-3" style={{backgroundColor: '#1a1a1a', height: '400px', justifyContent: 'center'}}>
        <div class="card mb-3" data-aos="zoom-in" style={{maxWidth: "540px", height: '300px', color: 'white', border: '1px solid rgb(47, 48, 49)'}}>
        <div class="row g-0" style={{height: '100%'}}>
            <div class="col-md-4" style={{display: 'flex'}}>
            <img src="../../assets/neighborly.jpg" class="img-fluid rounded-start" alt="noimage" style={{objectFit: 'contain'}}/>
            </div>
            <div class="col-md-8">
            <div class="card-body text-white" style={{backgroundColor: 'rgb(47, 48, 49)', height: '100%', fontFamily: "'Montserrat'"}}>
                <h5 class="card-title"><b style={{color: 'rgb(180, 157, 91)'}}>Neighborly: A Hyperlocal Talent Marketplace</b></h5>
                <br />
                <p class="card-text">
                    A full-stack application in development that connects local talent with market demands. The platform is built with ReactJS, .NET, and MongoDB Atlas.
                </p>
                <p class="card-text"><small class="text-body-secondary"><a href="https://github.com/mohammed-saalim/Neighborly" target='_blank' rel='noopener noreferrer'>https://github.com/mohammed-saalim/Neighborly</a></small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <style>
        {`
        @media(max-width: 768px){
        .card-1-size{
        height : 600px !important;
        }
        .page-title{
        font-size : 30px !important;
        line-height : 1.2 !important;
        }
        .card-1{
        height : 750px !important;
        }
        .card-2{
        height :750px !important;
        }
        .card-3{
        height : 600px !important;
        }
        .card-3 .col-md-4 {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
        }
        .card-3 img {
            margin: 0 auto !important;
            display: block !important;
        }
        }
        `}
    </style>
    </>
  )
}
export default Projects