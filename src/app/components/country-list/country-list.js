import Icon from '../icon/icon';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { selectCountry } from '../../actions/country-actions';
import styles from './country-list.scss';

class CountryList extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        countries: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        currentCountry: PropTypes.shape().isRequired,
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            hasFocus: false,
        };
    }

    updateProducts(country) {
        const { dispatch } = this.props;
        return dispatch(selectCountry(country));
    }

    handleChange(e) {
        this.updateProducts(e.target.value);
    }

    handleFocus(e, hasFocus) {
        this.setState({ hasFocus });
    }

    render() {
        const { countries, currentCountry } = this.props;
        const { hasFocus } = this.state;

        const classMap = cx({
            [styles.selectCountry]: true,
            [styles.hasFocus]: hasFocus,
        });

        return (
            <div data-selector="country-selector" className={classMap}>
                <span className={styles.title}>Change country/territory:</span>
                <select
                    data-selector="dropdown"
                    onChange={this.handleChange}
                    onFocus={(e) => this.handleFocus(e, true)}
                    onBlur={(e) => this.handleFocus(e, false)}
                    value={currentCountry.iso3}
                    className={styles.select}
                >
                    {countries.map((item) => (
                        <option
                            data-selector={item.iso3}
                            value={item.iso3}
                            key={item.iso3}
                        >
                            {item.name}
                        </option>
                    ))}
                </select>
                <span
                    data-selector="country-label"
                    className={styles.placeholder}
                >
                    {currentCountry.name}
                </span>
                <Icon name="arrowDown" className={styles.icon} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    countries: state.countries.countries,
    currentCountry: state.countries.currentCountry,
});

export default connect(mapStateToProps)(CountryList);
