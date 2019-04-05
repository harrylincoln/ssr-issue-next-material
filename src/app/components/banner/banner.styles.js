const bannerStyles = (theme) => ({
    banner: {
        width: '100%',
        backgroundColor: theme.pallete.primary.colors.chicago,
        color: 'white',
        textAlign: 'center',
        minHeight: '30rem',
        padding: '3.2rem 2rem 20rem',
        fontWeight: 700,

        '& h2': {
            fontFamily: 'MiloTE',
            fontSize: '2rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '2.8rem',
            },
            lineHeight: '2.4rem',
            margin: '0 0 1.2rem',
        },
        '& h3': {
            fontSize: '1.4rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '1.8rem',
            },
            lineHeight: '2.4rem',
            fontWeight: 400,
            margin: 0,
        },
    },
});

export default bannerStyles;
