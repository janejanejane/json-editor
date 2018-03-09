import React from 'react';

class FileUpload extends React.Component {

    constructor() {
        super();
        this.fileReader = new FileReader();
    }

    verifyUpload( evt ) {
        const fileUpload = evt.target.files[ 0 ];
        
        this.fileReader.onload = ( fileUpload ) => { 
            try {
                console.log( 'this is the content:', JSON.parse( fileUpload.target.result ) );
            } catch( err ) {
                console.log( 'this is the error:', err ); 
            }
        };

        this.fileReader.onerror = ( fileUpload ) => {
            console.log( 'error reading file', fileUpload );
        };

        this.fileReader.readAsText( fileUpload );
    }

    render() {
        return (
            <input 
                type="file" 
                id="json-file" 
                name="json-file"
                accept=".json,application/json" 
                onChange={( e ) => this.verifyUpload( e )} />
        );
    }
}

export default FileUpload;