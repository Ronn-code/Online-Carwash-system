import {useState} from 'react'
import proj1 from './images/project1.jpg';
import proj2 from './images/project2.jpg';
import proj3 from './images/project3.jpg';
import proj4 from './images/project4.jpg';
import proj5 from './images/project5.jpg';
import { FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

function Home() {
    const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="home-page">
        <div className="home-page-hero">
            <div className={`header-section ${showNavbar ? 'open' : ''}`}>
                <div className="name-logo">
                    <h2>Street Car Wash</h2>
                </div>
                <div className="menu-icon">
                    <span className='material-icons-sharp'
                    onClick={() => setShowNavbar(!showNavbar)}>menu</span>
                </div>
                <div className={`nav-bar ${showNavbar ? 'open' : ''}`}>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Services</a>
                    <a href='#'>Gallery</a>
                    <a href='#'>Contact</a>
                </div>
                <div className="login">
                   <span className='material-icons-sharp'>person</span> 
                   <span className='material-icons-sharp'>notifications</span> 
                </div>
            </div>
            <div className="hero-section">
                <h2>Shine On The Go-Premium Car Wash Convenience </h2>
                <p>Book a wash in seconds and experience a spotless, showroom-quality<br/>
                finish that lasts for days.With our trusted professionals and top-tier products<br/>
                We deliver unmatched convenience,reliability and shine-every single time <br/></p>
                <div className="hero-btns">
                    <button id='explore-btn'>Find More</button>
                    <button id='contact-btn'>Contact us</button>
                </div>
            </div>
        </div>
        <div className="about-section"style={{marginTop:'2rem'}}>
            <h2 style={{fontSize:'1.4rem',fontWeight:'400',paddingTop:'1rem',textAlign:'center',color:'rgb(150,4,4)'}}>Our Packages</h2>
            <div className="packages" style={{display:'flex',alignItems:'center',gap:'4rem',marginTop:'3rem',marginLeft:'10%'}}>
                <div className="waterbased" style={{marginBottom:'1.2rem'}}>
                    <h4 style={{fontSize:'1.2rem',fontWeight:'500',paddingBottom:'1rem',paddingLeft:'2rem'}}>Water-bassed Car Wash</h4>
                    <h5 style={{fontSize:'1.2rem',fontWeight:'400',color:'rgb(150,4,4)',paddingBottom:'0.7rem',paddingLeft:'2rem'}}>$ 24.90</h5>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Thorough exterior and underbody cleaning</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Uses high-pressure water and premium soap</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Removes dirt,mud, and tough grime</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Safe for all vehicle paint types</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Eco-friendly water recycling system</h6>
                    <button id='book-btn' style={{height:'2rem',width:'80%',background:'rgb(150,4,4)',
                        color:'#ececec',border:'none',marginTop:'1rem',borderRadius:'12px'}}>Book Now</button>
                </div>
                <div className="waterbased" style={{marginBottom:'1.2rem'}}>
                    <h4 style={{fontSize:'1.2rem',fontWeight:'500',paddingBottom:'1rem',paddingLeft:'2rem'}}>Waterless Car Wash</h4>
                    <h5 style={{fontSize:'1.2rem',fontWeight:'400',color:'rgb(150,4,4)',paddingBottom:'0.7rem',paddingLeft:'2rem'}}>$ 37.50</h5>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Thorough exterior and underbody cleaning</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Uses high-pressure water and premium soap</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Removes dirt,mud, and tough grime</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Safe for all vehicle paint types</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Eco-friendly water recycling system</h6>
                    <button id='book-btn' style={{height:'2rem',width:'80%',background:'rgb(150,4,4)',
                        color:'#ececec',border:'none',marginTop:'1rem',borderRadius:'12px'}}>Book Now</button>
                </div>
                <div className="waterbased"style={{marginBottom:'1.2rem'}}>
                    <h4 style={{fontSize:'1.2rem',fontWeight:'500',paddingBottom:'1rem',paddingLeft:'2rem'}}>Steam Car Wash</h4>
                    <h5 style={{fontSize:'1.2rem',fontWeight:'400',color:'rgb(150,4,4)',paddingBottom:'0.7rem',paddingLeft:'2rem'}}>$ 58.80</h5>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Thorough exterior and underbody cleaning</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Uses high-pressure water and premium soap</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Removes dirt,mud, and tough grime</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Safe for all vehicle paint types</h6>
                    <h6 style={{fontSize:'1rem',fontWeight:'400',paddingBottom:'0.5rem'}}><span className='material-icons-sharp'style={{color:'gray'}}>done</span> Eco-friendly water recycling system</h6>
                    <button id='book-btn' style={{height:'2rem',width:'80%',background:'rgb(150,4,4)',
                        color:'#ececec',border:'none',marginTop:'1rem',borderRadius:'12px'}}>Book Now</button>
                </div>
            </div>
        </div>
        <div className="process-section"style={{marginTop:'8rem',background:'rgba(216, 216, 216, 1)',marginBottom:'3rem',}}>
            <h2 style={{fontSize:'1.4rem',fontWeight:'400',paddingTop:'1rem',textAlign:'center',color:'black'}}>Our Process</h2>
            <div className="process"style={{display:'flex',alignItems:'center',gap:'2rem',marginTop:'2rem',marginLeft:'2.2rem'}}>
                <div className="process-one"style={{marginBottom:'3rem',background:'white',padding:'1rem',borderRadius:'16px',width:'15rem'}}>
                    <button className="number"style={{borderRadius:'20px',height:'40px',width:'40px',background:'none',color:'black',
                        border:'2px solid rgb(150,4,4)',marginLeft:'5rem',marginBottom:'1rem'}}>1</button>
                    <h5 style={{fontSize:'1.1rem',fontWeight:'400',textAlign:'center',paddingBottom:'0.6rem'}}>Book Your Wash</h5>
                    <h6 style={{fontSize:'0.55rem',fontWeight:'300',textAlign:'center'}}>Choose your preferred package,location,time in seconds online</h6>
                </div>
                <div className="process-two"style={{marginBottom:'3rem',background:'white',padding:'1rem',borderRadius:'16px',width:'15rem'}}>
                    <button className="number"style={{borderRadius:'20px',height:'40px',width:'40px',background:'none',color:'black',
                        border:'2px solid rgb(150,4,4)',marginLeft:'5rem',marginBottom:'1rem'}}>2</button>
                    <h5 style={{fontSize:'1.1rem',fontWeight:'400',textAlign:'center',paddingBottom:'0.6rem'}}>Car Inspection</h5>
                    <h6 style={{fontSize:'0.55rem',fontWeight:'300',textAlign:'center'}}>Our team checks car's condition to tailor the cleaning approach</h6>
                </div>
                <div className="process-three" style={{marginBottom:'3rem',background:'white',padding:'1rem',borderRadius:'16px',width:'15rem'}}>
                    <button className="number"style={{borderRadius:'20px',height:'40px',width:'40px',background:'none',color:'black',
                        border:'2px solid rgb(150,4,4)',marginLeft:'5rem',marginBottom:'1rem'}}>3</button>
                    <h5 style={{fontSize:'1.1rem',fontWeight:'400',textAlign:'center',paddingBottom:'0.6rem'}}>Services & Payment</h5>
                    <h6 style={{fontSize:'0.55rem',fontWeight:'300',textAlign:'center'}}>Car gets the selected wash,Transparent pricing, Pay on-site or online</h6>
                </div>
                <div className="process-four" style={{marginBottom:'3rem',background:'white',padding:'1rem',borderRadius:'16px',width:'15rem'}}>
                    <button className="number"style={{borderRadius:'20px',height:'40px',width:'40px',background:'none',color:'black',
                        border:'2px solid rgb(150,4,4)',marginLeft:'5rem',marginBottom:'1rem'}}>4</button>
                    <h5 style={{fontSize:'1.1rem',fontWeight:'400',textAlign:'center',paddingBottom:'0.6rem'}}>Completion & Shine</h5>
                    <h6 style={{fontSize:'0.55rem',fontWeight:'300',textAlign:'center'}}>Final quality check done, Drive away with gleaming car</h6>
                </div>
            </div>
        </div>
        <div>
            <h2 style={{fontSize:'1.4rem',fontWeight:'400',paddingTop:'1rem',textAlign:'center',color:'black'}}>Our Process</h2>    
        </div>
        <div className="gallery-images"> 
            <div className="image">
                <img src={proj2} alt="Project 2" />
            </div>
            <div className="image">
                <img src={proj1} alt="Project 1" />
            </div>
            <div className="image">
                <img src={proj4} alt="Project 4" />
            </div>
            <div className="image">
                <img src={proj5} alt="Project 5" />
            </div>
            <div className="image">
                <img src={proj3} alt="Project 3" />
            </div>
        </div>
        <div className="footer-section"style={{marginTop:'8rem',background:'rgba(216, 216, 216, 1)',marginBottom:'0'}}>
            <div className="sections"style={{display:'flex',gap:'4rem',justifyContent:'center',padding:'2rem 1rem',flexWrap:'wrap'}}>
                <div className="links"style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
                    <h3 style={{fontSize:'1rem',fontWeight:'400',textDecoration:'underline',paddingTop:'2rem'}}>Quick Links</h3>
                    <a href='#'style={{textDecoration:'none',color:'rgb(82,49,49)',fontSize:'0.8rem'}}>Home</a>
                    <a href='#'style={{textDecoration:'none',color:'black',fontSize:'0.8rem'}}>About</a>
                    <a href='#'style={{textDecoration:'none',color:'black',fontSize:'0.8rem'}}>Gallery</a>
                    <a href='#'style={{textDecoration:'none',color:'black',fontSize:'0.8rem'}}>Contact</a>
                </div>
                <div className="contact">
                    <h3 style={{fontSize:'1rem',fontWeight:'400',textDecoration:'underline',paddingTop:'2rem',paddingBottom:'1rem'}}>Contact Us</h3>
                    <div className="call"style={{display:'flex',gap:'1rem',marginBottom:'1rem'}}>
                        <span className='material-icons-sharp'style={{color:'rgba(99, 45, 45, 1)'}}>call</span>
                        <h5 style={{fontWeight:'400'}}>+254718671212</h5>
                    </div>
                    <div className="whatsapp"style={{display:'flex',gap:'1rem',marginBottom:'1rem'}}>
                        <span className='material-icons-sharp'style={{color:'rgba(99, 45, 45, 1)'}}>chat</span>
                        <h5 style={{fontWeight:'400'}}>+254718671212</h5>
                    </div>
                    <div className="email"style={{display:'flex',gap:'1rem',marginBottom:'1rem'}}>
                        <span className='material-icons-sharp'style={{color:'rgba(99, 45, 45, 1)'}}>markunread</span>
                        <h5 style={{fontWeight:'400'}}>info@streetcarwash.co.ke</h5>
                    </div>
                </div>
                <div className="follow-us">
                    <h3 style={{fontSize:'1rem',fontWeight:'400',textDecoration:'underline',paddingTop:'2rem',paddingBottom:'1.2rem'}}>Follow Us</h3>
                    <div className="socials" style={{display:'flex',gap:'2rem'}}>
                        <a href="https://twitter.com/streetcarwash" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} color="#1DA1F2" /></a>
                        <a href="https://linkedin.com/in/StreetCarwash" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} color="#0077B5" /></a>
                        <a href="https://instagram.com/street_carwash" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} color="#C13584" /></a>
                        <a href="https://www.tiktok.com/@streetcarwash" target="_blank" rel="noopener noreferrer">
                        <FaTiktok size={24} color="#000" /></a>
                    </div>
                </div>
            </div>
            <footer style={{textAlign: 'center',padding: '1rem',marginTop: '4rem',fontSize: '0.9rem',color: '#00000'}}>
               © 2025 StreetCarWash. Designed by NomiCodes Tech.</footer>
        </div>
    </div>
  )
}

export default Home
