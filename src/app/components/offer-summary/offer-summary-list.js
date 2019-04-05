import PropTypes from 'prop-types';
import React from 'react';
import content from '../../consts/content';
import styles from './offer-summary.styles';
import { withStyles } from '@material-ui/core/styles';

const OfferSummaryList = (props) => {
    const { offer, title, classes } = props;
    const productContent = content.product[offer.refProductType];
    const { features } = productContent;

    return (
        <section className={classes.os}>
            {title && <h3 className={classes.os__listHeading}>{title}</h3>}
            <ul className={classes.os__list}>
                {features.map((feature, i) => (
                    <li
                        key={parseFloat(i.toString())}
                        dangerouslySetInnerHTML={{ __html: feature }}
                    />
                ))}
            </ul>
        </section>
    );
};

OfferSummaryList.propTypes = {
    classes: PropTypes.shape({}),
    offer: PropTypes.shape({}).isRequired,
    title: PropTypes.string,
};

OfferSummaryList.defaultProps = {
    classes: {},
    title: null,
};

export default withStyles(styles)(OfferSummaryList);
