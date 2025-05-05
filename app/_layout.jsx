import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="Carrinho/carrinho" options={{ headerShown: false }} />
            <Stack.Screen name="Pedido/pedido" options={{ headerShown: false }} />
            <Stack.Screen name="Usuario/usuario" options={{ headerShown: false }} />
        </Stack>
    )
}