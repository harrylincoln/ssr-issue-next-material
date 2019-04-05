const products = {
    DIGITAL: {
        label: 'Digital Only',
        key: 'Digital Only',
    },
    PRINT: {
        label: 'Print Only',
        key: 'Print Only',
    },
    BOTH: {
        label: 'Print + Digital',
        key: 'Print + Digital',
    },
};

export const productTypes = {
    DIGITAL: 'DIGITAL',
    PRINT: 'PRINT',
    BOTH: 'BOTH',
};

export const getProductTypeByKey = (key) => {
    let product;
    Object.keys(products).forEach((i) => {
        if (products[i].key === key) {
            product = products[i];
        }
    });
    return product;
};

export const getProductType = (key) => {
    const productKey = Object.keys(products).find((product) => product === key);
    return products[productKey];
};
