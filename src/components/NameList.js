import React from 'react';
import Person from './Person';

function NameList() {
    // const names=['Divij','Divam']
    // const nameRender=persons.map((name,index) => <h1>key={index} Name is {name}</h1>)
    
    const persons=[
        {   
            id:1,
            name:'Divij',
            age:10
        },
        {   
            id:1,
            name:'Divam',
            age:10
        },
        {   
            id:1,
            name:'Don',
            age:9
        }
    ]
    //Here person after Person is the parameter that is passed as props
    const nameList=persons.map((person) => <Person key={person.id} person={person}></Person>)
  return <div>
      {/* //Not a good method */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
    
      {/* {nameRender} */}
      {nameList}
  </div>;
}

export default NameList;
