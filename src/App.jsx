import React from "react";
import axios from "axios";
import "./App.css";
import { RiNftFill } from "react-icons/ri";
import { MdOutlineToken } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "./components/Card";

function App() {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [type, setType]=React.useState("Token")
  console.log(search);

  function fetchData() {
    axios({
      method: "get",
      url: `https://api.dexscreener.com/latest/dex/tokens/${search}`,
    })
      .then((res) => setData(res.data.pairs))
      .catch((err) => console.log(err));
  }

  const handleClick = (el) => {
    let token = document.getElementById("token");
    let pair = document.getElementById("pair");
    if (el.target.innerText == "Token Address") {
      token.style.backgroundColor = "#F30050";
      pair.style.backgroundColor = "transparent";
      setType('Token')
    } else {
      token.style.backgroundColor = "transparent";
      pair.style.backgroundColor = "#F30050";
      setType('Pair')
    }
  };

  const handleInput = (el) => {
    setSearch(el.target.value);
  };

  const handleSearch = (el) => {
    fetchData();
  };

  //Fetching data through Enter keypress
  const handleEnter = (el) => {
    if (el.key == "Enter") fetchData();
  };

  React.useEffect(() => {}, []);
  return (
    <div>
      <div id="mainBody">
        <div id="sidePanel">
          <div className="logo">
            <RiNftFill />
            <p>NFTify</p>
          </div>
          <div>
            <div className="logo" onClick={handleClick} id="token">
              <MdOutlineToken />
              <h2>Token Address</h2>
            </div>
            <div className="logo" onClick={handleClick} id="pair">
              <MdOutlineToken />
              <h2>Pair Address</h2>
            </div>
          </div>
        </div>
        <div id="mainPanel">
          <div id="navbar">
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                onChange={handleInput}
                onKeyDown={handleEnter}
              />
              <button id="search" onClick={handleSearch}>
                <AiOutlineSearch />
              </button>
            </div>
            <button>Connect</button>
          </div>
          <h3>{type} Search Results</h3>
          <div id="cardsContainer">
            {data?.map((each, i) => (
              <Card key={i} details={each} />
            ))}
          </div>
        </div>
      </div>
      <div id="footer"></div>
      <img
        src="https://images.deccanherald.com/deccanherald%2F2023-08%2F1eb13648-1e78-4cf6-bf57-89a89023a08f%2F752.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&w=900&dpr=1.3"
        alt="background"
      />
    </div>
  );
}

export default App;
