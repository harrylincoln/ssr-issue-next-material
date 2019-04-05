import React, { Fragment } from 'react';

import Banner from '../components/banner/banner';
import FAQ from '../components/accordion/accordion-faq';
import PageBlock from '../components/page-block/page-block';
import Prompt from '../components/prompt/prompt';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faqBuilder } from '../consts/content';
import globalStyles from './global.styles';
import { withStyles } from '@material-ui/core/styles';

class Builder extends React.Component {

    constructor(props) {
        super(props);
        this.offerTopRef = React.createRef();
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() {
        const offset = this.offerTopRef.current.getBoundingClientRect();

        window.scrollTo({
            top: window.scrollY + offset.top,
            left: 0,
            behavior: 'smooth',
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <Banner
                    title="Now navigate back with browser back button"
                    subtitle="and FAQ classes are jss generated"
                />
                <PageBlock narrow boxed>
                    <div className={classes.refMarker} ref={this.offerTopRef} />
                    <div className={classes.nestedFaq}>
                        <FAQ items={faqBuilder} />
                    </div>
                    <Prompt onClick={this.scrollToTop} />
                </PageBlock>
            </Fragment>
        );
    }
}

Builder.propTypes = {
    classes: PropTypes.shape({}),
};

Builder.defaultProps = {
    classes: {},
};

const mapStateToProps = (state) => ({
    country: state.countries.currentCountry,
});

export default connect(mapStateToProps)(withStyles(globalStyles)(Builder));
