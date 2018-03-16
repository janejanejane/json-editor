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
        this.showLabel = this.showLabel.bind( this );
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

    formatContent( content, key ) {
        const contentType = typeof content;
        let opening = <span>&#123;</span>; // show {
        let closing = <span>&#125;</span>; // show }

        if ( contentType === 'object' ) {

            if( key !== undefined ) {
                opening = `${key}: {`;
            }

            if ( Array.isArray( content ) ) {
                opening = <span>&#91;</span>; // show [
                closing = <span>&#93;</span>; // show ]
            }

            return [
                opening,
                this.iterateContent( content, key ),
                closing
            ];
        } else if ( contentType === 'boolean' || contentType === 'number' ) {
            return content.toString();
        }
    }

    iterateContent( content, outerKey ) {
        const contentKeys = Object.keys( content );
        
        return contentKeys.map( ( key, index ) => {

            // if key is 'parentKey', don't include in display
            if ( key === 'parentKey' ) return;

            // if content is not an array and the value is an object, iterate through it
            if (  typeof content[ key ] === 'object' ) {
                return this.formatContent( content[ key ], key );

            // if the value is a primary data type, render it
            } else {
                if ( outerKey ) {
                    content[ 'parentKey' ] = outerKey;
                    return this.showKeyValue( content, key, content[ 'parentKey' ] );   
                }
                
                return this.showKeyValue( content, key );
            }
        } );
    }

    showKeyValue( content, key, parentKey ) {
        const ending = <span>&#44;</span>; // show ,
        const value = ( parentKey ) ? get( this.state.content, `${parentKey}.${key}` ) : this.state.content[ key ];

        return (
            <div>
                { this.showLabel( key ) }
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

    showLabel( key ) {
        return <label htmlFor={ key }>{ key } : </label>;
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