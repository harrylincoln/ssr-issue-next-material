import c from 'color';

const buttonStyles = (theme) => {
    const {
        chicago,
        miami,
        athens,
        berlin,
        beijing,
        red,
        thimphu,
        kiev,
        london,
        honolulu,
        moscow,
    } = theme.pallete.primary.colors;

    const baseBtn = {
        backgroundColor: chicago,
        color: thimphu,
        display: 'inline-block',
        padding: '1rem 3.2rem',
        borderRadius: '.4rem',
        borderWidth: '1px',
        borderStyle: 'solid',
        userSelect: 'none',
        fontSize: '1.6rem',
        fontWeight: 500,
        lineHeight: '2rem',
        cursor: 'pointer',
    };
    return {
        button: {
            ...baseBtn,
            '&:hover': {
                background: athens,
            },
            '&:focus': {
                outline: 'none',
                borderRadius: '4px',
                boxShadow: `0 0 0 2px ${miami}`,
                backgroundColor: chicago,
            },
            '&:disabled': {
                background: berlin,
                color: beijing,
                cursor: 'auto',
            },
            '& svg': {
                display: 'inline-block',
                verticalAlign: 'text-bottom',
                margin: '0 0.8rem 0 0',
            },
        },
        small: {
            padding: '.4rem 1.8rem',
        },
        secondary: {
            background: c(london)
                .lighten(0.2)
                .hex(),
            color: chicago,
            padding: '0.5rem 1rem',
            borderColor: moscow,
            '&:hover': {
                color: 'white',
                backgroundColor: chicago,
            },
        },
        tertiary: {
            color: chicago,
            background: `rgba(${c(chicago).rgb().color}, .05)`,
            borderColor: `rgba(${c(chicago).rgb().color}, .25)`,
            '&:hover': {
                color: 'white',
                background: `rgba(${c(chicago).rgb().color}, .75)`,
            },
            '&:focus': {
                color: 'white',
                background: `rgba(${c(chicago).rgb().color}, .75)`,
            },
        },
        light: {
            color: thimphu,
            background: `rgba(${c(thimphu).rgb().color}, .05)`,
            borderColor: `rgba(${c(thimphu).rgb().color}, .25)`,
            '&:hover': {
                color: 'inherit',
                background: `rgba(${c(thimphu).rgb().color}, .75)`,
            },
        },
        edit: {
            backgroundColor: 'white',
            color: chicago,
            padding: '0.5rem 1rem',
            '&:before': {
                display: 'inline-block',
                content: "''",
                backgroundImage: "url('/static/edit.svg')",
                backgroundSize: '26px 13px',
                height: '13px',
                width: '25px',
            },
            '&:hover': {
                color: 'white',
                '&:before': {
                    backgroundImage: "url('/static/edit-white.svg')",
                },
            },
        },
        full: {
            paddingLeft: '1rem',
            paddingRight: '1rem',
            textAlign: 'center',
            width: '100%',
            maxWidth: '500px',
        },
        selected: {
            ...baseBtn,
            backgroundColor: red,
            '&:hover': {
                backgroundColor: red,
            },
            '&:focus': {
                outline: 'none',
                borderRadius: '4px',
                boxShadow: `0 0 0 2px ${miami}`,
                backgroundColor: red,
            },
        },
        full_width_bg: {
            margin: '-12px 0',
            padding: '12px',
            background: red,
        },
        dark: {
            borderColor: kiev,
            color: thimphu,
            backgroundColor: kiev,
            '&:hover': {
                backgroundColor: beijing,
            },
            '&:focus': {
                backgroundColor: beijing,
                borderColor: honolulu,
            },
            '&:active': {
                backgroundColor: beijing,
                borderColor: honolulu,
            },
        },
    };
};

export default buttonStyles;
