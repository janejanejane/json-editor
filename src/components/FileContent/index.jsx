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
        this.showValue = this.showValue.bind( this );
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
        const keyValue = ( key !== undefined ) ? `${key}:` : null;
        let opening = <div>{keyValue} &#123;</div>; // show {key|null}: {
        let closing = <div>&#125;</div>; // show }

        if ( contentType === 'object' ) {

            if ( Array.isArray( content ) ) {
                opening = <div>{keyValue} &#91;</div>; // show {key|null}: [
                closing = <div>&#93;</div>; // show ]
    
            }

            return [
                opening,
                this.iterateContent( content, key ),
                closing
            ];
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
        const value = ( parentKey ) ? get( this.state.content, [ parentKey, key ] ) : this.state.content[ key ];

        return (
            <div>
                { this.showLabel( key ) }
                {
                    ( typeof content[key] !== 'object' )
                        ? this.showValue( key, value )
                        : this.formatContent( content[ key ] )
                }
                { ending }
            </div>
        )
    }

    showLabel( key ) {
        return <label htmlFor={ key }>{ key } : </label>;
    }

    showValue( key, value ) {
        return <input 
                id={ key }
                onChange={ ( e ) => this.changeValue( e, key ) }
                value={ value } 
            />;
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