import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import Loading from 'components/Loading/Loading';
import { SplashProvider } from 'hooks/LoadingContext';
import { MyThemeProvider } from 'hooks/ThemeContext';
import Routes from 'routers';
import { client } from 'server';
import GlobalStyles from 'styles/global';
const Bootstrap: React.FC = () => {
  return (
    <>
      <MyThemeProvider>
        <SplashProvider SplashScreen={Loading}>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </ApolloProvider>
        </SplashProvider>
      </MyThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default Bootstrap;
