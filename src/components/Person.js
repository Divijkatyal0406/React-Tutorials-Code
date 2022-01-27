import React from 'react';

function Person({person}) {
  return <div>
      <h2>Person name is {person.name} and his age is {person.age}</h2>
  </div>;
}

export default Person;
