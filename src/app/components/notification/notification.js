import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import styles from './notification.styles';
import { withStyles } from '@material-ui/core/styles';

const Notification = (props) => {
    const { classes, icon, children } = props;

    const classMap = cx({
        [classes.notification]: true,
        [classes.showIcon]: !!icon,
    });

    return (
        <div className={classMap}>
            {icon && <Icon name={icon} size={30} className={classes.icon} />}
            {children}
        </div>
    );
};

Notification.propTypes = {
    classes: PropTypes.shape({}),
    icon: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Notification.defaultProps = {
    classes: {},
    icon: null,
};

export default withStyles(styles)(Notification);
