import countries from '../consts/countries';
import { actionTypes as countryActions } from '../actions/country-actions';

export const initialState = { countries };

const reducer = (state = initialState, action) => {
    let currentCountry = null;
    switch (action.type) {
        case countryActions.SELECT_COUNTRY:
            state.countries = state.countries.map((country) => {
                if (country.iso3 === action.payload.country) {
                    currentCountry = {
                        ...country,
                        selected: true,
                    };
                    return currentCountry;
                }
                return {
                    ...country,
                    selected: false,
                };
            });
            return {
                countries: state.countries,
                currentCountry,
            };
        default:
            return state;
    }
};

export default reducer;
