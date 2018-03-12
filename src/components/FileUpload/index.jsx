import React from 'react';

class FileUpload extends React.Component {

    constructor() {
        super();
        this.fileReader = new FileReader();
        this.verifyUpload = this.verifyUpload.bind( this );
    }

    verifyUpload( evt ) {
        const fileUpload = evt.target.files[ 0 ];
        
        this.fileReader.onload = ( fileUpload ) => { 
            try {
                const result = JSON.parse( fileUpload.target.result );
                this.props.handleUpdate( result, 'info' );
            } catch( err ) {
                this.props.handleUpdate( err, 'error' );
            }
        };

        this.fileReader.onerror = ( fileUpload ) => {
            this.props.handleUpdate( fileUpload, 'error' );
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
                onChange={ this.verifyUpload } />
        );
    }
}

export default FileUpload;