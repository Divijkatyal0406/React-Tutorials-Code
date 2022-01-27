import react from "react"
import { Component } from "react/cjs/react.production.min";

//Functional component
// 1.
// function Greet(){
//     return <h1>Hello Divij</h1>
// }
// 2.ES6 version
// const Greet=(props)=><h1>Hello {props.name}</h1>

//3 ES6 version destructuring props
const Greet=({name})=><h1>Hello {name}</h1>

export default Greet;