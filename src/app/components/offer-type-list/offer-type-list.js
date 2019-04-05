import { getOfferType, offerTypes } from '../../types/offer';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import RadioButton from '../radio-button/radio-button';
import React from 'react';
import { connect } from 'react-redux';

const ProductOfferTypeList = (props) => {
    const { offerType, onClick } = props;

    return (
        <section>
            <Grid container>
                {Object.keys(offerTypes).map((offerKey) => {
                    const itemOfferType = getOfferType(offerKey);
                    return (
                        <Grid
                            item
                            xs={6}
                            md={12}
                            lg={3}
                            xl={4}
                            key={itemOfferType.key}
                        >
                            <RadioButton
                                selected={offerType.key === itemOfferType.key}
                                id={itemOfferType.key}
                                text={itemOfferType.label}
                                onClick={() => onClick(itemOfferType.key)}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};

ProductOfferTypeList.propTypes = {
    onClick: PropTypes.func.isRequired,
    offerType: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
    offerType: state.products.offerType,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductOfferTypeList);
