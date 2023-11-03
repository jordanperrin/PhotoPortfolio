import React from 'react';
import './film.css';
import img1 from '../../images/post1-7.jpg';
import img2 from '../../images/post1-4.jpg';
import img3 from '../../images/post1-2.jpg';
import img4 from '../../images/post2-8.jpg';
import img5 from '../../images/post2-10.jpg';

let prevVal;

const getRandomNumber = ()=>{
  let newVal =  Math.floor(Math.random() * 16) + 1;
  while(newVal === prevVal ){
    newVal =  Math.floor(Math.random() * 16) + 1;
  }
  return newVal;
}

const generatePerfs = () =>{
  const listOfPerfs = [];
  for (let i = 0; i < 26; i++) {
    let string = "square" + getRandomNumber();
    listOfPerfs.push(
      <div id={string} className='sqaure'>
        <span className="invisible"> Placeholder</span>
      </div>
    );
  }
   return listOfPerfs;
}  

const Film = () => {
  return (
    <div className="film-container"> 
      <div className="mainFilm">
        <div className="perfs">
          <div id="leftPerf">
            {generatePerfs()}
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
        <div className="perfs">
          <div id="rightPerf">
            {generatePerfs()}
          </div>
        </div>
      </div>
        <div className="film-burn">
        </div>
      <svg >
        <filter id="wavy">
          <feTurbulence x="0" y="0" baseFrequency="0.109" numOctaves="5" seed="2">
            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="40" />
        </filter>
      </svg> 
      <div className='white-fill'></div>
    </div>
  );
};

export default Film;