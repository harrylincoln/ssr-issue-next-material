import ErrorIcon from '../error-icon/error-icon';
import React from 'react';
import { SimpleSelect as Select } from './select';
import { shallow } from 'enzyme';

describe('Select', () => {
    const error = 'error';
    const warning = 'warning';
    const touched = true;
    const options = [
        { value: '', optionLabel: 'Select' },
        { value: 'mr', optionLabel: 'Mr.' },
        { value: 'ms', optionLabel: 'Ms.' },
        { value: 'sir', optionLabel: 'Sir' },
        { value: 'mrs', optionLabel: 'Mrs.' },
        { value: 'miss', optionLabel: 'Miss.' },
        { value: 'dr', optionLabel: 'Dr.' },
    ];

    const spyScrollTo = jest.fn();
    beforeEach(() => {
        Object.defineProperty(global.window, 'scrollTo', {
            value: spyScrollTo,
        });
        Object.defineProperty(global.window, 'scrollY', { value: 1 });
        spyScrollTo.mockClear();
    });

    it('should render correctly', () => {
        const component = shallow(
            <Select name="name" label="label" options={options} />
        );
        expect(component).toMatchSnapshot();
    });

    it('should render error message', () => {
        const component = shallow(
            <Select
                meta={{ error, touched }}
                name="name"
                label="label"
                options={options}
                classes={{ formWarning: 'formWarning' }}
            />
        );

        expect(
            component.contains(
                <span className="formWarning">
                    <ErrorIcon />
                    {error}
                </span>
            )
        ).toEqual(true);
    });

    it('should render warning', () => {
        const component = shallow(
            <Select
                meta={{ warning, touched }}
                name="name"
                label="label"
                options={options}
            />
        );
        expect(
            component.contains(<span className="warning">{warning}</span>)
        ).toEqual(true);
    });
    describe('select callbacks', () => {
        const input = {
            onChange: jest.fn(),
            onBlur: jest.fn(),
            onFocus: jest.fn(),
        };

        afterEach(() => {
            input.onChange.mockClear();
            input.onBlur.mockClear();
            input.onFocus.mockClear();
        });

        it('should call onFocus for focus event', () => {
            const component = shallow(
                <Select
                    name="name"
                    label="label"
                    options={options}
                    input={input}
                />
            );
            const select = component.find('select');

            select.simulate('focus');
            expect(input.onFocus).toHaveBeenCalledTimes(1);
        });
        it('should call onChange for change event', () => {
            const component = shallow(
                <Select
                    name="name"
                    label="label"
                    options={options}
                    input={input}
                />
            );
            const select = component.find('select');

            select.simulate('change', { a: 'b' });
            expect(input.onChange).toHaveBeenCalledTimes(1);
            expect(input.onChange).toHaveBeenCalledWith({ a: 'b' });
        });

        it('should call onBlur for blur event', () => {
            const component = shallow(
                <Select
                    name="name"
                    label="label"
                    options={options}
                    input={input}
                />
            );
            const select = component.find('select');

            select.simulate('blur');
            expect(input.onBlur).toHaveBeenCalledTimes(1);
        });
    });
});
