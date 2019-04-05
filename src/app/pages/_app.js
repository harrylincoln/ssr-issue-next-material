import App, { Container } from 'next/app';

import Grid from '@material-ui/core/Grid';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import React from 'react';
import getPageContext from '../getPageContext';
import withReduxStore from '../redux-store/redux-wrapper';

class MyApp extends App {
    constructor() {
        super();
        this.pageContext = getPageContext();
    }

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Container>
                <Provider store={reduxStore}>
                    <React.Fragment>
                        <MuiThemeProvider
                            theme={this.pageContext.theme}
                            sheetsManager={this.pageContext.sheetsManager}
                        >
                            <JssProvider
                                registry={this.pageContext.sheetsRegistry}
                                generateClassName={
                                    this.pageContext.generateClassName
                                }
                            >
                                <main>
                                    <Grid
                                        container
                                        style={{ flexGrow: 1 }}
                                        spacing={0}
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Component
                                            pageContext={this.pageContext}
                                            {...pageProps}
                                        />
                                    </Grid>
                                </main>
                            </JssProvider>
                        </MuiThemeProvider>
                    </React.Fragment>
                </Provider>
            </Container>
        );
    }
}

export default withReduxStore(MyApp);
