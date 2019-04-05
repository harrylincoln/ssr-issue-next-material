// import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import radioButtonStyles from './radio-button.styles';

const RadioButton = (props) => {
    const { id, text, selected, onClick, classes } = props;

    const classMap = cx({
        [classes.btnRadio]: true,
        [classes.btnRadio_selected]: selected,
    });

    const btn = (
        <button
            id={id}
            key={id}
            className={classMap}
            onClick={(e) => onClick(e, id)}
            type="button"
        >
            {text === 'Print + Digital' ? 'Most popular' : text}
        </button>
    );

    return btn;
};

RadioButton.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
    id: '',
    onClick: () => {},
    selected: false,
};

export default withStyles(radioButtonStyles)(RadioButton);
