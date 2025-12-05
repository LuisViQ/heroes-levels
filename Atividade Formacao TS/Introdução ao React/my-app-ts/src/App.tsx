import { Layout } from './components/Layout/Layout';
import { Box, Flex } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { LoginCard } from './components/Card/LoginCard';
import { useState } from 'react';
function App() {
  const [value, setValue] = useState(0)
  console.log(useState(0))
  return (
    <Layout>
      <Box
        minH="100vh"
        bgGradient="linear(to-br, purple.600, pink.400)"
      >
        <Header title="Minha Aplicação" />

        <Flex
          align="center"
          justify="center"
          minH="calc(100vh - 64px)"
          px="4"
        >
          <LoginCard />
        </Flex>
      </Box>
    </Layout>
  );
}

export default App;
