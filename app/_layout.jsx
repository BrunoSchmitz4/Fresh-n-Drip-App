import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="cart" options={{ headerShown: false }} />
            <Stack.Screen name="shop" options={{ headerShown: false }} />
            <Stack.Screen name="user" options={{ headerShown: false }} />
        </Stack>
    //     <GestureHandlerRootView style={{ flex: 1 }}>
    //     <Drawer>
    //       <Drawer.Screen
    //         name="index" 
    //       />
    //       <Drawer.Screen
    //         name="details"
    //       />
    //     </Drawer>
    //   </GestureHandlerRootView>
    )
}