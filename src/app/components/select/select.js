import ErrorIcon from '../error-icon/error-icon';
import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import styles from './select.styles';
import { withStyles } from '@material-ui/core/styles';

export const SimpleSelect = ({
    classes,
    input,
    label,
    name,
    dataSelector,
    options,
    disabled,
    meta: { touched, error, warning },
}) => {
    const classMap = cx({
        [classes.formField]: true,
        [classes.error]: touched && (error || warning),
    });
    return (
        <div className={classMap}>
            <label htmlFor={name}>
                <span className={classes.formLabel}>{label}:</span>
                <span className={classes.selectGroup}>
                    <select
                        data-selector={dataSelector}
                        disabled={disabled}
                        name={name}
                        {...input}
                    >
                        {options.map(({ value, optionLabel }) => (
                            <option key={value} value={value}>
                                {optionLabel}
                            </option>
                        ))}
                    </select>
                    <Icon name="arrowDown" />
                </span>
            </label>
            {touched &&
                ((error && (
                    <span className={classes.formWarning}>
                        <ErrorIcon />
                        {error}
                    </span>
                )) ||
                    (warning && <span className="warning">{warning}</span>))}
        </div>
    );
};

SimpleSelect.propTypes = {
    classes: PropTypes.shape({}),
    input: PropTypes.shape(),
    disabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    dataSelector: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            optionLabel: PropTypes.string.isRequired,
        })
    ).isRequired,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        warning: PropTypes.string,
        error: PropTypes.string,
    }),
};
SimpleSelect.defaultProps = {
    classes: {},
    input: {},
    disabled: false,
    name: '',
    dataSelector: '',
    label: '',
    meta: {},
};

export default withStyles(styles)(SimpleSelect);
