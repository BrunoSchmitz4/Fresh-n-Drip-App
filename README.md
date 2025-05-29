# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## Regras de Negócio para implementar
Cada produto tem seus atributos e o tipo de produto que ele é
Para fins de otimização, podemos implementar as seguintes funcionalidades:
listaProdutos (Lista todos os produtos sem ordenação obrigatória)
listaProdutosPorTipo (Lista todos os produtos de um tipo sem ordenação obrigatória)

Todavia, precisamos que os Card Group tenham funcionalidade de ordenar, caso o usuário queira.
Além disso, precisamos que eles exibam quantidades específicas de produtos por vez e ter a opção de escolher um tipo de produto para ser exibido ou não, por exemplo:
Na página inicial, o card group precisa me mostrar 12 produtos inicialmente, mas, se eu quiser,
eu posso clicar para ele mostrar outros 12.
Já no catálogo de produtos, onde será um tipo específico, eu preciso mostrar 20 de uma vez
Já no carrinho, eu preciso que ele mostre sem especifidade, mas apenas 8.

Uma ideia de implementar isso é passar por parâmetro no CardGroup a quantidade de itens para serem exibidos (por padrão será 10) e um tipo específico (por padrão será all)
