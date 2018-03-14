import React from 'react';
import get from 'lodash/get';

class FileContent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            parentKey: {},
            content: {},
        };
        this.changeValue = this.changeValue.bind( this );
        this.formatContent = this.formatContent.bind( this );
        this.iterateContent = this.iterateContent.bind( this );
        this.showKeyValue = this.showKeyValue.bind( this );
    }

    componentWillReceiveProps( nextProps ) {
        const { info } = nextProps;
        const result = Object.assign( {}, info );

        this.setState( ( prevState, props ) => {
            return {
                content: result
            };
        } );
    }

    changeValue( evt, key ) {
        const value = evt.target.value;

        this.setState( ( prevState, props ) => {
            return {
                content: {
                    [key]: value,
                },
            };
        } );
    }

    formatContent( content, parentKey ) {
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
                this.iterateContent( content, parentKey ),
                closing
            ];
        } else if ( contentType === 'boolean' || contentType === 'number' ) {
            return content.toString();
        }
    }

    iterateContent( content, parentKey ) {
        const contentKeys = Object.keys( content );

        return contentKeys.map( ( key, index ) => {
            // if content is not an array and the value is an object, iterate through it
            if (  typeof content[ key ] === 'object' ) {
                if ( !content.hasOwnProperty( 'parentKey' ) ) {
                    content[ 'parentKey' ] = key;
                }
                
                return this.formatContent( content[ key ], key );
            // if the value is a primary data type, render it
            } else {
                if ( parentKey ) {
                    content[parentKey] = `${parentKey}.${key}`;
                    return this.showKeyValue( content, key, content[parentKey] );   
                }
                return this.showKeyValue( content, key );
            }
        } );
    }

    showKeyValue( content, key, parentKey ) {
        const ending = <span>&#44;</span>; // show ,
        const value = ( parentKey ) ? get( this.state.content, parentKey ) : this.state.content[ key ];

        return (
            <div>
                <label htmlFor={ key }>{ key } : </label>
                {
                    ( typeof content[key] === 'string' )
                        ? <input 
                            id={ key }
                            onChange={ ( e ) => this.changeValue( e, key ) }
                            value={ value } 
                            />
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