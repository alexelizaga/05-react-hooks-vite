
# HooksApp

## Demo
[Hooks App]()

## Commits

114. Start Hooks App proyect
115. useState
116. useCounter - CustomHook
117. Export hook methods
118. useEffect - SimpleForm
119. useEffect dependencys
120. useEffect - unmount cleanup
121. useEffect - precautions
122. Generic custom hook form
123. Reset form method
124. useFetch - CustomHook
125. useFetch + useCounter
126. Connect bouth hooks
127. Optimizations
128. useRef
129. useLayoutEffect
130. Memo - React Method
131. useMemo
132. useCallback
133. useCallback with arguments
134. Memorize task
141. useReducer - Todo List
142. Creating the todos list shell
143. Task: Create components and emmit events
145. Add a new TODO
146. Save and read TODOs from LocalStorage
147. Delete TODO
148. Toggle Todo
149. Task: useTodo
155. Router App configuration
156. React router setup
157. Link
158. Navlink
159. CreateContext and ContextProvider
160. useContext
164. Jest config
165. CustomHook - useCounter Test
166. Eject function in the test
167. CustomHook - useForm Test
168. Test multiple hooks
169. Test useFetch response
170. Test Reducer
172. Test TodoItem component
173. Test TodoItem events
174. Test TodoApp
175. Test useContext
176. Test context functions
177. AppRouter general tests

## Tests

- renderHook
- act()
- getByText()
- jest.mock()
- jest.fn()
- jest.clearAllMocks()
- mockReturnValue()
- fireEvent()
- toContain()
- screen.debug()
- getByLabelText()
- getByRole()
- MemoryRouter

## Install testing

yarn add --dev @testing-library/react
yarn add --dev @testing-library/jest-dom
yarn add --dev @testing-library/user-event
yarn add --dev @babel/preset-react
yarn add --dev @babel/preset-typescript
yarn add --dev @babel/preset-env
yarn add --dev identity-obj-proxy
yarn add --dev jest @types/jest

1. jest-setup.ts

```
    import "@testing-library/jest-dom";
```

2. package.json

```
    "scripts": {
        "test": "jest --watchAll"
    }
```
delete line "type": "module",

3. jest.config.js

```
    module.exports = {
        testEnvironment: 'jsdom',
        setupFilesAfterEnv: [
            '<rootDir>/jest-setup.ts'
        ],
        moduleNameMapper: {
            '\\.(css|less)$': 'identity-obj-proxy'
        }
    }
```

3. babel.config.js

```
    module.exports = {
        presets: [
            [ '@babel/preset-env', { targets: {node: 'current'} } ],
            [ '@babel/preset-react', { runtime: 'automatic' } ],
            '@babel/preset-typescript',
        ],
    };
```

## Good practices

### Folders
- Space in name separate by '-', product-list

### TSX VS TS
- TSX when the component export JSX
- TS when the component doesn't export JSX

### Imports
- React first
- External imports alfabetic order ( shift + command/control + p)

- Internal imports alfabetic order ( shift + command/control + p)

- Css / ... imports alfabetic order ( shift + command/control + p)

### Props
- Separate properties and methods

### Interfaces
- First letter of the name of the interface is capital
- No index.ts for interfaces
- use https://quicktype.io to generate response interfaces
- Separate properties and methods
- NameResponse: is the name of the interface for api responses

### Css
- Atributes in alfabetic order ( shift + command/control + p)
- [styled component in line css](https://styled-components.com/docs/api#css)
- Nesting only pseudo elements and pseudo classes
- Create styled components for 3 or more atributes
- Use Global styles variables
- BEM Metodology
    .ObjetoPrincipal
    .ObjetoPrincipal_objetoInterno
    .ObjetoPrincipal_objetoInterno--excepcion

### Components
- Component starts with capital letter
- Try allways to do functions outside functional components

### Use Any is forbidden


### single quote vs doble quote
- "" Just for html

### Semi-Colon
- Convention to include semi-colon at the end of the lines

### useEffect
- Can't be async
- Just do one thing by useEffect

### Unit test
- Unit test coverage should be at least 80%
- One Describe per test file

### Strings
- Always compare strings whith toLowerCase
- Use defines.ts / enums.ts / ... for plane text
- Template strings instead of concatenation

### Other
- Constants in capital letters


## VSCode Plugins
- Auto Close Tag
- CodeMetrics
- CSS Module
- ES7+ React/Redux/React-Native snippets
- ESLint
- Git Commits
- GitLens
- Jest
- Jest Runner
- Jest Snippets
- Lorem ipsum
- Material Icon Theme
- Paste JSON as Code
- Prettier
- TypeScript Importer
