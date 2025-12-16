import { FC, useState, useEffect } from 'react';
import { Box, Heading, Text, Input } from '@chakra-ui/react';
import { AppButton } from '../Button/AppButton';
import { login } from '../../services/Login';
import { api } from '../../api';

interface UserData {
  email:string
  password:string
  name?:string
}
export const LoginCard: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState('')
  const [userData, setUserData] = useState<null | UserData>()

  useEffect(() =>{
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    
    getData()
  }, [])
  


  const displayName = userData?.name ?? "carregando...";


  
  // const handleLoginClick = () => {
  //   const message = getWelcomeMessage();
  //   alert(message);
  // };

  return (
    <Box
      w="100%"
      maxW="400px"
      bg="white"
      borderRadius="2xl"
      boxShadow="xl"
      p="8"
    >
      <Heading
        size="lg"
        textAlign="center"
        mb="2"
        fontWeight="bold"
        color="purple.700"
      >
        Faça login
      </Heading>

      <Text fontSize="sm" textAlign="center" mb="6" color="gray.500">
        Olá{" "}{displayName}{" "}faça login para continuar
      </Text>

      <Box> 
        <Input
          placeholder="E-mail"
          type="email"
          mb="4"
          color={'black'}
          value={email} 
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          color={'black'}
          mb="5"
          value={senha} 
          onChange={(event) => setSenha(event.target.value)}
        />

        <AppButton
          label="Entrar"
          onClick={() => login(email)}
        />
      </Box>
    </Box>
  );
};
