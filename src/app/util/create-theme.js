import { createMuiTheme } from '@material-ui/core/styles';

const breakpointValues = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

export function themeCreator(primary = {}) {
    return createMuiTheme({
        breakpoints: { values: breakpointValues },
        typography: {
            useNextVariants: true,
        },
        pallete: {
            ...primary,
        },
    });
}
