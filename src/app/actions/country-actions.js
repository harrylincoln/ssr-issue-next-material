

export const actionTypes = {
    SELECT_COUNTRY: 'SELECT_COUNTRY',
};

export const selectCountry = (country) => (dispatch) => {
    // If user updates country update the cookie


    dispatch({
        type: actionTypes.SELECT_COUNTRY,
        payload: { country },
    });
};
