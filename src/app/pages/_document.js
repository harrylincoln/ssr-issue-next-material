import Document, { Head, Main, NextScript } from 'next/document';

import PropTypes from 'prop-types';
import React from 'react';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
    render() {
        const { pageContext, description } = this.props;

        return (
            <html lang="en" dir="ltr">
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
                    />
                    <meta charSet="utf-8" />
                    <meta property="og:description" content={description} />
                    <meta name="author" content="Novactive" />
                    {/* PWA primary color */}
                    <meta
                        name="theme-color"
                        content={
                            pageContext
                                ? pageContext.theme.palette.primary.main
                                : null
                        }
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

MyDocument.getInitialProps = (ctx) => {

    // Render app and page and get the context of the page with collected side effects.
    let pageContext;
    const page = ctx.renderPage((Component) => {
        const WrappedComponent = (props) => {
            pageContext = props.pageContext; /* eslint-disable-line */
            return <Component {...props} />;
        };

        WrappedComponent.propTypes = {
            pageContext: PropTypes.shape({}).isRequired,
        };

        return WrappedComponent;
    });

    let css;
    // It might be undefined, e.g. after an error.
    if (pageContext) {
        css = pageContext.sheetsRegistry.toString();
    }

    return {
        ...page,
        pageContext,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: (
            <React.Fragment>
                <style
                    id="jss-server-side"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: css }}
                />
                {flush() || null}
            </React.Fragment>
        ),
    };
};

export default MyDocument;
