import React from 'react';

const Error = ( { msg } ) => {
    const errorDiv = (
        <article class="message is-danger">
            <div class="message-body">
                {msg}
            </div>
        </article>
    );
    
    return ( msg )
        ? errorDiv
        : null;
};

export default Error;