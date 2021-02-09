import React, { useState, useEffect } from 'react';
import data from './data';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(isNaN(count) || count <= 0 || count > 8){
    amount = 1;
  }
      setText(data.slice(0, amount));
  }

    return (
      <div className="section-center">
        <h3> tired of boring old lorem ipsum?</h3>
        <h4>Maxium value: 8, Minimum value: 0</h4>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">
            paragraphs:
          </label>
          <input type="number" name="amount" id="amount" value={count}
          onChange={(e)=>setCount(e.target.value)}
          />
          <button type="submit" className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {text.map((item, index)=>{
            return <p key={index}>{item}</p>
          })}
        </article>
      </div>
    )
  
}

export default App;


// const [value, setValue] = useState(0);
//   const [text, setText] = useState(data);

//   const random = Math.floor(Math.random() * text.length);


//   const handleChange = (e) => {
//     setValue(e.target.value);
//   }

//   const handleClick = (e) => {  
//     e.preventDefault();
//     {console.log(text)}
//   if(isNaN(value) || value <= 0 || value > 9){
//     setText(text[random]);
//      {console.log(text)}
//   }else{
//     let tempText = text.slice(0, value);
//     tempText = tempText.map((item)=> {
//       return <p className="result">{item}</p>
//     }).join('');
//     {console.log(tempText)}
//     setText(tempText);
//   }

//   }

//   return (
//     <>
//     <section className="section-center">
//       <h3>tired of boring lorem ipsum?</h3>
//       <form className="lorem-form">
//         <label for="amount">paragraphs: </label>
//         <input type="number" name="amount"
//         placeholder="1"
//         onChange={handleChange}
//         />
//         <button type="submit" className="btn" onClick={handleClick}>generate</button>
//       </form>
//   <article className="lorem-text">{text}</article>
//     </section>
//   </>
//     )