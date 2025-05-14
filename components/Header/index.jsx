import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
    return (
        <View style={styles.headerView}>
            <Link style={styles.headerHref} href={ {pathname: ''}}>
                <Text style={styles.headerTitle}>Fresh 'n Drip</Text>
            </Link>
            <View style={styles.headerSearchbarContainer}>
                <TextInput
                        style={styles.HomeSearchbar}
                        placeholder="O que você vai vestir hoje?"
                        keyboardType="default"
                        selectionColor= "transparent"
                    />
                <Ionicons style={styles.HomeSearchbarIcon} name="search" size={20} color="gray" />
            </View>
            <View style={styles.headerNavbar}>
                    <Link href={ {pathname: 'Carrinho/carrinho' }}>
                        <Ionicons name="cart" size={20} color="white" />
                        {/* <Text style={styles.headerNavLink}>Cart</Text> */}
                    </Link>
                    <Link href={ {pathname: 'Pedido/pedido' }}>
                        <Ionicons name="bag" size={20} color="white" />
                        {/* <Text style={styles.headerNavLink}>Shop</Text> */}
                    </Link>
                    <Link href={ {pathname: 'Usuario/usuario' }}>
                        <Ionicons name="person" size={20} color="white" />
                        {/* <Text style={styles.headerNavLink}>User</Text> */}
                    </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 20,
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: '#66A0A3',
    },
    headerHref: {
        textAlign: 'center',
        width: "20%",
    },
    headerTitle: {
        color: "white",
        fontWeight: 800,
        fontSize: '20px',
        width: "50%",
        textAlign: 'center'
    },
    headerSearchbarContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '20rem',
        height: '2rem',
        backgroundColor: 'white',
        borderRadius: '4px',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '4px'
    },
    HomeSearchbar: {
        width: '90%',
        paddingLeft: '0.45rem',
        color: 'gray'
    },
    HomeSearchbarIcon: {
        paddingRight: '0.45rem'
    },
    headerNavbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '20rem'
    }
    // headerView: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flexWrap: 'nowrap',
    //     backgroundColor: '#66A0A3',
    //     width: "100%",
    //     height: "40px",
    //     margin: 0
    // },
    // headerHref: {
    //     textAlign: 'center',
    //     width: "20%",
    // },
    // headerTitle: {
    //     color: "white",
    //     fontWeight: 800,
    //     fontSize: '20px',
    //     width: "50%",
    //     textAlign: 'center'
    // },
    // HomeSearchbar: {
    //     width: '20rem',
    //     color: 'white',
    //     paddingLeft: '10px',
    //     backgroundColor: 'white'
    // },
    // headerNavbar: {
    //     width: '40%',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignContent: 'center',
    //     flexWrap: 'nowrap',
    //     justifyContent: 'space-evenly'
    // },
    // headerNavbarContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     width: 'auto',
    //     color: 'white',
    //     borderColor: 'white',
    //     borderStyle: 'solid',
    //     borderWidth: '1px',
    //     borderRadius: '4px',
    //     paddingLeft: '10px',
    //     backgroundColor: 'white'
    // },
    // headerNavbarLinksContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     width: '60%',
    //     flexWrap: 'nowrap',
    //     justifyContent: 'space-evenly'
    // },
    // headerNavLink: {
    //     textAlign: 'center',
    //     color: 'white',
    //     width: '40px'
    // }
})