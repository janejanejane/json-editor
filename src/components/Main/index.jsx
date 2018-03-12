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
        this.resetStates = this.resetStates.bind( this );
    }

    handeUpdate( message, type ) {
        let value = ( type === 'info' ) ? Object.assign( {}, message ) : message.toString();
        
        this.resetStates();

        this.setState( ( prevState, props ) => {
            return {
                [type]: value,
            };
        } );
    }

    resetStates() {
        this.setState( ( prevState, props) => {
            return {
                error: null,
                info: null,
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