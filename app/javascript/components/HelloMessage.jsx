import React from 'react';

const HelloMessage = ({ name }) => {
   console.log('this is working');
   return (
      <h1 className="text-red-700">
         {`Hello ${name}`}
      </h1>
   )
};

export default HelloMessage;