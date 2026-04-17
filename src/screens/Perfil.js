import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil({ route }) {

  const [dados, setDados] = useState(null)

  useEffect(() => {
    CarregarDados()
    return () => {
      console.log("Tela Perfil carregada...")
    }
  }, [route])

  async function CarregarDados() {
    const p = await AsyncStorage.getItem("USUARIO")
    if (p != null) {
      setDados(JSON.parse(p))
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      {dados != null ? (
        <View style={styles.card}>
          <Text style={styles.label}>Nome: <Text style={styles.valor}>{dados.nomeA}</Text></Text>
          <Text style={styles.label}>CPF: <Text style={styles.valor}>{dados.cpfA}</Text></Text>
          <Text style={styles.label}>Telefone: <Text style={styles.valor}>{dados.telefoneA}</Text></Text>
          <Text style={styles.label}>Curso: <Text style={styles.valor}>{dados.cursoA}</Text></Text>
          <Text style={styles.label}>Disciplina: <Text style={styles.valor}>{dados.disciplinaA}</Text></Text>
          <Text style={styles.label}>Apresentação: <Text style={styles.valor}>{dados.apresentacaoA}</Text></Text>
        </View>
      ) : (
        <Text style={styles.aviso}>Nenhum dado cadastrado ainda.</Text>
      )}

      <View style={styles.feitoPor}>
        <Text style={styles.feitoPorTexto}>Feito por</Text>
        <Image
          source={require('../../assets/foto.jpg')}
          style={styles.foto}
        />
        <Text style={styles.nome}>Giovanna Laturague Bueno</Text>
        <Text style={styles.rm}>RM: 556242</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#203669',
    alignItems: 'center',
    paddingTop: 30,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: 300,
    gap: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#203669',
  },
  valor: {
    fontWeight: 'normal',
    color: '#333',
  },
  aviso: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 20,
  },
  feitoPor: {
    alignItems: 'center',
    gap: 6,
  },
  feitoPorTexto: {
    color: '#aaa',
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  nome: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rm: {
    color: '#ccc',
    fontSize: 14,
  },
});