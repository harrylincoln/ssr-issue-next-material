import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import priceBoxStyles from './price-box.styles';
import { withStyles } from '@material-ui/core/styles';

const PriceBox = (props) => {
    const {
        description,
        id,
        text,
        selected,
        dataSelector,
        onClick,
        classes,
    } = props;

    const classMap = cx({
        [classes.priceBox]: true,
        [classes.priceBox_selected]: selected,
    });

    return (
        <button
            id={id}
            key={id}
            data-selector={dataSelector}
            className={classMap}
            onClick={(e) => onClick(e, id)}
            type="button"
        >
            <span className={classes.btnTitle}>{text}</span>
            <span className={classes.btnDesc}>{description}</span>
            <Icon
                className={classes.btnIcon}
                size={32}
                name={selected ? 'checkCircle' : 'circle'}
            />
        </button>
    );
};

PriceBox.propTypes = {
    description: PropTypes.node,
    id: PropTypes.string,
    dataSelector: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    text: PropTypes.string.isRequired,
    classes: PropTypes.shape({}).isRequired,
};

PriceBox.defaultProps = {
    description: '',
    id: '',
    dataSelector: '',
    onClick: () => {},
    selected: false,
};

export default withStyles(priceBoxStyles)(PriceBox);
