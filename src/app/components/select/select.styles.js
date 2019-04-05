const selectStyles = (theme) => ({
    ...theme.pallete.primary.atomics,
    ...theme.pallete.primary.forms,
    ...theme.pallete.primary.generalSelectorClasses,
    selectGroup: {
        position: 'relative',
        display: 'block',
        '& select': {
            ...theme.pallete.primary.forms.formElement,
            padding: '1rem',
            appearance: 'none',
        },
        '& svg': {
            position: 'absolute',
            right: '1rem',
            top: '1rem',
            pointerEvents: 'none',
        },
    },

    error: {
        '& select': {
            ...theme.pallete.primary.forms.formElementError,
        },
    },
});

export default selectStyles;
