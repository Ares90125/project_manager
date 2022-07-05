# Delta Partners

## Develop the app

```shell
npm start # you can open iOS, Android, or web from here, or run them directly with the commands below
npm run android
npm run ios
npm run web
```

## Vector icons

To avoid loading multiple ttf font files, always use icons from FontAwesome5:

```jsx
import { FontAwesome5 } from '@expo/vector-icons'

const Component = () => {
  return (
    <View>
      <FontAwesome5 name={'phone'} />
    </View>
  )
}
```

FontAwesome5 has 1500+ free icons ([source](https://github.com/oblador/react-native-vector-icons#bundled-icon-sets)), so it should be enough.

See the available icons at https://icons.expo.fyi.

Docs: https://docs.expo.dev/guides/icons/#expovector-icons

## State management with MobX

App state is managed with [MobX](https://mobx.js.org/README.html).

If you've never used it before follow the tutorial [Ten minute introduction to MobX and React](https://mobx.js.org/getting-started).

While developing the app consider the advice in [Optimizing React component rendering](https://mobx.js.org/react-optimizations.html).

### Important: mobx-react-lite only supports functional components

We use mobx-react-lite ([GitHub](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react-lite), [npm](https://www.npmjs.com/package/mobx-react-lite)) to [integrate MobX into React](https://mobx.js.org/react-integration.html). mobx-react-lite only supports React functional components, not classes.

## Run Prettier and ESLint checks automatically on every commit

To run Prettier and ESLint on every commit, run `cp git-hooks/pre-commit .git/hooks`.

Note that the checks do not abort the commit, they only inform you of any issues found.

## Run Prettier manually

```bash
# check formatting
npx prettier --check .
# format files
npx prettier --write .
```

## Run ESLint manually

```bash
npx eslint .
```

## Run TypeScript manually

```bash
npx tsc
```

This will list the TypeScript errors.
