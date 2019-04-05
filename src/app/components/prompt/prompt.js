import Button from '../button/button';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './prompt.styles';
import { withStyles } from '@material-ui/core/styles';

export const SimplePrompt = (props) => {
    const { classes, onClick } = props;

    return (
        <section className={classes.prompt}>
            <h2 className={classes.promptTitle}>
                You’re seconds away from unlimited access to world-leading
                reporting & analysis
            </h2>
            <div className={classes.promptCopy}>
                <img
                    src="/static/regwall-illustration.svg"
                    className={classes.promptImage}
                    alt=""
                />
                <ul className={classes.promptList}>
                    <li>Subscribers only daily breifing newsletter & app</li>
                    <li>
                        The full weekly edition, in print, digital and audio
                    </li>
                </ul>
                <Button tertiary onClick={onClick}>
                    See pricing options
                </Button>
            </div>
        </section>
    );
};

SimplePrompt.propTypes = {
    classes: PropTypes.shape({}),
    onClick: PropTypes.func.isRequired,
};

SimplePrompt.defaultProps = {
    classes: {},
};

export default withStyles(styles)(SimplePrompt);
