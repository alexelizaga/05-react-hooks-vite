
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

## Tests



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