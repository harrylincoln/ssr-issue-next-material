import c from 'color';

const radioButtonStyles = (theme) => ({
    btnRadio: {
        position: 'relative',
        display: 'block',
        boxSizing: 'border-box',
        width: '100%',
        padding: '1rem 15px',
        marginBottom: '.75rem',
        cursor: 'pointer',
        color: theme.pallete.primary.colors.kiev,
        border: '1px solid rgba(62,81,181,0)',
        background: c(theme.pallete.primary.colors.chicago)
            .lighten(0.4)
            .hex(),
        '&:focus': {
            outline: 'none',
        },
        '&:hover': {
            background: c(theme.pallete.primary.colors.chicago)
                .lighten(0.3)
                .hex(),
        },
    },
    btnRadio_selected: {
        color: theme.pallete.primary.colors.chicago,
        fill: theme.pallete.primary.colors.chicago,
        background: 'white',
        '&:hover': {
            background: 'white',
        },
    },
});

export default radioButtonStyles;
