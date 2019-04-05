const moneyBackStyles = (theme) => ({
    moneyBack: {
        position: 'relative',
        background: theme.pallete.primary.colors.berlin,
        color: theme.pallete.primary.colors.kiev,
        fontFamily: 'MiloTE',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            padding: '2rem 0 1rem 6rem',
        },

        '& h3, & p': {
            fontSize: '1.6rem',
            lineHeight: '2.4rem',
            fontFamily: 'MiloTE',
            margin: 0,
            [theme.breakpoints.up('md')]: {
                fontSize: '1.8rem',
            },
        },
    },
    moneyBackIcon: {
        position: 'relative',
        display: 'block',
        margin: '1rem',
        [theme.breakpoints.up('md')]: {
            margin: 0,
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
        },
    },
});

export default moneyBackStyles;
