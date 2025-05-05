import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {

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
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          {catalogoRoupas.map(i => (
            <Drawer.Screen
              name={i.dsc}
              options={{header: false}}
            />
          ))}
        </Drawer>
      </GestureHandlerRootView>
    )
}