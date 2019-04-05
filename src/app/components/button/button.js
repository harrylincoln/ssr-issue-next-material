import Icon from '../icon/icon';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import buttonStyles from './button.styles';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import styles from './button.scss';

/**
 * Additional props that can be passed through and applied directly to element
 * disable={true}
 * tabIndex={1}
 * type={submit}
 */
const Button = (props) => {
    const {
        id,
        url,
        route,
        as,
        prefetch,
        text,
        selected,
        onClick,
        children,
        secondary,
        tertiary,
        light,
        edit,
        type,
        disabled,
        tabIndex,
        dataSelector,
        full,
        small,
        sticky,
        icon,
        dark,
        classes,
        ...rest
    } = props;

    const TagType = url || route ? 'a' : 'button';

    const buttonProps = {
        id,
        type,
        disabled,
        tabIndex,
    };

    const classMap = cx({
        [classes.primary]: !secondary && !tertiary && !light,
        [classes.secondary]: secondary,
        [classes.tertiary]: tertiary,
        [classes.light]: light,
        [classes.button]: !selected,
        [classes.selected]: selected,
        [classes.full]: full,
        [classes.small]: small,
        [classes.edit]: edit,
        [classes.button_sticky]: sticky,
        [classes.dark]: dark,
    });

    if (onClick) {
        buttonProps.onClick = (e) => onClick(e, id);
    }

    if (url) {
        buttonProps.href = url;
    }

    const btn = (
        <TagType
            data-selector={dataSelector}
            className={classMap}
            {...buttonProps}
            {...rest}
        >
            {icon && <Icon name={icon} size={20} style={{ fill: '#ffffff' }} />}
            {text || children}
        </TagType>
    );

    if (route) {
        const linkProps = {
            href: route,
            passHref: true,
        };
        if (as) linkProps.as = as;
        if (prefetch) linkProps.prefetch = true;

        return <Link {...linkProps}>{btn}</Link>;
    }

    return btn;
};

Button.propTypes = {
    // Copy
    children: PropTypes.node,
    text: PropTypes.string,

    // Props applied directly
    disabled: PropTypes.bool,
    id: PropTypes.string,
    type: PropTypes.string,
    tabIndex: PropTypes.string,

    // Conditionally applied
    onClick: PropTypes.func,
    url: PropTypes.string,
    route: PropTypes.string,
    as: PropTypes.string,
    prefetch: PropTypes.bool,
    icon: PropTypes.string,

    // ClassName
    full: PropTypes.bool,
    small: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    light: PropTypes.bool,
    selected: PropTypes.bool,
    dark: PropTypes.bool,
};

Button.defaultProps = {
    children: null,
    text: '',

    disabled: false,
    id: null,
    type: null,
    tabIndex: null,

    onClick: null,
    url: null,
    route: null,
    as: null,
    prefetch: false,

    full: false,
    small: false,
    secondary: false,
    tertiary: false,
    light: false,
    selected: false,
    dark: false,
};

export default withStyles(buttonStyles)(Button);
