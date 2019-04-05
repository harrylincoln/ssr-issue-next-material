const accordionStyles = (theme) => ({
    accordion: {
        background: '#fff',
        marginBottom: '2px',
        width: '100%',
    },
    accordionHeader: {
        position: 'relative',
        padding: '.8rem 4.8rem .8rem 2rem',
        cursor: 'pointer',
        '&:focus': {
            outline: 0,
        },
    },
    icon: {
        position: 'absolute',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    accordionContent: {
        position: 'relative',
        padding: '.8rem 2rem',
        display: 'none',
    },
    isOpen: {
        '& $accordionContent': {
            display: 'block',
        },
        '& $icon svg': {
            transform: 'rotate(180deg)',
        },
    },

    faq: {},
    faqTitle: {
        margin: '2rem 0rem 2rem',
    },
    faqHeader: {
        margin: 0,
        padding: '.8rem 0',
        fontSize: '1.8rem',
        lineHeight: '2rem',
        fontWeight: 600,
    },
    faqContent: {
        margin: 0,
        padding: '2.4rem 0 1.6rem',
        fontSize: '1.8rem',
        fontWeight: 300,
        fontFamily: 'MiloTE',
        position: 'relative',
        '&:before': {
            content: '""',
            background: theme.pallete.primary.colors.red,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '3px',
            width: '40px',
        },
    },
});

export default accordionStyles;
