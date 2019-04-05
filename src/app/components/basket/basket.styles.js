const basketStyles = (theme) => ({
    ...theme.pallete.primary.atomics,
    ...theme.pallete.primary.accessible,
    ...theme.pallete.primary.generalSelectorClasses,
    basket: {
        ...theme.pallete.primary.shadows.top1,
        position: 'relative',
        display: 'block',
        overflow: 'visible',
        background: '#fff',
        marginBottom: '2.4rem',
    },
    pinMarker: {
        position: 'relative',
        display: 'block',
    },
    basketSummary: {
        position: 'relative',
        zIndex: 100,
    },
    basketBtn: {
        position: 'absolute',
        right: '3rem',
        top: '3rem',
    },
    basketPrice: {
        ...theme.pallete.primary.shadows.top2,
        position: 'relative',
        display: 'block',
        padding: '2rem 2rem 2rem 14rem',
        background: '#E7FFFC',
        borderTop: '5.5rem solid #5BAEA4',
        minHeight: '12rem',
        zIndex: 90,

        '& header': {
            position: 'absolute',
            top: '-5rem',
            left: 0,
            right: 0,
            margin: '1rem 3rem',

            '& h2': {
                fontFamily: 'MiloTE',
                lineHeight: '3rem',
                color: '#fff',
                fontSize: '2.3rem',
            },

            '& button': {
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
            },
        },

        '& p': {
            margin: 0,
        },
    },

    priceSummary: {
        position: 'relative',
        display: 'block',
        margin: 0,
    },
    priceSummary_price: {
        display: 'inline-block',
        fontSize: '3.8rem',
        lineHeight: '5rem',
        padding: '0 1rem 0 0',
        [theme.breakpoints.up('md')]: {
            fontSize: '7.2rem',
        },
    },
    priceSummary_copy: {
        position: 'relative',
        display: 'inline-block',
        fontSize: '1.2rem',
    },
    priceSummary_duration: {
        display: 'block',
    },
    priceSummary_renew: {
        display: 'block',
        fontWeight: 500,
        color: '#888',
    },
    basketFixed: {
        ...theme.pallete.primary.shadows.top1,
        background: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        opacity: 0,
        transform: 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        padding: '1rem 2rem',

        '& button': {
            position: 'absolute',
            top: 0,
            right: 0,
        },
        [theme.breakpoints.up('md')]: {
            '& header': {
                width: '20vw',
                maxWidth: '200px',
                display: 'inline-block',
            },
            '& p': {
                width: '68vw',
                maxWidth: '550px',
                display: 'inline-block',
            },
            '& button': {
                right: '2rem',
            },
        },

        '&.isFixed': {
            transform: 'translateY(0)',
            opacity: 1,
        },
    },
    basketFixedInner: {
        ...theme.pallete.primary.generalSelectorClasses.fixedInner,
        paddingRight: '7rem',
        [theme.breakpoints.up('md')]: {
            padding: '0 8rem 0 2rem',
        },
    },

    fixedPrice: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'top',
        fontSize: '3.4rem',
        lineHeight: '3rem',
        paddingRight: '1rem',
        fontWeight: 200,
    },
    fixedCopy: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'top',
        fontFamily: 'EconSansOS',
        fontSize: '1.4rem',
        lineHeight: '1.6rem',
        color: theme.pallete.primary.colors.red,

        '& span': {
            display: 'block',
        },
    },
    fixedRenew: {
        fontSize: '1.2rem',
        fontWeight: 200,
        color: theme.pallete.primary.colors.london,
    },
});

export default basketStyles;
