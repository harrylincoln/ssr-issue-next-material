const collapsableStyles = (theme) => ({
    ...theme.pallete.primary.generalSelectorClasses,
    ...theme.pallete.primary.accessible,

    collapsable: {
        margin: '0.8rem 0',
        padding: '2rem',
        background: '#fff',

        '&.isClosed': {
            opacity: 0.5,

            '& $activeContent, & $completeContent, & $editButton': {
                display: 'none',
            },
        },

        '&.isActive': {
            boxShadow: '0 1px 4px rgba(0,0,0,0.5)',
            '& $completeContent, & $editButton': {
                display: 'none',
            },
            '& $header': {
                paddingBottom: '1.6rem',
                borderBottom: '1px solid #D7D7D7',
            },
        },
        '&.isComplete': {
            '& $activeContent, & footer': {
                display: 'none',
            },
        },
    },

    header: {
        position: 'relative',
        display: 'block',

        '& h3': {
            ...theme.pallete.primary.typography.title3,
            padding: '0.8rem 0',
        },

        '& $editButton': {
            position: 'absolute',
            top: 0,
            right: 0,
        },
    },

    activeContent: {
        display: 'block',
        padding: '2rem 0 0',
    },

    completeContent: {
        display: 'block',
        padding: '1.6rem 0 0',

        '& p': {
            fontSize: '1.6rem',
            lineHeight: '2.4rem',
            fontWeight: 300,
            margin: 0,
            '&:last-of-type': { marginBottom: '0.8rem' },
        },
    },
});

export default collapsableStyles;
