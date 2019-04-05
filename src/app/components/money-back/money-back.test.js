import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MoneyBack from './money-back';
import { themeMount } from '../../util/mount-theme';

const mockStore = configureStore([thunk]);
const store = mockStore({
    countries: {
        countries: [],
        currentCountry: {
            name: 'Narnia',
            iso2: 'NA',
        },
    },
});

describe('Money Back', () => {
    it('should render correctly with appropriate styles from .styles partial', () => {
        const { styleSheets, component } = themeMount(<MoneyBack />, store);

        expect(styleSheets.toString()).toMatchSnapshot();
        expect(component).toMatchSnapshot();
    });
});
