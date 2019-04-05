import PropTypes from 'prop-types';
import React from 'react';
import styles from './offer-summary.styles';
import { withStyles } from '@material-ui/core/styles';

const OfferSummaryTitle = (props) => {
    const { offer, showFrom, button, subtitle, classes } = props;
    const fromLine = `From ${offer.formattedPricePerWeek} for ${
        offer.weeks
    } weeks`;

    return (
        <header className={classes.os}>
            {showFrom && <h3 className={classes.os__subHeading}>{fromLine}</h3>}
            {subtitle && <h3 className={classes.os__subHeading}>{subtitle}</h3>}
            <h2 className={classes.os__heading}>{offer.refProductType}</h2>
            {button && <span className={classes.os__button}>{button}</span>}
        </header>
    );
};

OfferSummaryTitle.propTypes = {
    classes: PropTypes.shape({}),
    offer: PropTypes.shape({}).isRequired,
    showFrom: PropTypes.bool,
    subtitle: PropTypes.string,
    button: PropTypes.node,
};

OfferSummaryTitle.defaultProps = {
    classes: {},
    showFrom: false,
    subtitle: null,
    button: null,
};

export default withStyles(styles)(OfferSummaryTitle);
