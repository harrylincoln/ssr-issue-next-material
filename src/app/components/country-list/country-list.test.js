import * as countryActions from '../../actions/country-actions';

import CountryList from './country-list';
import { Provider } from 'react-redux';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import countries from '../../consts/countries';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const country = countries.find((c) => c.iso2 === 'GB');
const testCountry = countries.find((c) => c.iso2 === 'AE');

describe('Country-list component', () => {
    const store = mockStore({
        countries: {
            currentCountry: country,
            countries,
        },
    });

    it('dispatches a selectCountry action when the dropdown is changed', async (done) => {
        const mockSelectCountry = jest.spyOn(countryActions, 'selectCountry');
        mockSelectCountry.mockImplementation(() => {});

        const mockDispatch = jest.spyOn(store, 'dispatch');
        mockDispatch.mockImplementation(() => {});

        const component = mount(
            <Provider store={store}>
                <CountryList />
            </Provider>
        );

        const select = component.find('select');

        const changeEvent = {
            target: { value: testCountry.iso3 },
        };

        await select.simulate('change', changeEvent);

        process.nextTick(() => {
            expect(store.getActions()).toEqual([]);
            expect(mockSelectCountry).toHaveBeenCalledWith(testCountry.iso3);
            done();
        });
    });

    it('renderes a dropdown with the available countries in it', () => {
        const component = renderer.create(
            <Provider store={store}>
                <CountryList />
            </Provider>
        );

        const testInstance = component.root;
        const options = testInstance.findAllByType('option');
        expect(options.length).toEqual(countries.length);
    });
});
