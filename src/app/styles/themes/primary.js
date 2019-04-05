import colors from '../variables/colors';

const $quoteSym = '"';

const shadows = {
    top1: {
        boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
    },
    top2: {
        boxShadow: '0px 5px 5px -2px rgba(0,0,0,0.33)',
    },
    bottom1: {
        boxShadow: '0 -1px 3px rgba(0,0,0,0.5)',
    },
};

const typography = {
    // Page title
    title1: {
        fontFamily: 'MiloTE',
        fontSize: '23px',
        lineHeight: '36px',
        margin: '0 0 2.4rem 0',
    },
    title1m0: {
        fontFamily: 'MiloTE',
        fontSize: '23px',
        lineHeight: '36px',
        margin: '0',
    },
    // Section title
    title2: {
        fontFamily: 'EconSansOS',
        fontWeight: 500,
        fontSize: '1.8rem',
        margin: 0,
    },
    // Form title
    title3: {
        fontFamily: 'EconSansOS',
        fontWeight: '800',
        fontSize: '1.8rem',
        margin: 0,
    },
    // PriceBox + builder checkout
    title4: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: '2.4rem',
        fontFamily: 'MiloTE',
    },
    // Basket red title
    title5: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '0',
    },
    desc1: {
        fontSize: '2rem',
        lineHeight: '2.4rem',
        fontFamily: 'MiloTE',
        fontWeight: 400,
    },
    desc2: {
        fontSize: '1.6rem',
        lineHeight: '2rem',
        fontFamily: 'MiloTE',
        fontWeight: 400,
    },
    desc3: {
        fontSize: '23px',
        lineHeight: '29px',
        fontFamily: 'MiloTE',
        fontWeight: 500,
    },
    redInfoTitle: {
        fontSize: '14px',
        fontWeight: 600,
    },
};

const globalStyles = {
    '@global': {
        html: {
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            fontSize: '62.5%',
        },
        body: {
            margin: 0,
            color: colors.beijing,
            backgroundColor: 'white',
            fontFamily: 'EconSansOS',
        },
        '*': {
            boxSizing: 'border-box',
        },
        fieldset: {
            border: '0px none',
            padding: '0',
            margin: 0,
        },
        'h1, h2, h3, h4, h5, h6': {
            padding: '0',
        },
        // sans-serif
        'h1, h2, h3, p': {
            fontFamily: 'EconSansOS',
        },
        h1: {
            fontWeight: 500,
            margin: 0,
        },
        h2: {
            fontWeight: 500,
            margin: 0,
        },
        p: {
            fontWeight: 300,
            fontSize: '1.4rem',
            margin: '1.2rem 0',
            lineHeight: '2rem',
        },
        ul: {
            listStyle: 'none',
            margin: 0,
            padding: '1rem 0',
        },
        a: {
            textDecoration: 'none',
        },
        code: {
            position: 'relative',
            display: 'block',
            fontSize: '1.4rem',
            padding: '1rem',
            background: '#eee',
            margin: '1rem 0',
            borderRadius: '5px',
            boxShadow: 'inset 1px 1px 4px rgba(0,0,0,0.1)',
            whiteSpace: 'pre-line',
            lineHeight: '1.4rem',
        },
        root: {
            flexGrow: 1,
        },
    },
};

const atomics = {
    p0: {
        padding: '0',
    },
    pt0: {
        paddingTop: '0',
    },
    pt2: {
        paddingTop: '2rem',
    },
    pb0: {
        paddingBottom: '0',
    },
    pb1: {
        paddingBottom: '1rem',
    },
    pl1: {
        paddingLeft: '1rem',
    },
    pl2: {
        paddingLeft: '2rem',
    },
    pl3: {
        paddingLeft: '3rem',
    },
    plr1: {
        padding: '0 1rem',
    },
    pa3: {
        padding: '3rem',
    },
    m0: {
        margin: '0',
    },
    mt0: {
        marginTop: '0',
    },
    mt1: {
        marginTop: '1rem',
    },
    mt2: {
        marginTop: '2rem',
    },
    mb0: {
        marginBottom: '0',
    },
    mlr1: {
        margin: '0 1rem',
    },
    bgBerlin: {
        backgroundColor: colors.berlin,
    },
    bgWhite: {
        backgroundColor: 'white',
    },
    textCenter: {
        textAlign: 'center',
    },
    w100: {
        width: '100%',
    },
};

const accessible = {
    hideText: {
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
    },
    hideWithFocus: {
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',

        '&:focus': {
            position: 'static',
            width: 'auto',
            height: 'auto',
        },
    },
};

const generalSelectorClasses = {
    // Used for empty DOM elements used as markers for react ref
    refMarker: {
        position: 'relative',
        display: 'block',
    },
    fixedInner: {
        position: 'relative',
        display: 'block',
        maxWidth: '920px',
        margin: '0 auto',
    },
    bannerNextPullUp: {
        marginTop: '-15rem',
    },
    noButtonStyle: {
        background: 'none',
        color: 'inherit',
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit',
    },
    content: {
        padding: '1rem',
    },
    vertAlign: {
        verticalAlign: 'middle',
        height: '100%',
        maxWidth: '50px',
    },
    checks: {
        '&:before': {
            display: 'inline-block',
            content: '""',
            backgroundImage: 'url("/static/check.svg")',
            backgroundSize: '26px 13px',
            height: '13px',
            width: '25px',
            marginRight: '4px',
        },
    },
    quote: {
        color: 'white',
        position: 'relative',
        padding: '3rem',
        fontSize: '23px',
        lineHeight: '28px',
        '&:before': {
            lineHeight: '28px',
            display: 'inline-block',
            content: `'${$quoteSym}'`,
            height: '23px',
            width: '25px',
            fontFamily: 'MiloTE',
            position: 'absolute',
            left: '-1rem',
            top: '2rem',
            fontSize: '74px',
            fontWeight: 'bold',
            color: 'red',
        },
    },
    redHairline: {
        position: 'relative',
        paddingTop: '1rem',
        display: 'block',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '5px',
            width: '40px',
        },
    },
    editButton: {
        border: '1px solid #ccc',
        padding: '0 1.6rem',
        borderRadius: '2rem',
        background: 'transparent',
        lineHeight: '3.2rem',
        height: '3.2rem',
        fontSize: '1.4rem',
        fontFamily: 'EconSansOS',

        '& .icon': {
            margin: '0 .5rem 0 0',
            verticalAlign: 'middle',
            fill: colors.chicago,
        },
    },
};

const forms = {
    formField: {
        position: 'relative',
        display: 'block',
        padding: '0 0 2rem 0',
    },
    formLabel: {
        display: 'block',
        fontSize: '1.6rem',
        lineHeight: '2.4rem',
        margin: '0 0 0.8rem',
    },
    formElement: {
        position: 'relative',
        display: 'block',
        boxSizing: 'border-box',
        width: '100%',
        outline: 'none',
        padding: '1rem 1.6rem',
        borderRadius: '4px',
        border: `solid 1px ${colors.moscow}`,
        backgroundColor: colors.thimphu,
        fontSize: '1.6rem',

        '&:placeholder': {
            color: colors.moscow,
        },

        '&:disabled': {
            background: colors.berlin,
            border: `solid 1px ${colors.berlin}`,
        },

        '&:focus': {
            boxShadow: `inset 0 0 0 2px ${colors.honolulu}`,
            border: `solid 1px ${colors.moscow}`,
        },

        '&[type=checkbox]': {
            appearance: 'none',
            position: 'relative',
            width: '2.4rem',
            height: '2.4rem',
            float: 'left',
            boxSizing: 'border-box',
            padding: 0,
            margin: '0px .8rem 0 0',

            '&:checked': {
                ...generalSelectorClasses.checks,
            },

            '&:before': {
                position: 'absolute',
                top: '.5rem',
                left: '-0.1rem',
            },

            '& + $formLabel': {
                paddingLeft: '3.2rem',
            },
        },
    },
    formElementError: {
        border: `solid 1px ${colors.moscow}`,
    },
    formWarning: {
        display: 'block',
        fontSize: '1.4rem',
        lineHeight: '2.4rem',
        marginTop: '0.8rem',

        '& svg': {
            margin: '0 0.8rem 0 0',
            display: 'inline-block',
            verticalAlign: 'text-top',
        },
    },
    formReuseCheckbox: {
        padding: '0 0 1rem',
        margin: '0 0 2rem',
        borderBottom: '1px solid #D7D7D7',

        '& > div': {
            paddingBottom: 0,
        },

        '& p:first-of-type': {
            fontSize: '1.6rem',
            margin: '0 0 0.8rem',
        },
    },
};

// Composed styles
typography.sectionTitle = {
    ...generalSelectorClasses.redHairline,
    ...typography.title2,
};
typography.sectionSubTitle = {
    fontSize: '1.2rem',
    fontWeight: 400,
    margin: 0,
};

generalSelectorClasses.featureList = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    fontSize: '1.6rem',
    fontFamily: 'EconSansOS',
    lineHeight: '2.4rem',
    fontWeight: 300,

    '& li': {
        ...generalSelectorClasses.checks,
        '& em': {
            color: 'red',
        },
    },
};

const styles = {
    global: globalStyles,
    colors,
    accessible,
    shadows,
    typography,
    atomics,
    generalSelectorClasses,
    forms,
};

export default styles;
