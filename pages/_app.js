import React from 'react';
import PropTypes from 'prop-types';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../src/ui/Theme';
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer';
import { render } from 'react-dom';

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = { value: 0, selectedIndex: 0 };
  }
  // const { Component, pageProps } = props;

  setValue = (index) => {
    this.setState({ value: index });
  };

  setSelectedIndex = (index) => {
    this.setState({ selectedIndex: index });
  };

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width'
          />
        </Head>
        <ThemeProvider theme={Theme}>
          <Header
            value={this.state.value}
            setValue={this.setValue}
            selectedIndex={this.state.selectedIndex}
            setSelectedIndex={this.setSelectedIndex}
          />
          <Component
            {...pageProps}
            setSelectedIndex={this.setSelectedIndex}
            setValue={this.setValue}
          />
          <Footer
            setSelectedIndex={this.setSelectedIndex}
            setValue={this.setValue}
          />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
