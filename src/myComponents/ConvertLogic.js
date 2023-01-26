import React, { useState } from 'react'
import '../App.css';



  function ConvertLogic() {
        const [amount, setAmount] = useState('');
        const [fromCurr, setFromCurr] = useState("");
        const [toCurr, setToCurr] = useState("");
        const [ans, setAns] = useState('');

        
      const valueArr=[
        {name:"US Dollar",rate: 81.24},
        {name:"Euro",rate:87.95},
        {name:"British Pound",rate :100.60},
        {name:"Swiss Franc",rate:88.73},
        {name:"Japanese Yen",rate:0.63},
        {name:"Indian Rupee",rate:1}
    ]

    let valueArr1={
      "US Dollar": 81.24,
      "Euro":87.95,
      "British Pound" :100.60,
      "Swiss Franc":88.73,
      "Japanese Yen":0.63,
      "Indian Rupee":1,
    }


    const submit=(e)=>{
      e.preventDefault();
      console.log(amount);
      console.log(toCurr);
      console.log(fromCurr)

      let fromval = valueArr1[fromCurr];
      let toval = valueArr1[toCurr];
      setAns(Number([amount*fromval]/toval).toFixed(2));
    }

  return (
    <div>
      
      <form onSubmit={submit}>
        <h1>Currency Converter</h1>
        <div id='amt'>
        <input value={amount} onChange={(e)=>setAmount(e.target.value)}  type="text" name="amount" placeholder='Enter amount' />
        </div>
        <div className='select'>
        <label className='curr'>From:</label>
        <select value={fromCurr} onChange={(e)=>setFromCurr(e.target.value)}>
        {valueArr.map(item=> {
            return(<option key={item.name} value={item.name}>{item.name}</option>)
          })}
        </select>
        </div>
        <div className='select'>
        <label className='curr'>To:</label>
        <select  value={toCurr} onChange={(e)=>setToCurr(e.target.value)} >
        {valueArr.map(item=> {
            return(<option key={item.rate} value={item.name}>{item.name}</option>)
          })}
            
        </select>
        </div>
        <br/>
        <br/>
        <button type='submit'>Convert</button>
        <br/>
        <input value={ans}/>
        </form>
    </div>
  )

 
}
export default ConvertLogic;
