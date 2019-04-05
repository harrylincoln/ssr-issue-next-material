const notificationStyles = (theme) => ({
    ...theme.pallete.primary.typography,
    ...theme.pallete.primary.generalSelectorClasses,

    notification: {
        position: 'relative',
        display: 'block',
        background: '#F2F2F2',
        padding: '0.8rem',
        borderLeft: '4px solid blue',
        fontFamily: 'EconSansOS',
        fontSize: '1.2rem',
        margin: '0.8rem 0',
    },

    showIcon: {
        minHeight: '50px',
        paddingLeft: '50px',
    },

    icon: {
        position: 'absolute',
        left: '10px',
        top: '1rem',
    },
});

export default notificationStyles;
