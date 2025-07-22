import React from 'react'


function Contact() {
  return (
    <div className="contact-page">
        <div className="top-part"style={{marginTop:'2rem',marginLeft:'2rem',display:'flex',gap:'3rem'}}>
            <div className="contact-info"style={{background:'rgba(168, 133, 133, 1)',borderRadius:'20px',width:'25%',padding:'1rem'}}>
                <h2 style={{fontWeight:'400'}}>Contact Info</h2>
                <p style={{fontWeight:'300'}}>Reach out to us for any enquiry</p>
                <div className="location"style={{display:'flex',alignItems:'center',gap:'1rem',marginTop:'1rem'}}>
                    <div className="icon"style={{textAlign:'center',borderRadius:'1.2rem',width:'2.4rem',height:'2.4rem',background:'#cecece'}}>
                        <span className='material-icons-sharp'style={{paddingTop:'0.4rem',color:'rgb(150,4,4)'}}>call</span>
                    </div>
                    <div className="details">
                        <h4 style={{fontWeight:'400'}} >Location</h4>
                        <h6>Nairobi,KE</h6>
                    </div>
                </div>
                <div className="phoneno"style={{display:'flex',alignItems:'center',gap:'1rem',marginTop:'1rem'}}>
                    <div className="icon"style={{textAlign:'center',borderRadius:'1.2rem',width:'2.4rem',height:'2.4rem',background:'#cecece'}}>
                        <span className='material-icons-sharp'style={{paddingTop:'0.4rem',color:'rgb(150,4,4)'}}>chat</span>
                    </div>
                    <div className="details">
                        <h4 style={{fontWeight:'400'}}>Phone Number</h4>
                        <h6>+254 712345678</h6>
                    </div>
                </div>
                <div className="email"style={{display:'flex',alignItems:'center',gap:'1rem',marginTop:'1rem'}}>
                    <div className="icon"style={{textAlign:'center',borderRadius:'1.2rem',width:'2.4rem',height:'2.4rem',background:'#cecece'}}>
                        <span className='material-icons-sharp'style={{paddingTop:'0.4rem',color:'rgb(150,4,4)'}}>markunread</span>
                    </div>
                    <div className="details">
                        <h4 style={{fontWeight:'400'}}>Email</h4>
                        <h6>info@website.co.ke</h6>
                    </div>
                </div>
            </div>
            <div className="get-intouch">
                <h2 style={{fontWeight:'400'}}>Get In Touch</h2>
                <p style={{fontWeight:'300'}}>Fill in the forn and get instant response</p>
                <div className="info"style={{display:'flex',gap:'2rem',marginTop:'1rem'}}>
                    <input type='text' placeholder='Your Name'style={{height:'2rem',padding:'0.2rem'}}></input>
                    <input type='text' placeholder='Your Email'style={{height:'2rem',padding:'0.2rem'}}></input>
                </div>
                <input type='text' placeholder='Subject'style={{height:'2rem',padding:'0.2rem',marginTop:'1rem',width:'24rem'}}></input>
                <div className="textarea">
                    <textarea typeof='text'placeholder='Message'style={{height:'6rem',padding:'0.2rem',marginTop:'1rem',width:'24rem'}}></textarea>
                </div>
                <button style={{height:'2.2rem',marginTop:'1rem',background:'rgba(168, 133, 133, 1)',border:'none',color:'#ecececff',width:'12rem',borderRadius:'5px'}}>Send message</button>
            </div>
        </div>
    </div>
  );
}

export default Contact
