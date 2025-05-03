import { Text, View } from "react-native";
import { ProductsNavbar } from '../components/ProductsNavbar'
import { Header } from "../components/Header";

export default function User() {
    return (
        <View>
            <Header />
            <ProductsNavbar />
            <Text>Eu sou a página de usuário</Text>
        </View>
    )
}