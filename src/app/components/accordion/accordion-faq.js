import Accordion from './accordion';
import PropTypes from 'prop-types';
import React from 'react';
import SectionTitle from '../section-title/section-title';
import styles from './accordion.styles';
import { withStyles } from '@material-ui/core/styles';

export const SimpleFAQ = (props) => {
    const { classes, title, items, ...rest } = props;

    const mappedItems = items.map((item) => ({
        header: <h2 className={classes.faqHeader}>{item.title}</h2>,
        content: <p className={classes.faqContent}>{item.content}</p>,
    }));

    return (
        <section className={classes.faq}>
            <SectionTitle
                level="3"
                title={title}
                className={classes.faqTitle}
            />
            <Accordion items={mappedItems} {...rest} />
        </section>
    );
};

SimpleFAQ.propTypes = {
    classes: PropTypes.shape({}),
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    title: PropTypes.string,
};

SimpleFAQ.defaultProps = {
    classes: {},
    title: 'Frequently asked questions',
};

export default withStyles(styles)(SimpleFAQ);
