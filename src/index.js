// import React from 'react';
// import ReactDOM from 'react-dom';

// // <></>: this is nothing but react fargment of syntecal sugar form.
// const fName = "Vikash";
// const mName = "Kumar";
// const lName = "Basant";
// const district = "Samastipur";
// const state = "Bihar";
// // `${}` this is nothing templete literal 
// // console.log(`my name is ${fName}`);

// ReactDOM.render(
//   <>

//     <h1>My Name is {`${fName} ${mName} ${lName}`}  </h1>
//     <h1>{`My Name is ${fName} ${mName} ${lName}`}</h1>
//     <h1>I'm from {`${district} ${state}`} </h1>
//     <h1>{`I'm from ${district} ${state}`}</h1>
//     <h1>My Name is {fName + " " +mName+" "+lName}</h1>
//     <h1>My Name is {fName} {mName} {lName}</h1>
//     <p>My lucky number is 5</p>
//     <p>Add two number {2+3}</p>
//     <p>Random Number from 1 to 9: {Math.ceil(Math.random()*10)}</p>

    
//   </>,
//   document.getElementById('root')
// );


// {} inside of this bracket we can used only "Expression"
// But not used the statement. statement is nothing but if else for loop




// import React from 'react';
// import ReactDOM from 'react-dom';
// const img = "https://picsum.photos/500/800";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/600/300";
// const img3 = "https://picsum.photos/600/400";
// const img4 = "https://picsum.photos/200/300";
// const img5 = "https://picsum.photos/800/300";
// const name = "laptop";
// const linkedInLink = "https://www.linkedin.com/feed/"
// // jsx attribute: jsx attribute in camelCase
// ReactDOM.render(
//   <>
//     <h1 contentEditable = "true"> My name is {name}</h1>
//     <img src={img} alt="random loream ipsum"/>
//     <img src={img1} alt="random loream ipsum"/>
//     <img src={img2} alt="random loream ipsum"/>
//     <img src={img3} alt="random loream ipsum"/>

//     <img src={img4} alt="random loream ipsum"/>

//     <a href = {linkedInLink} target = "_blank">
//       <img src={img5} alt="random loream ipsum"/>
//     </a>
    

//   </>,
//   document.getElementById('root')
// );









import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const img = "https://picsum.photos/200/300";
const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/350/300";
const img4 = "https://picsum.photos/400/300";
const img5 = "https://picsum.photos/450/300";
const img6 = "https://picsum.photos/500/300";
const img7 = "https://picsum.photos/290/300";
const img8 = "https://picsum.photos/260/300";
const img9 = "https://picsum.photos/201/300";
const name = "laptop";
const linkedInLink = "https://www.linkedin.com/feed/"







// .heading {
//   color: blueviolet;
//   text-align: center;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow: 0px 2px 4px red;
//   margin: 50px;
//   font-family: 'Josefin Sans', sans-serif;
// }

// // this is nothing but javascript object
// const heading = {
//   key : "value",
//   key : "value"
// };


// here we can create an object of inline css:
const heading = {
  color: 'blueviolet',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px red',
  margin: '50px',
  fontFamily:'"Josefin Sans", sansSerif'
};


// In react instated of 'class' we can used 'className"
ReactDOM.render(
  <>
    <h1 style={heading}> My name is {name}</h1>
    
    
    <div className = "img_div">
      <img src={img} alt="random loream ipsum"/>
      <img src={img1} alt="random loream ipsum"/>
      <img src={img2} alt="random loream ipsum"/>
      <img src={img3} alt="random loream ipsum"/>

      <img src={img4} alt="random loream ipsum"/>

      <a href = {linkedInLink} rel="noreferrer" target = "_blank">
        <img src={img5} alt="random loream ipsum"/>
      </a>

      <img src={img6} alt="random loream ipsum"/>
      <img src={img7} alt="random loream ipsum"/>
      <img src={img8} alt="random loream ipsum"/>
      <img src={img9} alt="random loream ipsum"/>
    </div>
    
    

  </>,
  document.getElementById('root')
);