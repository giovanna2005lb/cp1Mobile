import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderizarDados from './components/RenderizarDados';

export default function App() {
  //Uso do useStade
  const[nome, setNome] = useState('')
  const[curso, setCurso] = useState('')
  const[disciplina, setDisciplina] = useState('')
  const[apresentacao, setApresentacao] = useState('')
  const[mostrarDados, setMostrarDados] = useState(false)

  useEffect(()=>{
    return(
      console.log("Executando Projeto...")
    )
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
      <TextInput
      style={styles.input}
      placeholder='Digite seu nome'
      autoCapitalize= 'words'
      maxLength={20}
      value={nome}
      onChangeText={(value)=>setNome(value)}
      />
      <TextInput
      style={styles.input}
      placeholder='Digite seu curso'
      autoCapitalize= 'words'
      maxLength={10}
      value={curso}
      onChangeText={(value)=>setCurso(value)}
      />
      <TextInput
      style={styles.input}
      placeholder='Digite sua disciplina'
      autoCapitalize= 'words'
      maxLength={10}
      value={disciplina}
      onChangeText={(value)=>setDisciplina(value)}
      />
      <TextInput
      style={styles.input}
      placeholder='Digite uma preve apresentação'
      autoCapitalize= 'words'
      maxLength={40}
      value={apresentacao}
      onChangeText={(value)=>setApresentacao(value)}
      />
      <Button
      title='Enviar'
      color={'#360a13'}
      onPress={()=>setMostrarDados(true)}
      />

      {mostrarDados&&<RenderizarDados nome={nome} curso={curso} disciplina={disciplina} apresentacao={apresentacao}/>}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203669',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor: '#fff',
    width: 300,
    borderColor: '#0a1736',
    borderRadius: 7,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 20
  },
  form:{
    backgroundColor: '#203669',
    borderRadius: 10
  },
});
