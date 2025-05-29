import { View, StyleSheet, Text, Image, Pressable} from 'react-native'


export const Card = () => {
    return (
        <View style={styles.card}>
            <Image style={styles.cardImg}></Image>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Baby TEE (Top Cropped) | Empire</Text>
                {/* <Text style={styles.cardDesc}>Uma camisa que mostra a barriga</Text> */}
                <Text style={styles.cardPrice}>R$ 39,99</Text>
            </View>
            <Pressable style={styles.cardBtn}>
                <Text style={styles.cardBtnText}>Comprar</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        borderRadius: '4px',
        backgroundColor: '#F1FAEE',
        width: '200px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '4px',
        boxShadow: "1px 1px 10px gray",
        margin: '20px'
    },
    cardImg: {
        width: "100%",
        // height: "50%",
    },
    cardContent: {
        color: '#FFF'
    },
    cardBtn: {
        width: "100%",
        backgroundColor: "#E63946",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px"
    },
    cardBtnText: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "500"
    }
});