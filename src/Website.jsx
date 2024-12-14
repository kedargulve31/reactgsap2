import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Website() {
  const services = [
    {
      imageUrl: "https://img.freepik.com/premium-photo/photo-is-must-everyday-work-ai-generated-best-wonderful-photo_1070043-302953.jpg?ga=GA1.1.1864870190.1719833433&semt=ais_hybrid",
      heading: "Corporate Events",
      info: "Tailored solutions for conferences, product launches, team-building events, and seminars. We handle everything from venue selection to tech support, ensuring your corporate events run smoothly."
    },
    {
      imageUrl: "https://t3.ftcdn.net/jpg/08/03/54/10/240_F_803541056_s3NxnuKcBo5sgvaYPLG7vrNLlLwwidqk.jpg",
      heading: "Weddings & Celebrations",
      info: "Your special day deserves the finest attention to detail. We provide end-to-end wedding planning, from venue décor to guest management, ensuring your day is nothing short of perfect."
    },
    {
      imageUrl: "https://img.freepik.com/premium-photo/beautiful-wedding-stage-decoration_1004028-3747.jpg?ga=GA1.1.1864870190.1719833433&semt=ais_hybrid",
      heading: "Private Parties & Social Gatherings",
      info: "From intimate birthday parties to grand anniversary celebrations, we bring your ideas to life with a personal touch and creative flair."
    },
    {
      imageUrl: "https://t3.ftcdn.net/jpg/07/75/23/60/240_F_775236074_JznBBuI3p0fy7GRQY6KyCvr0RmAOU8s0.jpg",
      heading: "Event Consultation",
      info: "Not sure where to start? Our consultation services provide expert guidance, from conceptualization to execution, ensuring your event is a success."
    }
  ];

  const t1 = useRef();

  useEffect(() => {
    // Animation for header
    gsap.from('.header h2', {
      opacity: 1,
      x: -50,
      duration: 1,
      ease: 'power1.out',
    });

    // Animation for homepage section
    gsap.from('.homepage h2', {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: 'power1.out',
      delay: 0.5,
    });

    gsap.from('.homepage p, .homepage button', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power1.out',
      delay: 0.8,
      stagger: 0.2,
    });

    // ScrollTrigger animations
    gsap.to('.page2 h2', {
      x: '-130%',
      scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        start: 'top 640',
        end: 'top 840',
        scrub: 2,
        pin: true,
        duration: 6,
      },
    });

    t1.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        end: 'bottom center',
        scrub: 2,
        stagger:2
      },
    });

   gsap.to('.contact .bannner',{
      x:-100,
      opacity:0,
      scrollTrigger:{
            start:'top 400',
            trigger:'.contact .bannner',
            scroller:'body'
      }
   })
  }, []);

  const[info,setInfo]=useState({
      fullname:'',email:'',mobile:'',address:'',course:''
     })

  const handleChange = (e) =>{
      setInfo({
            ...info,
            [e.target.name]: e.target.value
      })
     }

     const handleSubmit = (e) =>{
      e.preventDefault()
      if(formValidation()){
           
            console.log(info)
            setInfo({
             fullname:'',email:'',mobile:'',address:'',course:''
            })
            }
          
      }

      const formValidation = () => {
            const { fullname, email, mobile, address, course } = info;
          
            // Basic validation checks
            if (!fullname || !email || !mobile || !address || !course) {
              alert("All fields are required.");
              return false;
            }
          
            // Check for valid email format (basic)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
              alert("Please enter a valid email address.");
              return false;
            }
          
            // Check for valid mobile number (basic, assuming 10 digits for example)
            if (mobile.length !== 10) {
              alert("Please enter a valid 10-digit mobile number.");
              return false;
            }
          
            // If all validations pass, return true
            return true;
          };
  return (
    <>
      <div className="header">
        <h2>GM Events</h2>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact us</a>
        </div>
      </div>

      <div className="homepage">
        <h2>Turning Moments into Memories</h2>
        <p>We make your events unforgettable with seamless planning and execution...</p>
        <button>Contact Now...!!!</button>
      </div>

      <div className="page2">
        <h2>GMEVENTMANAGEMENT</h2>
      </div>

      <div className="cards">
        <h2 className="section-heading">Our Services</h2>
        <div className="card-container">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <img src={service.imageUrl} alt={service.heading} />
              <h3>{service.heading}</h3>
              <p>{service.info}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about">
        <h2 className="section-heading">About Us</h2>
        <div className="banner"></div>
        <div className="content">
          <p>
            We are passionate about turning your special moments into unforgettable experiences...
          </p>
        </div>
      </div>

      <div className="contact">
        <h2 className="section-heading">Contact Us</h2>
        <div className="banner"></div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="fullname">Fullname</label>
              <input type="text" name="fullname" onChange={handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="mobile">Mobile No</label>
              <input type="number" name="mobile" onChange={handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" onChange={handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="address">Permanent Address</label>
              <input type="text" name="address" onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Website;
