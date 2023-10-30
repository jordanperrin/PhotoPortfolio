import React from 'react';
import './App.css';
import img1 from './images/post1-7.jpg';

let prevVal;
function getRandomNumber(){
  let newVal =  Math.floor(Math.random() * 16) + 1;
  while(newVal === prevVal || newVal === prevVal+1 || newVal === prevVal-1 ){
    newVal =  Math.floor(Math.random() * 16) + 1;
  }
  return newVal;
}

const App = () => {
  const squareDivsLeft = [];
  for (let i = 0; i < 9; i++) {
    let string = "square" + getRandomNumber();
    squareDivsLeft.push(
      <div id={string} className='sqaure'>
        <span className="invisible"> Placeholder</span>
      </div>
    );
  }

  const squareDivsRight = [];
  for (let i = 0; i < 9; i++) {
    let string = "square" + getRandomNumber();
    squareDivsRight.push(
      <div id={string} className='sqaure'>
        <span className="invisible"> Placeholder</span>
      </div>
    );
  }

  return (
    <div className="mainFilm">
      <div className="perfs" id="leftPerf">{squareDivsLeft}</div>
      <div className="imgContainer">
        <img src={img1} />
        <div class="block"></div>
      </div>
      <div className="perfs">
        <div id="rightPerf">
          {squareDivsRight}
        </div>
      </div>
    </div>
  );
};

export default App;
