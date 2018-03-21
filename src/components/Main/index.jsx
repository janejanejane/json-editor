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
                <section class="hero is-medium is-primary is-bold">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Welcome!
                            </h1>
                            <h2 class="subtitle">
                                This is a simple utility tool for editing your JSON files.
                            </h2>
                            <p>
                                <i>It is working for non-nested files and is still a work-in-progress.</i>
                            </p>
                            <p>
                                <i>If you want to try it out, see below.</i>
                            </p>
                        </div>
                    </div>
                </section>
                <div class="notification is-warning">
                    <strong>NOTE:</strong> 
                    <p>No data is collected. All processing is done on the client browser using the WebAPI <a href="https://developer.mozilla.org/en-US/docs/Web/API/FileReader">FileReader</a>.</p>
                    <p>The download uses the HTML5 saveAs method thru the <a href="https://github.com/eligrey/FileSaver.js/">FileSaver</a> library.</p>
                </div>
                <div class="container">
                    <div class="columns">
                        <div class="column is-half">
                            <article class="message is-info">
                                <div class="message-header">
                                    <p class="has-text-weight-bold">Step 1</p>
                                </div>
                                <div class="message-body">
                                    Prepare your JSON document. (or copy/paste from somewhere)
                                </div>
                            </article>
                        </div>
                        <div class="column">
                            <article class="message is-info">
                                <div class="message-header">
                                    <p class="has-text-weight-bold">Step 2</p>
                                </div>
                                <div class="message-body">
                                    Click 'Choose a file...' button below.
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-half">
                            <article class="message is-info">
                                <div class="message-header">
                                    <p class="has-text-weight-bold">Step 3</p>
                                </div>
                                <div class="message-body">
                                    Edit the values you want changed.
                                </div>
                            </article>
                        </div>
                        <div class="column">
                            <article class="message is-info">
                                <div class="message-header">
                                    <p class="has-text-weight-bold">Step 4</p>
                                </div>
                                <div class="message-body">
                                    Click 'Save Changes' button to download your changed JSON.
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="file is-boxed">
                            <label class="file-label">
                                {/* <input class="file-input" type="file" name="resume"> */}
                                <FileUpload handleUpdate={ this.handleUpdate  } />
                                <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
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
                <div className="container">
                    <FileContent info={ this.state.info } />
                </div>
                <Error msg={ this.state.error } />
            </div>
        );
    }
};

export default Main;