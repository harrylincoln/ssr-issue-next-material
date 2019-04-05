import c from 'color';

const tabStyles = (theme) => ({
    tabContainer: {
        position: 'relative',
        padding: '1rem 1rem 0',
    },
    tab: {
        position: 'relative',
        display: 'block',
        boxSizing: 'border-box',
        width: '100%',
        padding: '0',
        height: '5rem',
        lineHeight: '5rem',
        fontWeight: 'bold',
        // To remove 4px added by grid
        marginBottom: '-4px',
        fontSize: '1.4rem',
        fontFamily: 'MiloTE',
        cursor: 'pointer',
        // color: theme.pallete.primary.colors.beijing,
        borderColor: 'transparent',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.4)',
        background: c(theme.pallete.primary.colors.chicago)
            .lighten(0.2)
            .hex(),
        // background: theme.pallete.primary.colors.chicago,
        color: '#fff',

        [theme.breakpoints.up('md')]: {
            fontSize: '1.6rem',
        },

        '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme.pallete.primary.colors.miami}`,
        },
        '&:hover': {
            background: c(theme.pallete.primary.colors.chicago)
                .lighten(0.4)
                .hex(),
            color: '#fff',
        },
    },
    isSelected: {
        color: theme.pallete.primary.colors.beijing,
        fill: theme.pallete.primary.colors.chicago,
        background: 'white',
        fontWeight: 'normal',
        '&:hover': {
            color: theme.pallete.primary.colors.chicago,
            background: 'white',
        },
    },
});

export default tabStyles;
