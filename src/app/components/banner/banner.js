import PropTypes from 'prop-types';
import React from 'react';
import bannerStyles from './banner.styles';
import { withStyles } from '@material-ui/core/styles';

const Banner = (props) => {
    const { classes, title, subtitle } = props;

    return (
        <header className={classes.banner}>
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
        </header>
    );
};

Banner.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

Banner.defaultProps = {
    title: null,
    subtitle: null,
};

export default withStyles(bannerStyles)(Banner);
