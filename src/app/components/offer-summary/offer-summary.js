import PropTypes from 'prop-types';
import React from 'react';
import styles from './offer-summary.styles';
import { withStyles } from '@material-ui/core/styles';
import OfferSummaryTitle from './offer-summary-title';
import OfferSummaryList from './offer-summary-list';
import Grid from '@material-ui/core/Grid';

const OfferSummary = (props) => {
    const {
        offer,
        showFrom,
        subtitle,
        button,
        listTitle,
        leftChild,
        rightChild,
        classes,
    } = props;

    const titleProps = {
        offer,
        showFrom,
        subtitle,
    };

    return (
        <Grid container>
            <Grid item xs={12} md={6} className={classes.os_block}>
                <OfferSummaryTitle {...titleProps} />
                {leftChild}
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                className={`${classes.os_block} ${classes.os_divider}`}
            >
                <OfferSummaryList offer={offer} title={listTitle} />
                {rightChild}
            </Grid>
            {button && <span className={classes.os__button}>{button}</span>}
        </Grid>
    );
};

OfferSummary.propTypes = {
    classes: PropTypes.shape({}),
    offer: PropTypes.shape({}).isRequired,
    leftChild: PropTypes.node,
    rightChild: PropTypes.node,
    showFrom: PropTypes.bool,
    subtitle: PropTypes.string,
    button: PropTypes.node,
    listTitle: PropTypes.string,
};

OfferSummary.defaultProps = {
    classes: {},
    leftChild: null,
    rightChild: null,
    showFrom: false,
    subtitle: null,
    button: null,
    listTitle: null,
};

export default withStyles(styles)(OfferSummary);
