import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
    color: var(--text-main);
}

:root {
    --text-main: #414143;
}

`
