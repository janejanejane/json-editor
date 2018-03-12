import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from 'Components/Main';
import Error from 'Components/Error';
import FileContent from 'Components/FileContent';
import FileUpload from 'Components/FileUpload';

Enzyme.configure({ adapter: new Adapter() });

describe( '<Main />', () => {
    it( 'renders <Error /> component', () => {
        const wrapper = shallow( <Main /> );
        expect( wrapper.find( Error ) ).toHaveLength( 1 );
    } );

    it( 'renders <FileContent /> component', () => {
        const wrapper = shallow( <Main /> );
        expect( wrapper.find( FileContent ) ).toHaveLength( 1 );
    } );

    it( 'renders <FileUpload /> component', () => {
        const wrapper = shallow( <Main /> );
        expect( wrapper.find( FileUpload ) ).toHaveLength( 1 );
    } );
} );