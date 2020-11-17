import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
    color: var(--text-dark);
}

:root {
    --text-dark: #414143;
    --text-light: #ffffff;
    --primary: #D5EBD0;
    --secondary: purple;
}

`
