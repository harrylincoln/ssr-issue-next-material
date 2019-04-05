import Button from '../button/button';
import OfferSummary from '../offer-summary/offer-summary';
import PropTypes from 'prop-types';
import React from 'react';
import { Router } from '../../routes';
import styles from './basket.styles';
import { withStyles } from '@material-ui/core/styles';

export class SimpleBasket extends React.Component {
    scene = false;

    constructor(props) {
        super(props);
        this.refCallback = this.refCallback.bind(this);
    }

    renderEditBtn(style, id) {
        const { classes } = this.props;
        const btnProps = {
            id,
            small: true,
            onClick: () => Router.back(),
        };
        if (style) btnProps[style] = true;

        return (
            <Button {...btnProps}>
                Change <span className={classes.hideText}></span>
            </Button>
        );
    }

    renderPrice() {
        const { offer, classes } = this.props;

        return (
            <p className={classes.priceSummary}>
                <span className={classes.priceSummary_price}>
                    {offer.formattedInitialRate}
                </span>
                <span className={classes.priceSummary_copy}>
                    <span className={classes.priceSummary_duration}>
                        Payable today for your first {offer.weeks} weeks
                    </span>
                    {offer.followUpRate && (
                        <span className={classes.priceSummary_renew}>
                            then {offer.formattedFollowUpRate} per quater (13
                            weeks) thereafter
                        </span>
                    )}
                    {!offer.followUpRate && (
                        <span className={classes.priceSummary_renew}>
                        </span>
                    )}
                </span>
            </p>
        );
    }

    render() {
        const { offer, classes } = this.props;

        return (
            <section className={classes.basket}>
                <div className={classes.basketSummary}>
                    <OfferSummary
                        offer={offer}
                        subtitle="Your choice"
                        listTitle="What you get"
                        leftChild={this.renderPrice()}
                        button={
                            <span className={classes.basketBtn}>
                                {this.renderEditBtn('tertiary', 'editBtn')}
                            </span>
                        }
                    />
                </div>
                <div
                    id="marker"
                    style={{ position: 'relative', display: 'block' }}
                />
                <div className={classes.basketFixed} ref={this.refCallback}>
                    <div
                        className={classes.basketFixedInner}
                        aria-hidden="true"
                    >
                        <div className={classes.fixedPrice}>
                            {offer.formattedInitialRate}
                        </div>
                        <div className={classes.fixedCopy}>
                            <span>
                                {offer.refProductType} for {offer.weeks} weeks
                            </span>
                            {offer.followUpRate && (
                                <span className={classes.fixedRenew}>
                                    Auto renews every {offer.weeks} weeks.
                                </span>
                            )}
                        </div>
                        {this.renderEditBtn('tertiary', 'editBtnFix')}
                    </div>
                </div>
            </section>
        );
    }
}

SimpleBasket.propTypes = {
    classes: PropTypes.shape({}),
    offer: PropTypes.shape({}).isRequired,
};

SimpleBasket.defaultProps = {
    classes: {},
};

export default withStyles(styles)(SimpleBasket);
