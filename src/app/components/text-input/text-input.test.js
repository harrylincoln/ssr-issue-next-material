import ErrorIcon from '../error-icon/error-icon';
import React from 'react';
import { SimpleTextInput as TextInput } from './text-input';
import { shallow } from 'enzyme';

describe('TextInput', () => {
    const error = 'error';
    const warning = 'warning';
    const touched = true;
    const spyScrollTo = jest.fn();

    beforeEach(() => {
        Object.defineProperty(global.window, 'scrollTo', {
            value: spyScrollTo,
        });
        Object.defineProperty(global.window, 'scrollY', { value: 1 });
        spyScrollTo.mockClear();
    });

    it('should render correctly', () => {
        const component = shallow(<TextInput name="name" label="label" />);
        expect(component).toMatchSnapshot();
    });

    it('should render error message', () => {
        const component = shallow(
            <TextInput
                touched
                meta={{ error, touched }}
                name="name"
                label="label"
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
            <TextInput
                touched
                meta={{ warning, touched }}
                name="name"
                label="label"
            />
        );
        expect(
            component.contains(<span className="warning">{warning}</span>)
        ).toEqual(true);
    });

    describe('input callbacks', () => {
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
                <TextInput name="name" label="label" input={input} />
            );
            const textInput = component.find('input');

            textInput.simulate('focus');
            expect(input.onFocus).toHaveBeenCalledTimes(1);
        });
        it('should call onChange for change event', () => {
            const component = shallow(
                <TextInput name="name" label="label" input={input} />
            );
            const textInput = component.find('input');

            textInput.simulate('change', { a: 'b' });
            expect(input.onChange).toHaveBeenCalledTimes(1);
            expect(input.onChange).toHaveBeenCalledWith({ a: 'b' });
        });

        it('should call onBlur for blur event', () => {
            const component = shallow(
                <TextInput name="name" label="label" input={input} />
            );
            const textInput = component.find('input');

            textInput.simulate('blur');
            expect(input.onBlur).toHaveBeenCalledTimes(1);
        });
    });
});
