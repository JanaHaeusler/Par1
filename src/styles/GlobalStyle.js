import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 10px;
        height: 100vh;
        width: 100vw;
        background-color: var(--primary-light);
        font-family: 'Montserrat', sans-serif;
        font-size: 112.5%;
        color: var(--text-dark);
    }

    :root {
        --text-dark: #414143;
        --text-light: #ffffff;
        --primary-light: #C1D5E0;
        --primary-medium: #90A4AE;
        --primary-dark: #62757F;
        --secondary-light: #51A1D1;
        --secondary-medium: #0173A0;
        --secondary-dark: #004871;
        --warning: #E41919;
    }
`
