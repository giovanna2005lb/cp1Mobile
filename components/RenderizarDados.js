import { Text, View, StyleSheet } from "react-native";

export default function RenderizarDados(props){
    return(
        <View style={styles.retorno}>
        <Text>{props.nome} - {props.curso} - {props.disciplina} - {props.apresentacao}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  retorno: {
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 10,
  },
});