import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import styles from './accordion.styles';
import { withStyles } from '@material-ui/core/styles';

export class SimpleAccordionItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        // If no toggle prop is setup, use internal state logic instead
        this.state = {
            show: props.isOpen,
        };
    }

    handleClick(e) {
        const { toggle } = this.props;
        e.preventDefault();

        if (toggle) {
            toggle();
        } else {
            const { show } = this.state;
            this.setState({
                show: !show,
            });
        }
    }

    render() {
        const {
            classes,
            header,
            content,
            icon,
            iconName,
            isOpen,
            toggle,
            forceOpen,
            ...rest
        } = this.props;

        const { show } = this.state;
        let iconEl = <Icon name="arrowDown" size={32} />;

        if (iconName) {
            iconEl = <Icon name={iconName} size={32} />;
        } else if (icon) {
            iconEl = icon;
        } else {
            iconEl = <Icon name="arrowDown" size={32} />;
        }

        const classMap = cx({
            [classes.accordion]: true,
            [classes.isOpen]: forceOpen || (toggle ? isOpen : show),
        });

        return (
            <article {...rest} className={classMap}>
                <header
                    className={classes.accordionHeader}
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                    onClick={forceOpen ? null : this.handleClick}
                    onKeyDown={(e) => {
                        if (e.keycode === 13 && !forceOpen) this.handleClick(e);
                    }}
                >
                    {header}
                    {!forceOpen && (
                        <span className={classes.icon}>{iconEl}</span>
                    )}
                </header>
                <div className={classes.accordionContent}>{content}</div>
            </article>
        );
    }
}

SimpleAccordionItem.propTypes = {
    classes: PropTypes.shape({}),
    isOpen: PropTypes.bool,
    header: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    icon: PropTypes.node,
    iconName: PropTypes.node,
    toggle: PropTypes.func,
    forceOpen: PropTypes.bool,
};

SimpleAccordionItem.defaultProps = {
    forceOpen: false,
    classes: {},
    isOpen: false,
    icon: null,
    iconName: null,
    toggle: null,
};

export default withStyles(styles)(SimpleAccordionItem);
