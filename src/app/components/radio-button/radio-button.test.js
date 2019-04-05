import RadioButton from './radio-button';
import React from 'react';

import { themeMount } from '../../util/mount-theme';

describe('RadioButton', () => {
    it('should render correctly', () => {
        const props = {
            text: 'test title',
        };

        const { styleSheets, component } = themeMount(
            <RadioButton {...props}>Test</RadioButton>
        );

        expect(styleSheets.toString()).toMatchSnapshot();
        expect(component).toMatchSnapshot();
    });

    it('should be highlighted and description visible if select prop is true', () => {
        const props = {
            text: 'test title',
            selected: true,
        };
        const { component } = themeMount(
            <RadioButton {...props}>Test</RadioButton>
        );
        expect(component.find(RadioButton).instance().props.selected).toBe(
            true
        );
    });
});
