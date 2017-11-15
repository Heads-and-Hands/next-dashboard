import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';
/* eslint-disable no-unused-expressions */
injectGlobal`
  html {
    padding: 0;  
    height: 100%;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'Roboto', Arial;
    height: 100%;
    padding: 0;  
    margin: 0;
  } 
  #root {
    height: 100%;
  }
`;
/* eslint-enable no-unused-expressions */

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="ru">
        <Head>
          <title>My page</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
