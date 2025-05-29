import { View, StyleSheet, Text, Image} from 'react-native'
import { Header } from "../components/Header"
import { ProductsNavbar } from '../components/ProductsNavbar'
import { Card } from '../components/Card'

export default function Index() {
    return(
        <View style={styles.mainView}>
            <Header />
            <ProductsNavbar />
            <Card></Card>
            <Text>Eu sou o index</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        color: "white"
    }
})