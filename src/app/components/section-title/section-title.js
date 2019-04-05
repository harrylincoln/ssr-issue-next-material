import PropTypes from 'prop-types';
import React from 'react';
import styles from './section-title.styles';
import { withStyles } from '@material-ui/core/styles';

const SectionTitle = (props) => {
    const { classes, title, subtitle, level, ...rest } = props;

    const T1 = `h${level}`;
    const T2 = `h${parseFloat(level) + 1}`;

    return (
        <hgroup className={classes.section} {...rest}>
            <T1 className={classes.title}>{title}</T1>
            {subtitle && <T2 className={classes.subtitle}>{subtitle}</T2>}
        </hgroup>
    );
};

SectionTitle.propTypes = {
    classes: PropTypes.shape({}),
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    level: PropTypes.string,
};

SectionTitle.defaultProps = {
    classes: {},
    subtitle: null,
    level: '2',
};

export default withStyles(styles)(SectionTitle);
