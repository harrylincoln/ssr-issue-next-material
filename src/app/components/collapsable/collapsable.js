import Button from '../button/button';
import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import styles from './collapsable.styles';
import { withStyles } from '@material-ui/core/styles';

export class SimpleCollapsable extends React.Component {
    static propTypes = {
        classes: PropTypes.shape({}),
        button: PropTypes.string,
        title: PropTypes.string.isRequired,
        activeContent: PropTypes.node.isRequired,
        completeContent: PropTypes.node.isRequired,
        isActive: PropTypes.bool.isRequired,
        isComplete: PropTypes.bool.isRequired,
        handleSubmit: PropTypes.func,
        handleEdit: PropTypes.func,
    };

    static defaultProps = {
        classes: {},
        button: 'Next',
        handleSubmit: null,
        handleEdit: null,
    };

    static allowedVisibleStates = ['closed', 'active', 'complete'];

    constructor(props) {
        super(props);
        this.el = React.createRef();
    }

    render() {
        const {
            classes,
            isActive,
            isComplete,
            activeContent,
            completeContent,
            title,
            button,
            handleEdit,
            handleSubmit,
        } = this.props;

        const classMap = cx({
            [classes.collapsable]: true,
            isActive,
            isClosed: !isActive && !isComplete,
            isComplete: !isActive && isComplete,
        });

        return (
            <section className={classMap} ref={this.el}>
                <header className={classes.header}>
                    <h3>{title}</h3>
                    {handleEdit && (
                        <button
                            type="button"
                            className={classes.editButton}
                            onClick={(e) => handleEdit(e)}
                        >
                            <Icon name="edit" size={16} />
                            Edit{' '}
                            <span className={classes.hideText}>{title}</span>
                        </button>
                    )}
                </header>
                <div className={classes.activeContent}>{activeContent}</div>
                <div className={classes.completeContent}>{completeContent}</div>
            </section>
        );
    }
}

export default withStyles(styles)(SimpleCollapsable);
