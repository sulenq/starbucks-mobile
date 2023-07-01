import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ChakraProvider, VStack, Text, Link, Button } from '@chakra-ui/react';

import { myTheme } from './Theme/myTheme';
import './style.css';
import LandingPage from './Pages/LandingPage';
import EnterPin from './Pages/EnterPin';
import CreatePin from './Pages/CreatePin';
import Home from './Pages/Home';
import Card from './Pages/Card';
import Reward from './Pages/Reward';
import Profile from './Pages/Profile';

const NotFound = () => {
  return (
    <VStack
      w={'100%'}
      h={'100vh'}
      gap={null}
      justifyContent={'center'}
      textAlign={'center'}
      zIndex={99}
    >
      <Text fontWeight={'800 !important'} fontSize={'64px'}>
        404
      </Text>
      <Text fontWeight={'800 !important'} fontSize={'64px'} mb={5}>
        PAGE NOT FOUND
      </Text>
      <Link
        href={'/'}
        fontSize={'24px'}
        color={'primary'}
        textDecoration={'underline'}
      >
        <Button colorScheme="primary">Back to Landing Page</Button>
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
          <Route path={'/card'} element={<Card />} />
          <Route
            path={'/starbucks-rewards'}
            strict={false}
            element={<Reward />}
          />
          <Route path={'/profile-settings'} element={<Profile />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
