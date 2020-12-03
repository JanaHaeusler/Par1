import { createGlobalStyle } from 'styled-components'
import GrasBackground from '../assets/gras-background.jpg'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        background: url(${GrasBackground}) no-repeat center center fixed;
        background-color: var(--text-light);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
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
    }

    h4 {
        margin: 0;
        font-weight: 550;
    }
`
