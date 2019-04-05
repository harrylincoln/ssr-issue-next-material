const textInputStyles = (theme) => ({
    ...theme.pallete.primary.atomics,
    ...theme.pallete.primary.forms,
    ...theme.pallete.primary.generalSelectorClasses,

    error: {
        '& $formElement': {
            ...theme.pallete.primary.forms.formElementError,
        },
    },
});

export default textInputStyles;
