import React, { Fragment } from 'react';
import content, {
    faqSplash,
} from '../consts/content';
import { getOfferType, offerTypes } from '../types/offer';
import { getProductType, productTypes } from '../types/product';

import AccordionItem from '../components/accordion/accordion-item';
import Banner from '../components/banner/banner';
import Button from '../components/button/button';
import FAQ from '../components/accordion/accordion-faq';
import Grid from '@material-ui/core/Grid';
import PageBlock from '../components/page-block/page-block';
import PropTypes from 'prop-types';
import SectionTitle from '../components/section-title/section-title';
import indexStyles from './index.styles';
import { withStyles } from '@material-ui/core/styles';

const url = (PT, OT, promoId) => {
    const product = getProductType(PT);
    const offer = getOfferType(OT);

    const promoParam = promoId ? `&promo=${promoId}` : '';

    return `/builder?productType=${encodeURIComponent(product.key)}&offerType=${
        offer.key
    }${promoParam}`;
};

class App extends React.Component {
    static headerShowCountry = true;

    static url(PT, OT, promoId) {
        const product = getProductType(PT);
        const offer = getOfferType(OT);

        const promoParam = promoId ? `&promo=${promoId}` : '';

        return `/builder?productType=${encodeURIComponent(
            product.key
        )}&offerType=${offer.key}${promoParam}`;
    }

    constructor(props) {
        super(props);
        this.state = {
            scrollFunc: () => {},
        };
    }

    componentDidMount() {
        // no window obj while rendering, so...
        this.setState({
            scrollFunc: () => {
                if (window) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }
            },
        });
    }

    renderAccordionItem(PT, forceOpen = false, featured = false) {
        const { classes, promoId } = this.props;
        const product = getProductType(PT);

        const accProps = {
            header: (
                <React.Fragment>
                    {!featured && (
                        <React.Fragment>
                            <SectionTitle
                                
                                className={`${classes.pt2}`}
                            />
                            <p className={classes.m0}></p>
                        </React.Fragment>
                    )}
                    {featured && (
                        <React.Fragment>
                            <p
                                className={`${classes.m0} ${
                                    classes.redInfoTitle
                                }`}
                            >
                                This is a test
                            </p>
                            <h2 className={`${classes.title1m0}`}></h2>
                        </React.Fragment>
                    )}
                </React.Fragment>
            ),
            content: (
                <React.Fragment>
                    <ul
                        className={
                            featured
                                ? classes.productFeatures_Feat
                                : classes.productFeatures
                        }
                    >
                        
                        ))}
                    </ul>
                    <div className={`${classes.textCenter}`}>
                        <Button
                            full
                            dataSelector=""
                            route={url(PT, offerTypes.REGULAR, promoId)}
                        >
                            Click me to go to next page
                        </Button>
                    </div>
                </React.Fragment>
            ),
        };

        return <AccordionItem {...accProps} forceOpen={forceOpen} />;
    }

    render() {
        const { classes } = this.props;
        const { scrollFunc } = this.state;
        const blockStyles = { padding: '2.8rem 0' };

        return (
            <Fragment>
                <Banner
                    title="PROD BUILD BUG ONLY"
                    subtitle="i.e npm run build && npm start"
                />

                {/* Three feat blocks */}
                <Grid
                    container
                    className={`${classes.featBlocksOuterContainer} ${
                        classes.featBlocksContainer
                    }`}
                >
                    <Grid
                        item
                        xs={12}
                        lg={5}
                        data-selector="regular_print&digital"
                        className={classes.productBlocks__featured}
                    >
                        <Grid item xs={12}>
                            <h4
                                className={
                                    classes.productBlocks__featured__head
                                }
                            >
                                Some box
                            </h4>
                        </Grid>
                        <Grid
                            container
                            alignItems="center"
                            className={`${classes.bgWhite}`}
                        >
                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={12}
                                className={
                                    classes.productBlocks__featured__image
                                }
                            >
                                <img
                                    src="/static/placeholder.svg"
                                    alt="placeholder"
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={12}
                                className={`${classes.content} ${
                                    classes.bgWhite
                                } ${classes.productBlocks__featured__content}`}
                            >
                                {this.renderAccordionItem(
                                    productTypes.BOTH,
                                    true,
                                    true
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Featured expandable 1 */}
                    <Grid
                        item
                        className={`${classes.productBlocks__nonFeatured1} ${
                            classes.pb1
                        } ${classes.productBlocks__expandable}`}
                    >
                        <Grid container className={classes.plr1}>
                            {this.renderAccordionItem(
                                productTypes.DIGITAL,
                                true
                            )}
                        </Grid>
                    </Grid>
                    {/* Featured expandable 2 */}
                    <Grid
                        item
                        className={`${classes.productBlocks__nonFeatured2} ${
                            classes.pb1
                        } ${classes.productBlocks__expandable}`}
                    >
                        <Grid container className={classes.plr1}>
                            {this.renderAccordionItem(productTypes.PRINT, true)}
                        </Grid>
                    </Grid>
                </Grid>

                {/* FAQs */}
                <PageBlock narrow pad color="berlin">
                    <Grid container alignContent="center">
                        <Grid item xs={12}>
                            <FAQ items={faqSplash} />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            className={`${classes.textCenter} ${classes.pt2}`}
                        >
                            <Button full onClick={scrollFunc}>
                                Take me back to the top
                            </Button>
                        </Grid>
                    </Grid>
                </PageBlock>
            </Fragment>
        );
    }
}

App.propTypes = {
    promoId: PropTypes.string,
    classes: PropTypes.shape({}).isRequired,
};

App.defaultProps = {
    promoId: null,
};

export default withStyles(indexStyles)(App);
