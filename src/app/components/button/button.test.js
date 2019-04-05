import Button from './button';
import Link from 'next/link';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { themeMount } from '../../util/mount-theme';
import Router from 'next/router';

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

const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

describe('Button', () => {
    it('should render correctly', () => {
        const { styleSheets, component } = themeMount(
            <Button>Test</Button>,
            store
        );

        expect(styleSheets.toString()).toMatchSnapshot();
        expect(component).toMatchSnapshot();
    });

    it('should render an anchor tag if URL prop is set', () => {
        const { component } = themeMount(
            <Button url="http://google.com">Test</Button>
        );
        expect(
            component
                .find('Button')
                .children()
                .type()
        ).toEqual('a');
    });

    it('should render a button tag if NO URL prop is set', () => {
        const { component } = themeMount(<Button>Test</Button>);
        expect(
            component
                .find('Button')
                .children()
                .type()
        ).toEqual('button');
    });

    // it('should apply onClick event to child', () => {});

    it('should wrap the button in a <Link> component if route prop is set', () => {
        const { component } = themeMount(
            <Button route="/path/toNav">Test</Button>
        );
        expect(
            component
                .find('WithStyles(Button)')
                .find('Button')
                .children()
                .type()
        ).toEqual(Link);
        expect(
            component
                .find('WithStyles(Button)')
                .find('Button')
                .children()
                .instance().props.passHref
        ).toBe(true);
    });

    it('should prefetch props to <Link> component if they are set', () => {
        const { component } = themeMount(
            <Button route="/path/toNav" prefetch>
                Test
            </Button>
        );

        expect(
            component
                .find('WithStyles(Button)')
                .find('Button')
                .children()
                .type()
        ).toEqual(Link);
        expect(
            component
                .find('WithStyles(Button)')
                .find('Button')
                .children()
                .instance().props.prefetch
        ).toBe(true);
    });

    it('should apply prettyUrl to href if "as" prop is set', () => {
        const { component } = themeMount(
            <Button route="/path/toNav" as="/prettyUrl/isnt/it/nice">
                Test
            </Button>
        );

        expect(
            component
                .find('WithStyles(Button)')
                .find('Button')
                .children()
                .type()
        ).toEqual(Link);
        expect(
            component
                .find('WithStyles(Button)')
                .find('Button')
                .children()
                .instance().props.as
        ).toEqual('/prettyUrl/isnt/it/nice');
    });
});

/*

Tests to add

onClick being applied to child
route / as / prefetch ~ add props / render Link

*/
