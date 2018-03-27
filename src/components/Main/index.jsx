import React from 'react';
import Disclaimer from 'Components/Disclaimer';
import Error from 'Components/Error';
import FileContent from 'Components/FileContent';
import FileUpload from 'Components/FileUpload';
import HeroSection from 'Components/HeroSection';
import Instructions from 'Components/Instructions';

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
                <HeroSection />
                <Disclaimer />
                <div class="container">
                    <Instructions />
                    <div class="columns is-centered">
                        <div class="file is-boxed">
                            <label class="file-label">
                                {/* <input class="file-input" type="file" name="resume"> */}
                                <FileUpload handleUpdate={ this.handleUpdate  } />
                                <span class="file-cta">
                                <span class="file-icon">
                                    <i class="icon-upload2"></i>
                                </span>
                                <span class="file-label">
                                    Choose a file…
                                </span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <br />
                {/* <form>
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
                </form> */}
                <div className="columns is-centered">
                    <FileContent info={ this.state.info } />
                </div>
                <Error msg={ this.state.error } />
            </div>
        );
    }
};

export default Main;