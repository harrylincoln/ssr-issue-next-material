import getConfig from 'next/config';

const reducer = () => {
    const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
    return {
        ...serverRuntimeConfig,
        ...publicRuntimeConfig,
    };
};

export default reducer;
