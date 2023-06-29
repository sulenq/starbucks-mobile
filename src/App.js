import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ChakraProvider, VStack, Text, Link } from '@chakra-ui/react';

import { myTheme } from './Theme/myTheme';
import './style.css';
import LandingPage from './Pages/LandingPage';
import EnterPin from './Pages/EnterPin';
import CreatePin from './Pages/CreatePin';
import Home from './Pages/Home';

const NotFound = () => {
  return (
    <VStack
      w={'100%'}
      h={'100vh'}
      fontWeight={'bold'}
      gap={null}
      justifyContent={'center'}
      textAlign={'center'}
      zIndex={99}
    >
      <Text fontSize={'64px'}>404</Text>
      <Text fontSize={'64px'}>PAGE NOT FOUND</Text>
      <Link
        href={'/'}
        fontSize={'24px'}
        color={'primary'}
        textDecoration={'underline'}
      >
        Back to Landing Page
      </Link>
    </VStack>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={myTheme}>
        <Routes>
          <Route path={'/'} element={<LandingPage />} />
          <Route path={'/enterpin'} element={<EnterPin />} />
          <Route path={'/createpin'} element={<CreatePin />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
