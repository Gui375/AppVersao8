import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService from '../../services/userService';


const Login = () => {
    const [User, setUser] = useState<string>('');
    const [password, setPassword] = useState<String>('');
    const[UsernameError,SetUsernameError] = useState(false); 
  
    const navigation = useNavigation<StackTypes>();
    const userService = new UserService();

    const handleLogin = () => {
      navigation.navigate('Home');
      if (!User) {
        SetUsernameError(true);
        return;
      }
      else{
        SetUsernameError(false);
      }

      const isValid = await userService.validateUser(User,password);
      


    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          onChangeText={setUser}
          value={User}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password as string}
        />
         <TouchableOpacity onPress={handleLogin} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '22%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 20,
      paddingHorizontal: 10,
      textAlign : 'center'
    },
    button: {
        width: '20%',
        height: 40,
        borderRadius: 8,
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      }
  });
  

export default Login;