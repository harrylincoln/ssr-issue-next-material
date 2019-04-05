import Grid from '@material-ui/core/Grid';
import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import dropStyles from './dropdown.styles';
import { withStyles } from '@material-ui/core/styles';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drops: [],
        };
        this.toggleSelected = this.toggleSelected.bind(this);
    }

    toggleSelected(idx) {
        let temp = {};
        const { drops } = this.state;
        if (typeof drops[idx] === 'undefined') {
            temp.active = true;
        } else {
            temp = drops[idx];
            temp.active = !temp.active;
        }

        this.setState({
            drops: {
                ...drops,
                [idx]: temp,
            },
        });
    }

    render() {
        const { dropdownData, classes } = this.props;
        const { drops } = this.state;
        return (
            <Grid container className={classes.root}>
                {dropdownData.map((drop, idx) => {
                    const show =
                        typeof drops[idx] !== 'undefined' &&
                        drops[idx].active === true;

                    return (
                        <Grid
                            container
                            className={classes.content}
                            key={drop.title}
                        >
                            <Grid container>
                                <Grid item xs={11}>
                                    <h3 className={classes.m0}>{drop.title}</h3>
                                </Grid>
                                <Grid item xs={1}>
                                    <button
                                        type="button"
                                        className={`${classes.noButtonStyle} ${
                                            classes.vertAlign
                                        }`}
                                        onClick={() => this.toggleSelected(idx)}
                                        aria-label={`${
                                            show ? 'Close' : 'Open'
                                        } ${drop.title} dropdown`}
                                    >
                                        <Icon
                                            style={{
                                                transform: `rotate(${
                                                    show ? '180' : '0'
                                                }deg)`,
                                                transformOrigin: '12px 12px',
                                            }}
                                            name="arrowDown"
                                            size={32}
                                        />
                                    </button>
                                </Grid>
                                <Grid item xs={12}>
                                    {show ? (
                                        <Grid container>
                                            <Grid item xs={10}>
                                                <p
                                                    className={`dropcontent ${
                                                        classes.pl1
                                                    }`}
                                                >
                                                    {drop.content}
                                                </p>
                                            </Grid>
                                        </Grid>
                                    ) : null}
                                </Grid>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

Dropdown.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    dropdownData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default withStyles(dropStyles)(Dropdown);
