const pageBlockStyles = (theme) => ({
    pageBlock: {
        position: 'relative',
        display: 'block',
        width: '100%',
    },
    pageBlockInner: {
        margin: '0 auto',
        maxWidth: 1440,
    },
    narrow: {
        '& $pageBlockInner': {
            maxWidth: 920,
        },
    },
    boxed: {
        '& $pageBlockInner': {
            // ...theme.pallete.primary.shadows.top1,
            boxShadow: `0 0 0 1px ${theme.pallete.primary.colors.london}`,
            background: '#ffffff',
            marginBottom: '3rem',
        },
    },
    pad: {
        padding: '2rem',
        [theme.breakpoints.up('md')]: {
            padding: '2rem 3rem',
        },
    },
    default: {
        backgroundColor: theme.pallete.primary.colors.berlin,
    },
    thimphu: {
        backgroundColor: theme.pallete.primary.colors.thimphu,
    },
    berlin: {
        backgroundColor: theme.pallete.primary.colors.berlin,
    },
    beijing: {
        backgroundColor: theme.pallete.primary.colors.beijing,
    },
});

export default pageBlockStyles;
