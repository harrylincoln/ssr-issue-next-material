const offers = {
    REGULAR: {
        label: 'Regular',
        key: 'Regular',
    },
    GIFT: {
        label: 'Gift',
        key: 'Gift',
    },
    STUDENT: {
        label: 'Student',
        key: 'Student',
    },
};

export const offerTypes = {
    REGULAR: 'REGULAR',
    GIFT: 'GIFT',
    STUDENT: 'STUDENT',
};

export const getOfferTypeByKey = (key) => {
    let offer;
    Object.keys(offers).forEach((i) => {
        if (offers[i].key === key) {
            offer = offers[i];
        }
    });
    return offer;
};

export const getOfferType = (key) => {
    const offerKey = Object.keys(offers).find((offer) => offer === key);
    return offers[offerKey];
};
