import { Link } from "expo-router"
import { StyleSheet, View, Text } from "react-native"

const catalogoRoupas = [
    {
        id: 0,
        dsc: 'Home',
        path: 'CatalogoProdutos/catalogoProdutos'
    },
    {
        id: 0,
        dsc: 'Novidades',
        path: 'CatalogoProdutos/catalogoProdutos'
    },
    {
        id: 0,
        dsc: 'Populares',
        path: 'CatalogoProdutos/catalogoProdutos'
    },
    {
        id: 0,
        dsc: 'Camisas e Moletom',
        path: 'CatalogoProdutos/catalogoProdutos'
    },
    {
        id: 0,
        dsc: 'Calças e Bermuda',
        path: 'CatalogoProdutos/catalogoProdutos'
    },
    {
        id: 0,
        dsc: 'Vestidos e Macacações',
        path: 'CatalogoProdutos/catalogoProdutos'
    },
    {
        id: 0,
        dsc: 'Calçados',
        path: 'CatalogoProdutos/catalogoProdutos'
    },
    {
        id: 0,
        dsc: 'Acessórios',
        path: 'CatalogoProdutos/catalogoProdutos'
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
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '100%',
        margin: '0px',
        backgroundColor: '#94D2BD'
    },
    ProductsNavbarItemText: {
        color: 'white',
        margin: '2px',
        padding: 4,
        textAlign: 'center' 
    }
})