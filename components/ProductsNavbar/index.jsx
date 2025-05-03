import { Link } from "expo-router"
import { StyleSheet, View, Text } from "react-native"

const catalogoRoupas = [
    {
        id: 0,
        dsc: 'Home',
        path: 'home'
    },
    {
        id: 0,
        dsc: 'Novidades',
        path: 'novidades'
    },
    {
        id: 0,
        dsc: 'Populares',
        path: 'populares'
    },
    {
        id: 0,
        dsc: 'Camisas e Moletom',
        path: 'topwear'
    },
    {
        id: 0,
        dsc: 'Calças e Bermuda',
        path: 'bottomwear'
    },
    {
        id: 0,
        dsc: 'Vestidos e Macacações',
        path: 'dresses'
    },
    {
        id: 0,
        dsc: 'Calçados',
        path: 'calcados'
    },
    {
        id: 0,
        dsc: 'Acessórios',
        path: 'acessorios'
    },
]


export const ProductsNavbar = () => {
    return (
        <View style={styles.ProductsNavbar}>
            {catalogoRoupas.map(i => (
                <Link 
                    style={ styles.ProductsNavbarItemLink }
                    href={ {pathname: i.path} }>
                    <Text style={ styles.ProductsNavbarItemText}>
                        { i.dsc }
                    </Text>
                </Link>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    ProductsNavbar: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        width: '100%',
        margin: '0px',
        backgroundColor: '#94D2BD'
    },
    ProductsNavbarItemText: {
        color: 'white',
        margin: '0 2px',
        textAlign: 'center' 
    }
})