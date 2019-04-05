import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import styles from './tabs.styles';
import { withStyles } from '@material-ui/core/styles';

const SimpleTabButton = (props) => {
    const { classes, id, onClick, dataSelector, selected, text } = props;

    const classMap = cx({
        [classes.tab]: true,
        [classes.isSelected]: selected,
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
            {text}
        </button>
    );
};

SimpleTabButton.propTypes = {
    classes: PropTypes.shape({}),
    id: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    dataSelector: PropTypes.string,
    text: PropTypes.string.isRequired,
};

SimpleTabButton.defaultProps = {
    classes: {},
    id: '',
    dataSelector: '',
    onClick: () => {},
    selected: false,
};

const TabButton = withStyles(styles)(SimpleTabButton);

export const SimpleTabs = (props) => {
    const { classes, buttons, onClick, selected } = props;
    const size = 12 / buttons.length;

    return (
        <section className={classes.tabContainer}>
            <Grid container spacing={8}>
                {buttons.map((button) => (
                    <Grid item xs={size} key={button.key}>
                        <TabButton
                            id={button.key}
                            text={button.text}
                            onClick={onClick}
                            dataSelector={button.key}
                            selected={selected === button.key}
                        />
                    </Grid>
                ))}
            </Grid>
        </section>
    );
};

SimpleTabs.propTypes = {
    classes: PropTypes.shape({}),
    buttons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.string,
};

SimpleTabs.defaultProps = {
    classes: {},
    selected: false,
};

export default withStyles(styles)(SimpleTabs);
