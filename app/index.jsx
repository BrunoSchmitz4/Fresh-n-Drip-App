import { View, StyleSheet, Text, Image} from 'react-native'
import { Header } from "../components/Header"
import { ProductsNavbar } from '../components/ProductsNavbar'
import { CardGroup } from '../components/CardGroup'

export default function Index() {
    return(
        <View style={styles.mainView}>
            <Header />
            <ProductsNavbar />
            <CardGroup></CardGroup>
            <Text>Eu sou o index</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        color: "white"
    }
})