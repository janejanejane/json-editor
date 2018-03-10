import React from 'react';

class FileContent extends React.Component {
    
    constructor() {
        super();
        this.iterateContent = this.iterateContent.bind( this );
    }

    iterateContent( content ) {
        if ( typeof content === 'object' ) {
            return Object.keys( content ).map( ( key, index ) => {
                return (
                    <div>
                        <label>{ key } : </label>
                        <input value={ content[key] } />
                    </div>
                );
            } );
        }
    }

    render() {
        const { info } = this.props;

        return (
            <div>
                {info ? this.iterateContent( info ) : null}
            </div>
        );
    }
};

export default FileContent;