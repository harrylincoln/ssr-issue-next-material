import ErrorIcon from '../error-icon/error-icon';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import styles from './text-input.styles';
import { withStyles } from '@material-ui/core/styles';

export const SimpleTextInput = ({
    classes,
    input,
    label,
    placeholder,
    autocomplete,
    disabled,
    dataSelector,
    readOnly, // TODO: implement readonly styles
    type,
    name,
    meta: { touched, error, warning },
}) => {
    const classMap = cx({
        [classes.formField]: true,
        [classes.error]: touched && (error || warning),
    });

    const inputProps = {
        disabled,
        readOnly,
        placeholder,
        type,
        ...input,
    };

    return (
        <div className={classMap}>
            {type === 'checkbox' ? (
                <label htmlFor={name}>
                    <input
                        data-selector={dataSelector}
                        className={`${classes.formElement} ${classes.input}`}
                        {...inputProps}
                    />
                    <span className={classes.formLabel}>{label}</span>
                </label>
            ) : (
                <label htmlFor={name}>
                    <span className={classes.formLabel}>{label}</span>
                    <input
                        autoComplete={autocomplete}
                        data-selector={dataSelector}
                        className={classes.formElement}
                        {...inputProps}
                    />
                </label>
            )}
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

SimpleTextInput.propTypes = {
    classes: PropTypes.shape({}),
    disabled: PropTypes.bool,
    input: PropTypes.shape(),
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['email', 'text', 'tel', 'checkbox', 'password']),
    placeholder: PropTypes.string,
    dataSelector: PropTypes.string,
    name: PropTypes.string,
    readOnly: PropTypes.bool,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        warning: PropTypes.string,
        error: PropTypes.string,
    }),
    autocomplete: PropTypes.string,
};

SimpleTextInput.defaultProps = {
    classes: {},
    input: {},
    autocomplete: null,
    disabled: false,
    name: null,
    readOnly: false,
    placeholder: undefined,
    type: 'text',
    dataSelector: '',
    meta: {},
};

export default withStyles(styles)(SimpleTextInput);
