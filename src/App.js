import {useGSAP} from '@gsap/react'
import './App.css';
import gsap from 'gsap'
import Animate from './Animate';
import Website from './Website';



function App() {

  // useGSAP(()=>{
  //   gsap.to('.header .heading',{
  //     x:100,
  //     opacity:0,
  //     duration:4
  //   })
  // })
  return (
    <div className="App">
      {/* <div className="header">
      <div className="heading">
      <h2>Brand</h2>
      </div>
       <div className="links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
       </div>
      </div> */}
      {/* <Animate/> */}
      <Website/>
    </div>
  );
}

export default App;
