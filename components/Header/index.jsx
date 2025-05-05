import { View, StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

export const Header = () => {
    return (
        <View style={styles.headerView}>
            <Link href={ {pathname: ''}}>
                <Text style={styles.headerTitle}>Fresh 'n Drip</Text>
            </Link>
            {/* <Text>Pesquise alguma coisa</Text> */}
            <View style={styles.headerNavbar}>
                <Link href={ {pathname: 'Usuario/usuario' }}><Text style={styles.headerNavLink}>User</Text></Link>
                <Link href={ {pathname: 'Carrinho/carrinho' }}><Text style={styles.headerNavLink}>Cart</Text></Link>
                <Link href={ {pathname: 'Pedido/pedido' }}><Text style={styles.headerNavLink}>Shop</Text></Link>
                {/* <Link href={ {pathname: 'menu' }}><Text>Menu</Text></Link> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'nowrap',
        backgroundColor: '#66A0A3',
        width: "100%",
        height: "40px",
    },
    headerTitle: {
        color: "white",
        fontWeight: 800,
        fontSize: '20px',
        width: "50%",
        textAlign: 'center'
    },
    headerNavbar: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    headerNavLink: {
        textAlign: 'center',
        color: 'white',
        width: '40px'
    }
})