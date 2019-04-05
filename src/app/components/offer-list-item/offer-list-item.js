import React, { Fragment } from 'react';

import PriceBox from '../price-box/price-box';
import PropTypes from 'prop-types';

const OfferListItem = (props) => {
    const text = `Get ${offer.weeks} weeks for ${offer.formattedInitialRate}`;

    const description = (
        <Fragment>
            <p>
                {offer.formattedPricePerWeek} for {offer.weeks}
                weeks. <br />
                {offer.initialRate} total, save {offer.saving}
            </p>
        </Fragment>
    );

    if (!offer || !offer.id) {
        console.warn('>>>>> NO OFFER <<<<<<');
        return '';
    }

    return (
        <PriceBox
            id={offer.id}
            onClick={() => onClick(offer)}
            selected={selectedOffer && offer.id === selectedOffer.id}
            text={text}
            description={description}
        />
    );
};

OfferListItem.propTypes = {
    offer: PropTypes.shape().isRequired,
    selectedOffer: PropTypes.shape(),
    onClick: PropTypes.func.isRequired,
};

OfferListItem.defaultProps = {
    selectedOffer: {},
};


export default OfferListItem;
