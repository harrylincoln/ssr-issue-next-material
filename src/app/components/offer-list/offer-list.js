import Grid from '@material-ui/core/Grid';
import OfferListItem from '../offer-list-item/offer-list-item';
import PropTypes from 'prop-types';
import React from 'react';

const ProductOfferList = (props) => {
    const { offers } = props;

    if (!offers.length) return '';

    const sortedOffers = offers.sort((a, b) => a.weeks - b.weeks);
    return (
        <Grid container spacing={8}>
            {sortedOffers.map((offer) => (
                <Grid
                    data-selector="offer-list-item"
                    item
                    xs={12}
                    sm={6}
                    key={offer.id}
                >
                    <OfferListItem offer={offer} />
                </Grid>
            ))}
        </Grid>
    );
};

ProductOfferList.propTypes = {
    offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProductOfferList;
