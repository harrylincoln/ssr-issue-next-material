import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import pageBlockStyles from './page-block.styles';
import { withStyles } from '@material-ui/core/styles';

const PageBlock = (props) => {
    const { classes, children, color, narrow, boxed, pad } = props;

    const classMap = cx({
        [classes.pageBlock]: true,
        [classes[color]]: true,
        [classes.narrow]: narrow,
        [classes.boxed]: boxed,
        [classes.pad]: pad,
    });

    return (
        <section className={classMap}>
            <div className={classes.pageBlockInner}>{children}</div>
        </section>
    );
};

PageBlock.propTypes = {
    classes: PropTypes.shape({}),
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    narrow: PropTypes.bool,
    boxed: PropTypes.bool,
    pad: PropTypes.bool,
};

PageBlock.defaultProps = {
    classes: {},
    color: 'default',
    narrow: false,
    boxed: false,
    pad: false,
};

export default withStyles(pageBlockStyles)(PageBlock);
