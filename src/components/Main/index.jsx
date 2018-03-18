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
                <div className="jumbo _teal">
                    <h3>Welcome!</h3>
                    <p>This is a simple utility tool for editing your JSON files.</p>
                    <p><small>It is working for simple files and is still a work-in-progress.</small></p>
                </div>
                <form>
                    <fieldset>
                        <legend>Upload JSON file:</legend>
                        <div className="row">
                            <div className="col m2-5"></div>
                            <div className="col m1-5">
                                <FileUpload handleUpdate={ this.handleUpdate  } />
                            </div>
                            <div className="col m2-5"></div>
                        </div>
                    </fieldset>
                </form>
                <div className="row">
                    <div className="col m1-5"></div>
                        <FileContent info={ this.state.info } />
                    <div className="col m1-5"></div>
                </div>
                <Error msg={ this.state.error } />
            </div>
        );
    }
};

export default Main;