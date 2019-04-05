const priceBoxStyles = (theme) => {
    const { colors } = theme.pallete.primary;

    return {
        ...theme.pallete.primary.atomics,
        priceBox: {
            position: 'relative',
            width: '100%',
            boxSizing: 'border-box',
            textAlign: 'left',
            padding: '3rem 6rem 3rem 3rem',
            margin: 0,
            background: colors.thimphu,
            color: colors.beijing,
            fill: colors.beijing,
            border: `1px solid #eee`,
            '&:hover': {
                border: `1px solid ${colors.honolulu}`,
                fill: colors.honolulu,
            },
            '&:focus': {
                outline: 'none',
            },
            '& svg': {
                display: 'inline-block',
                verticalAlign: 'top',
                height: '100%',
                margin: '0 5px 0 0',
                cursor: 'pointer',
            },
        },
        priceBox_selected: {
            fill: colors.honolulu,
            background: '#E7FFFC',
            border: `1px solid ${colors.honolulu}`,
        },
        btnTitle: {
            ...theme.pallete.primary.typography.title4,
            display: 'block',
            margin: '0 0 .8rem 0',
        },
        btnDesc: {
            display: 'block',
            '& p': {
                fontSize: '1.4rem',
                margin: 0,
                lineHeight: '1.6rem',
            },
        },
        btnIcon: {
            position: 'absolute',
            right: '3rem',
            top: '50%',
            transform: 'translateY(-50%)',
        },
    };
};

export default priceBoxStyles;
