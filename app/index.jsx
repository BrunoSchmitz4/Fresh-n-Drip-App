import { View, StyleSheet, Text, Image} from 'react-native'
import { Header } from "../components/Header"
import { ProductsNavbar } from '../components/ProductsNavbar'

export default function Index() {
    return(
        <View style={styles.mainView}>
            <Header />
            <ProductsNavbar />
            <Text>Eu sou o index</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        color: "white"
    }
})
