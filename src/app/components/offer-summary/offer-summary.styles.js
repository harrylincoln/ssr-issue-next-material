const offerSummaryStyles = (theme) => ({
    ...theme.pallete.primary.typography,
    ...theme.pallete.primary.atomics,
    ...theme.pallete.primary.generalSelectorClasses,
    os: {
        textAlign: 'left',
        // padding: '3rem 3rem',
        // background: '#fff',
    },
    os__heading: {
        ...theme.pallete.primary.typography.title1,
        marginBottom: 0,
    },
    os__subHeading: {
        ...theme.pallete.primary.typography.title5,
    },
    os__listHeading: {
        ...theme.pallete.primary.typography.title5,
        margin: '0 0 1.6rem',
    },
    os__button: {
        textAlign: 'right',
        margin: 'auto 0 24px 0',
    },
    os__list: {
        ...theme.pallete.primary.generalSelectorClasses.featureList,
    },

    // OfferSummary block
    os_block: {
        position: 'relative',
        padding: '3rem 3rem 0',
        '&:last-of-type': {
            paddingBottom: '3rem',
        },

        [theme.breakpoints.up('md')]: {
            padding: '3rem 3rem 8rem',
        },
    },
    os_divider: {
        '&:before': {
            [theme.breakpoints.up('md')]: {
                background: theme.pallete.primary.colors.cardiff,
                content: '""',
                display: 'block',
                position: 'absolute',
                width: '2px',
                height: '17rem',
                maxHeight: '80%',
                marginBottom: 0,
                left: 0,
                opacity: 1,
            },
        },
    },
});

export default offerSummaryStyles;
