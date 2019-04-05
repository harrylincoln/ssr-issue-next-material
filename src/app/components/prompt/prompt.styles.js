const promptStyles = (theme) => ({
    prompt: {
        textAlign: 'center',
        position: 'relative',
        display: 'block',
        margin: '3rem 2rem',
        padding: '0 0 3rem 0',
        [theme.breakpoints.up('md')]: {
            margin: '3rem',
            padding: 0,
        },
    },
    promptTitle: {
        fontSize: '1.8rem',
        fontWeight: '700',
        fontFamily: 'MiloTE',
        lineHeight: '2.8rem',

        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
            lineHeight: '3rem',
        },
    },
    promptImage: {
        display: 'block',
        margin: '3rem auto',
        maxWidth: '240px',
        [theme.breakpoints.up('md')]: {
            margin: 0,
            position: 'absolute',
            left: 0,
            top: '2rem',
        },
    },
    promptCopy: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            minHeight: '260px',
            padding: '4rem 0 0 300px',
            textAlign: 'left',
            maxWidth: 700,
            margin: '0 auto',
        },
    },
    promptList: {
        ...theme.pallete.primary.generalSelectorClasses.featureList,
        padding: '0 0 3rem',
        fontSize: '1.4rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.6rem',
        },
    },
});

export default promptStyles;
