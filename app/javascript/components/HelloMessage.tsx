import { React, ReactElement } from 'react';

interface HelloMessageProps {
   name: string;
}

const HelloMessage = ({ name }: HelloMessageProps): ReactElement => {
   console.log('this is working');
   return (
      <h1 className="text-red-700">
         {`Hello ${name}`}
      </h1>
   )
};

export default HelloMessage;
