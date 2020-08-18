import React from 'react';
import renderer from 'react-test-renderer';
import ListaInvestimentos from '../src/listaInvestimentos';

it('rederizou corretamente', () => {
    const tree = renderer.create(<ListaInvestimentos />).toJSON();
    expect(tree).toMatchSnapshot();
})