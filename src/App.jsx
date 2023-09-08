import React from "react";
import axios from 'axios';
import "./App.css";
import { Card } from "./components/Card";

function App() {
  const [data,setData]=React.useState([])
  console.log(data)

  React.useEffect(()=>{
    axios({
      method:'get',
      url:'https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8'
    })
    .then(res=>setData(res.data.pairs))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <div id="mainBody">
        <div id="sidePanel"></div>
        <div id="mainPanel">
          <div id="navbar">
            <input type="search" name="" id="" />
            <button>Connect</button>
          </div>
          <h2>Token Search Results</h2>
          <div id="cardsContainer">
            {data?.map((each,i)=><Card key={i} details={each}/>)}
            {/* <Card/> */}
          </div>
        </div>
      </div>
      <div id="Footer"></div>
      <img src="https://images.deccanherald.com/deccanherald%2F2023-08%2F1eb13648-1e78-4cf6-bf57-89a89023a08f%2F752.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&w=900&dpr=1.3" alt="background" />
    </div>
  );
}

export default App;
