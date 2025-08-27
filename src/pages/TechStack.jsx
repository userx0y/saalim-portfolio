import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const TechStack = () => {
  return (
    <>
    <div className="container-fluid pt-5 text-center page-title-div" style={{backgroundColor: '#1a1a1a', height: '150px'}}>
        <h1 className='page-title' style={{color: 'rgb(180, 157, 91)', fontFamily: '"Montserrat"', fontSize: '50px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700}}>TECH STACK</h1>
    </div>
    <div className="container-fluid pt-5 text-center" style={{backgroundColor: '#1a1a1a', height: '300px'}}>
        <h1 style={{color: 'rgb(180, 157, 91)', fontFamily: '"Montserrat"', fontSize: '30px'}}>FRAMEWORKS</h1>
        <br />
        <Swiper modules={[Autoplay]} slidesPerView={1} spaceBetween={30} autoplay={{ delay : 0, disableOnInteraction : false }} speed={5000} loop={true}>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="card-img-top devicon-dotnetcore-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">ASP.NET Core</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className='devicon-react-original colored' style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">React</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-angular-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Angular</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-reactnative-original colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">React Native</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div className="container-fluid pt-5 text-center" style={{backgroundColor: '#1a1a1a', height: '250px'}}>
        <h1 style={{color: 'rgb(180, 157, 91)', fontFamily: '"Montserrat"', fontSize: '30px'}}>LANGUAGES</h1>
        <br />
        <Swiper modules={[Autoplay]} loop={true} spaceBetween={30} slidesPerView={1} speed={5000} autoplay={{ delay: 0 }}>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-csharp-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">C#</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-java-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Java</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-python-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Python</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-javascript-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">JavaScript</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-typescript-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">TypeScript</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-cplusplus-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">C++</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-csharp-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">LINQ</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-html5-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">HTML</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-css3-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">CSS</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div className="container-fluid pt-5 text-center" style={{backgroundColor: '#1a1a1a', height: '250px'}}>
        <h1 style={{color: 'rgb(180, 157, 91)', fontFamily: '"Montserrat"', fontSize: '30px'}}>TOOLS</h1>
        <br />
        <Swiper modules={[Autoplay]} loop={true} speed={5000} slidesPerView={1} spaceBetween={30} autoplay={{ delay : 0 }}>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-github-original colored" style={{backgroundColor: '#1a1a1a', color: 'white', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">GitHub</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-vscode-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">VS Code</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-visualstudio-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Visual Studio</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-postman-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Postman</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-azure-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Azure Portal</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div className="container-fluid pt-5 text-center" style={{backgroundColor: '#1a1a1a', height: '250px'}}>
        <h1 style={{color: 'rgb(180, 157, 91)', fontFamily: '"Montserrat"', fontSize: '30px'}}>LIBRARIES</h1><br />
        <Swiper modules={[Autoplay]} loop={true} speed={5000} slidesPerView={1} spaceBetween={30} autoplay={{delay:0}}>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-entityframeworkcore-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">EF Core</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-dotnetcore-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Dapper</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-dotnetcore-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Serilog</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon" style={{backgroundColor: '#1a1a1a',color: 'white', paddingTop: '10px', fontSize: '50px'}}>JWT</i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white pt-4">JWT</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-opencv-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">OpenCV</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-python-plain text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">pyTesseract</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon colored text-white pt-4" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '50px'}}>Kadmos</i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Kadmos</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div className="container-fluid pt-5 text-center" style={{backgroundColor: '#1a1a1a', height: '350px'}}>
        <h1 style={{color: 'rgb(180, 157, 91)', fontFamily: '"Montserrat"', fontSize: '30px'}}>DATABASES</h1><br />
        <Swiper modules={[Autoplay]} loop={true} speed={5000} slidesPerView={1} spaceBetween={30} autoplay={{delay:0}}>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-microsoftsqlserver-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">MSSQL</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-oracle-original colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Oracle</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-postgresql-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">PostgreSQL</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-mongodb-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">MongoDB</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-dynamodb-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">DynamoDB</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div className="container-fluid pt-5 text-center" style={{backgroundColor: '#1a1a1a', height: '350px'}}>
        <h1 style={{color: 'rgb(180, 157, 91)', fontFamily: '"Montserrat"', fontSize: '30px'}}>Cloud & DevOps</h1><br />
        <Swiper modules={[Autoplay]} loop={true} speed={5000} slidesPerView={1} spaceBetween={30} autoplay={{delay: 0}}>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-azure-plain text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white text">Azure App Services</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-azure-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Azure Blob Storage</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-docker-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white text">Docker</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-kubernetes-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Kubernetes</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-vault-original colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white text">HashiCorp Vault</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '50px'}}>OAuth</i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white text pt-4">OAuth</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-githubactions-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white text">GitHub Actions</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div className="container-fluid pt-5 text-center" style={{backgroundColor: '#1a1a1a', height: '350px'}}>
        <h1 style={{color: 'rgb(180, 157, 91)', fontFamily: '"Montserrat"', fontSize: '30px'}}>Version Control & CI/CD</h1><br />
        <Swiper modules={[Autoplay]} loop={true} speed={5000} slidesPerView={1} spaceBetween={30} autoplay={{delay: 0}}>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-git-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Git</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-github-original text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">GitHub</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-jenkins-line colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Jenkins</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-maven-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Maven</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-githubactions-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white text">GitHub Actions</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon-jira-plain colored" style={{backgroundColor: '#1a1a1a', paddingTop: '10px', fontSize: '100px'}}></i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            <p className="card-text text-white">Jira</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div className="container-fluid pt-5 text-center" style={{backgroundColor: '#1a1a1a', height: '450px'}}>
        <h1 style={{color: 'rgb(180, 157, 91)', fontFamily: '"Montserrat"', fontSize: '30px'}}>Relevant Skills</h1><br />
        <Swiper modules={[Autoplay]} loop={true} speed={5000} slidesPerView={1} spaceBetween={30} autoplay={{delay: 0}}>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '15px', fontSize: '20px'}}>Microsoft Office</i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            {/* <p className="card-text text-white pt-5 ms-office">Microsoft Office</p> */}
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '15px', fontSize: '20px'}}>Excel</i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            {/* <p className="card-text text-white pt-5">Excel</p> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '15px', fontSize: '20px'}}>Quality Assurance</i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            {/* <p className="card-text text-white pt-5">Quality Assurance</p> */}
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '15px', fontSize: '20px'}}>Systems Analysis</i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            {/* <p className="card-text text-white pt-5">Systems Analysis</p> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="container-fluid gap-5" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '15px', fontSize: '20px'}}>Trizetto</i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            {/* <p className="card-text text-white pt-5 trizetto">Trizetto</p> */}
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem', border: 'none'}}>
                        <i className="devicon text-white" style={{backgroundColor: '#1a1a1a', paddingTop: '15px', fontSize: '20px'}}>Healthcare Industry</i>
                        <div className="card-body" style={{backgroundColor: '#1a1a1a'}}>
                            {/* <p className="card-text text-white pt-5">Healthcare Industry</p> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <style>
        {`
        @media(max-width: 768px){
        .page-title{
        line-height: 1.2 !important;
        font-size : 30px !important;
        }
        .ms-office{
        padding-top : 3px !important;
        }
        }
        `}
    </style>
    </>
  )
}
export default TechStack