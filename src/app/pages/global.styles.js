const globalStyles = (theme) => ({
    ...theme.pallete.primary.global,
    ...theme.pallete.primary.atomics,
    ...theme.pallete.primary.sticky,
    ...theme.pallete.primary.generalSelectorClasses,
    root: {
        flexGrow: 1,
    },
    nestedFaq: {
        padding: '1px 2rem 2rem',
        background: theme.pallete.primary.colors.berlin,
        [theme.breakpoints.up('md')]: {
            padding: '1px 3rem 3rem',
        },
    },
});

export default globalStyles;
