import { SimpleBasket as Basket } from './basket';
import React from 'react';
import { Router } from '../../routes';
import mocks from '../../../mocks/product';
import { themeMount } from '../../util/mount-theme';

describe('Basket component', () => {
    const onConfirmMock = jest.fn().mockImplementation(() => {});
    const routerMock = jest.spyOn(Router, 'back');
    routerMock.mockImplementation(() => {});

    it('renders full version initially', () => {
        const { fullMountWithTheme } = themeMount(
            <Basket onConfirm={onConfirmMock} offer={mocks.offer} />
        );
        expect(fullMountWithTheme.exists('#editBtn')).toBe(true);
    });

    it('navigates back to previous page when user click "edit" button', () => {
        const { fullMountWithTheme } = themeMount(
            <Basket onConfirm={onConfirmMock} offer={mocks.offer} />
        );
        const secondaryButton = fullMountWithTheme.find('button#editBtn');
        secondaryButton.simulate('click');
        expect(routerMock).toBeCalledTimes(1);
    });
});
