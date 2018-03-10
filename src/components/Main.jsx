import React from 'react';
import Error from 'Components/Error';
import FileContent from 'Components/FileContent';
import FileUpload from 'Components/FileUpload';

class Main extends React.Component {
    
    constructor() {
        super();
        this.state = {
            error: null,
            info: null,
        };
        this.handleUpdate = this.handeUpdate.bind( this );
    }

    handeUpdate( message, type ) {
        this.setState( ( prevState, props ) => {
            return {
                [type]: Object.assign( {}, message ),
            };
        } );
    }

    render() {
        return (
            <div>
                This is Main.
                <FileUpload handleUpdate={ this.handleUpdate  } />
                <FileContent info={ this.state.info } />
                <Error msg={ this.state.error } />
            </div>
        );
    }
};

export default Main;