import React, { ReactElement } from 'react';

interface HelloMessageProps {
   name: string;
}

const HelloMessage = ({ name }: HelloMessageProps): ReactElement => {
   return (
      <div>
         <h1 className="text-red-700">
            {`Hello ${name}`}
         </h1>
         <p>deez</p>
      </div>
   )
};

export default HelloMessage;
