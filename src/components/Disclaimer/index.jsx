import React from 'react';

const Disclaimer = () => {
    return (
        <div class="notification is-warning">
            <strong>NOTE:</strong> 
            <p>No data is collected. All processing is done on the client browser using the WebAPI <a href="https://developer.mozilla.org/en-US/docs/Web/API/FileReader">FileReader</a>.</p>
            <p>The download uses the HTML5 saveAs method thru the <a href="https://github.com/eligrey/FileSaver.js/">FileSaver</a> library.</p>
        </div>
    );
};

export default Disclaimer;