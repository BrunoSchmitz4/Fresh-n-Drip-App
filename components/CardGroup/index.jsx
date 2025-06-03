import { StyleSheet, Text, Imagem, Pressable, View, } from "react-native";
import { Card } from "../Card";
// Valores fictícios para fins de teste
const products = [
    {
        id: 1,
        nome: "Baby TEE",
        tipo: "Top Cropped",
        desc: "Uma camisa que mostra a barriga",
        preco: 39.99
    },
    {
        id: 1,
        nome: "Baby TEE",
        tipo: "Top Cropped",
        desc: "Uma camisa que mostra a barriga",
        preco: 39.99
    },
    {
        id: 1,
        nome: "Baby TEE",
        tipo: "Top Cropped",
        desc: "Uma camisa que mostra a barriga",
        preco: 39.99
    },
    {
        id: 1,
        nome: "Baby TEE",
        tipo: "Top Cropped",
        desc: "Uma camisa que mostra a barriga",
        preco: 39.99
    },
    {
        id: 1,
        nome: "Baby TEE",
        tipo: "Top Cropped",
        desc: "Uma camisa que mostra a barriga",
        preco: 39.99
    },
]

export const CardGroup = () => {
    // Fazer um map de um array de cards e retornar um card para cada item
    let qtdCardsDefault = 20;
    let typeOfCardDefault = "all";

    return (
        <View style={styles.cardGroup}>
            {products.map(p => (
                <Card></Card>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    cardGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        margin: 'auto'
    }
})