import { View, StyleSheet, Text, Image} from 'react-native'
import { Header } from "../components/Header"
import { ProductsNavbar } from '../components/ProductsNavbar'

export default function Home() {
    return(
        <View style={styles.mainView}>
            <Header />
            <ProductsNavbar />
            <Text>Eu sou o Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        color: "white"
    }
})