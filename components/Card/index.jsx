import { View, StyleSheet, Text, Image, Pressable} from 'react-native'


export const Card  = () => {
    return (
        <View>
            <Image></Image>
            <View>
                <Text style={styles.title}>Título do Card</Text>
                <Text>Descrição do card</Text>
                <Text>Preço: R$ 99,99</Text>
            </View>
            <Pressable>
                <Text>Comprar</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});