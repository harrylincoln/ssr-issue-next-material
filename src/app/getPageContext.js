import { SheetsRegistry } from 'jss';
import { createGenerateClassName } from '@material-ui/core/styles';
// themes
import primary from './styles/themes/primary';
// theme builder
import { themeCreator } from './util/create-theme';

const theme = themeCreator({ primary });

function createPageContext() {
    return {
        theme,
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new SheetsRegistry(),
        // The standard class name generator.
        generateClassName: createGenerateClassName({
            productionPrefix: 'csE',
        }),
    };
}

let pageContext;

export default function getPageContext() {
    if (!process.browser) {
        return createPageContext();
    }

    // Reuse context on the client-side.
    if (!pageContext) {
        pageContext = createPageContext();
    }

    return pageContext;
}
