import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaskedTextInput } from 'react-native-mask-text';

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [curso, setCurso] = useState('')
  const [disciplina, setDisciplina] = useState('')
  const [apresentacao, setApresentacao] = useState('')

  useEffect(() => {
    BuscarDados()
    return () => {
      console.log("Executando Projeto...")
    }
  }, [])

  async function BuscarDados() {
    const p = await AsyncStorage.getItem("USUARIO")
    if (p != null) {
      const dados = JSON.parse(p)
      setNome(dados.nomeA)
      setTelefone(dados.telefoneA)
      setCpf(dados.cpfA)
      setCurso(dados.cursoA)
      setDisciplina(dados.disciplinaA)
      setApresentacao(dados.apresentacaoA)
    }
  }

  async function salvar() {
    if (!nome || nome === "") {
      Alert.alert("Campo obrigatório", "Por favor, informe seu nome.")
      return
    }
    if (!telefone || telefone === "") {
      Alert.alert("Campo obrigatório", "Por favor, informe seu telefone.")
      return
    }
    if (!cpf || cpf === "") {
      Alert.alert("Campo obrigatório", "Por favor, informe seu CPF.")
      return
    }
    if (!curso || curso === "") {
      Alert.alert("Campo obrigatório", "Por favor, informe seu curso.")
      return
    }
    if (!disciplina || disciplina === "") {
      Alert.alert("Campo obrigatório", "Por favor, informe sua disciplina.")
      return
    }
    if (!apresentacao || apresentacao === "") {
      Alert.alert("Campo obrigatório", "Por favor, informe sua apresentação.")
      return
    }

    const usuario = {
      nomeA: nome,
      telefoneA: telefone,
      cpfA: cpf,
      cursoA: curso,
      disciplinaA: disciplina,
      apresentacaoA: apresentacao
    }

    await AsyncStorage.setItem("USUARIO", JSON.stringify(usuario))

    Alert.alert("Sucesso", "Dados salvos com sucesso!", [
  {
    text: "OK",
    onPress: () => navigation.navigate("perfil", { usuario: usuario })
  }
])
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          autoCapitalize='words'
          maxLength={20}
          value={nome}
          onChangeText={(value) => setNome(value)}
        />
        <MaskedTextInput
          type="custom"
          mask="999.999.999-99"
          style={styles.input}
          placeholder='Digite seu CPF'
          keyboardType='number-pad'
          maxLength={14}
          value={cpf}
          onChangeText={(text) => setCpf(text)}
        />
        <MaskedTextInput
          type="custom"
          mask="(99) 99999-9999"
          style={styles.input}
          placeholder='Digite seu telefone'
          keyboardType='number-pad'
          maxLength={15}
          value={telefone}
          onChangeText={(text, rawText) => setTelefone(rawText)}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite seu curso'
          autoCapitalize='words'
          maxLength={10}
          value={curso}
          onChangeText={(value) => setCurso(value)}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite sua disciplina'
          autoCapitalize='words'
          maxLength={10}
          value={disciplina}
          onChangeText={(value) => setDisciplina(value)}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite uma breve apresentação'
          autoCapitalize='words'
          maxLength={40}
          value={apresentacao}
          onChangeText={(value) => setApresentacao(value)}
        />
        <Button
          title='Enviar'
          color={'#360a13'}
          onPress={salvar}
        />
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
  input: {
    backgroundColor: '#fff',
    width: 300,
    borderColor: '#0a1736',
    borderRadius: 7,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 20
  },
  form: {
    backgroundColor: '#203669',
    borderRadius: 10
  },
});