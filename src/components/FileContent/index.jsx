import React from 'react';

class FileContent extends React.Component {
    
    constructor() {
        super();
        this.formatContent = this.formatContent.bind( this );
        this.iterateContent = this.iterateContent.bind( this );
        this.showKeyValue = this.showKeyValue.bind( this );
    }

    formatContent( content ) {
        const contentType = typeof content;
        let opening = <span>&#123;</span>; // show {
        let closing = <span>&#125;</span>; // show }

        if ( contentType === 'object' ) {
            if ( Array.isArray( content ) ) {
                opening = <span>&#91;</span>; // show [
                closing = <span>&#93;</span>; // show ]
            }

            return [
                opening,
                this.iterateContent( content ),
                closing
            ];
        } else if ( contentType === 'boolean' || contentType === 'number' ) {
            return content.toString();
        }
    }

    iterateContent( content ) {
        return Object.keys( content ).map( ( key, index ) => {
            // if content is not an array and the value is an object, iterate through it
            if (  Array.isArray( content ) && typeof content[ key ] === 'object' ) {
                return this.formatContent( content[ key ] );
            // if the value is a primary data type, render it
            } else {
                return this.showKeyValue( content, key );
            }
        } );
    }

    showKeyValue( content, key ) {
        const ending = <span>&#44;</span>; // show ,

        return (
            <div>
                <label>{ key } : </label>
                {
                    ( typeof content[key] === 'string' )
                        ? <input value={ content[ key ] } />
                        : this.formatContent( content[ key ] )
                }
                { ending }
            </div>
        )
    }

    render() {
        const { info } = this.props;

        return (
            <div>
                {info ? this.formatContent( info ) : null}
            </div>
        );
    }
};

export default FileContent;