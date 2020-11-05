//import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBtn from './NavbarBtn';
import Search from './Search';
// import test from './test.json';

// function f1(){
//   console.log(`this is func1`);
//   const loc=window.location.pathname;
//   console.log(test);
//   //path: src/data/db/*.json
// }
// function showVersion(){
//   let x=document.getElementsByClassName("version");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      type:"DB",
      str:"Reservation Words",
    }
  }
  changeType=(type)=>{
    this.setState({
      type:type,
    })
  }
  render(){
    const {type,str}=this.state;
    return(
    
    <div>
      
      <header class="topnav">
        <NavBtn type={()=>(this.changeType("DB"))}>DB</NavBtn>
        <NavBtn type={()=>(this.changeType("Lang"))}>Lang</NavBtn>
        <NavBtn type={()=>(this.changeType("Service"))}>Service</NavBtn>

      </header>
      <body>
        <div class="logo"><h1>{type} {str}</h1></div>
        <Search/>
        <div class="selector">
          <input type="checkbox" value="1" id="oracle"></input>
          <label for="oracle">Oracle</label>
          <input type="checkbox" value="2" id="mysql"></input>
          <label for="oracle">MySQL</label>
          <input type="checkbox" value="3" id="mariaDB"></input>
          <label for="oracle">MariaDB</label>

        </div>
        {/* <button onclick="this.showVersion()">Try it</button>
        <div class="version"></div> */}
        <result></result>
        <recommand></recommand>
      </body> 
      <footer>footer</footer>
    </div>
    )
  }
}


export default App;
