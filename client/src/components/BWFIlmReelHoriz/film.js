import React from 'react';
import {useRef, useEffect, useState } from 'react';
import { LuInstagram as IgIcon} from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import {Link} from 'react-router-dom';
import './film.css';
//TODO: need to change the way we import these images -> use an 
import img1 from '../../images/post1-7.jpg';
import img2 from '../../images/post1-4.jpg';
import img3 from '../../images/post1-2.jpg';
import img4 from '../../images/post2-8.jpg';
import img5 from '../../images/post2-10.jpg';
import clr from '../../images/color1.jpeg'

let prevVal;
const getRandomNumber = ()=>{
  let newVal =  Math.floor(Math.random() * 16) + 1;
  while(newVal === prevVal ){
    newVal =  Math.floor(Math.random() * 16) + 1;
  }
  return newVal;
}

const Film = () => {
  const burnRef = useRef();
  const [leftPerfs, setleftPerfs] = useState([]);
  const [rightPerfs, setRightPerfs] = useState([]);
  const [burnDivVisible, setburnDivVisible] = useState(false);
  const [btmIconsVisible, setbtmIconsVisible] = useState();

  useEffect(()=>{
    if(leftPerfs.length ===0){
      const listOfPerfs=[];
      for (let i = 0; i < 26; i++) {
        let string = "square" + getRandomNumber();
        listOfPerfs.push(
          <div id={string} className='sqaure'>
            <span className="invisible"> Placeholder</span>
          </div>
        );
      }
      setleftPerfs(listOfPerfs);
    }

    if(rightPerfs.length ===0){
      const listOfPerfs=[];
      for (let i = 0; i < 26; i++) {
        let string = "square" + getRandomNumber();
        listOfPerfs.push(
          <div id={string} className='sqaure'>
            <span className="invisible"> Placeholder</span>
          </div>
        );
      }
      setRightPerfs(listOfPerfs);
    }
    
  }, [leftPerfs, rightPerfs])

  //observe when user scrolls over film burn div 
  useEffect(() =>{
    //set a timeout of 9s for Observer to start observing so when film-container drops in we dont see film-burn div drop down
    const delayTimeout = setTimeout(() =>{
      const observer = new IntersectionObserver((entries)=>{ //callback function that is going to be fired every time visibility of that observed element
         const entry = entries[0];
         setburnDivVisible(entry.isIntersecting); //uses the useState() hook
         //  console.log("entry", entry);
       });
  
      observer.observe(burnRef.current)
      //clean-up 
      return () => {
       observer.disconnect();
      };

    },9000);

    return () => clearTimeout(delayTimeout);
  }, []);//empty array as a dependency will only run once when component is initialized

  //dleay the rendering of film-burn div
  useEffect(()=> {
    const delayTimeout = setTimeout(()=>{
      setburnDivVisible(true);
    },13000);

    return () => clearTimeout(delayTimeout); 
  }, []);
  
  return (
    <div className="film-container"> 
      <div className="mainFilm">
        <div className="leftPerfs">
          <div id="leftPerf">
            {leftPerfs.length > 0 && leftPerfs}
          </div>
        </div>
        <div className="imgContainer">
            <div className="inside-img" id="first-img">
              <img src={img1} />
              <div className="block"></div>
            </div>
            <div className="inside-img">
              <img src={img2} />
              <div className="block"></div>
            </div>
            <div className="inside-img">
              <img src={img3} />
              <div className="block"></div>
            </div>
            <div className="inside-img">
              <img src={img4} />
              <div className="block"></div>
            </div>
            <div className="inside-img">
              <img src={img1} />
              <div className="block" id='messed-up-block'></div>
            </div>
            <div className="inside-img">
              <img src={img1} />
              <div className="block"></div>
            </div>
          <div className="inside-img">
          </div>
        </div>
        <div className="leftPerfs">
          <div id="rightPerf">
            {rightPerfs.length > 0 && rightPerfs}
          </div>
        </div>
      </div>

      <div className = "burn-container">
        <div ref={burnRef} className={` ${burnDivVisible ? 'film-burn' : "off-screen"}`}></div>
        <div className={`${burnDivVisible ? 'ig-container show' : 'ig-container'}`}>
          <ul className='contact-list'>
            <li>
              <Link to='https://www.instagram.com/cinema.tif/'>
                <IgIcon className='ig-icon'/>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <LuMail className='ig-icon'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <svg >
        <filter id="wavy">
          <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="5" seed="2">
            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="25" />
        </filter>
      </svg> 
    </div>
  );
};

export default Film;