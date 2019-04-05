import { SimpleCollapsable as Collapsable } from './collapsable';
import React from 'react';
// import { themeMount } from '../../util/mount-theme';
import { shallow } from 'enzyme';

describe('<collapsable /> component', () => {
    it('shows NO content IF prop isActive=false and isComplete=false', () => {
        const props = {
            isActive: false,
            isComplete: false,
            title: 'test title',
            activeContent: <p>active</p>,
            completeContent: <p>complete</p>,
        };
        const component = shallow(<Collapsable {...props} />);
        expect(component.hasClass('isClosed')).toBe(true);
    });

    it('shows activeContent IF prop isActive=true, ', () => {
        const props = {
            isActive: true,
            isComplete: false,
            title: 'test title',
            activeContent: <p>active</p>,
            completeContent: <p>complete</p>,
        };
        const component = shallow(<Collapsable {...props} />);
        expect(component.hasClass('isActive')).toBe(true);
    });

    it('shows completeContent IF prop isComplete=true and isActive=false', () => {
        const props = {
            isActive: false,
            isComplete: true,
            title: 'test title',
            activeContent: <p>active</p>,
            completeContent: <p>complete</p>,
        };
        const component = shallow(<Collapsable {...props} />);
        expect(component.hasClass('isComplete')).toBe(true);
    });

    it('shows submit if handleSubmit and edit buttons if handleEdit props are defined', () => {
        const props = {
            isActive: false,
            isComplete: true,
            title: 'test title',
            activeContent: <p>active</p>,
            completeContent: <p>complete</p>,
            handleEdit: jest.fn(),
            handleSubmit: jest.fn(),
        };

        const component = shallow(<Collapsable {...props} />);
        const editBtn = component.find('header button');
        expect(editBtn).toHaveLength(1);

        const submitBtn = component.find('footer WithStyles(Button)');
        expect(submitBtn).toHaveLength(1);

        editBtn.simulate('click');
        expect(props.handleEdit).toHaveBeenCalledTimes(1);

        submitBtn.simulate('click');
        expect(props.handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('does NOT shows submit if handleSubmit and edit buttons if handleEdit props are not defined', () => {
        const props = {
            isActive: true,
            isComplete: false,
            title: 'test title',
            activeContent: <p>active</p>,
            completeContent: <p>complete</p>,
        };

        const component = shallow(<Collapsable {...props} />);
        expect(component.find('footer Button')).toHaveLength(0);
        expect(component.find('header button')).toHaveLength(0);
    });
});
