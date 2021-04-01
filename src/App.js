import React,{ useState } from 'react';
import data from './data';

function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);

  const handleSubmit=(e)=>{
e.preventDefault(); //prevent unnesecery page refresh
let amount = parseInt(count)
if(amount <=0) {
  amount= 1;
}
if(amount >8) {
  amount = 8;
}
setText(data.slice(0,amount));


  }
  return (
    <section className="section-center">
      <h3>Lorem Ipsum Generator</h3>
      <form className= "lorem-form" onSubmit= {handleSubmit}>
        <lebel htmlFor='amount'>
          Paragraphs:
        </lebel>
        <input type="number" name = 'amount' id="amount" value={count} onChange={(e)=> setCount(e.target.value)}/>
        <button type="submit" className="btn">generate</button>
      </form>
      <article className='lorem-text' >
        {
          text.map((item,index)=>{
return <p key={index}>{item}</p>
          })
          
          }
      </article>
    </section>
  );
}

export default App;
