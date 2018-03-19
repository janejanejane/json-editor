import React from 'react';

const Error = ( { msg } ) => {
    const errorDiv = (
        <div class="_danger _xlarge">
            {msg}
        </div> 
    );
    
    return ( msg )
        ? errorDiv
        : null;
};

export default Error;