import { createGlobalStyle } from 'styled-components'
import Background from './background.jpg'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        background: url(${Background}) no-repeat center center fixed;
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
        --text-light-transparent: #ffffffBF;
        --primary-medium: #90A4AE;
        --primary-dark: #62757F;
        --secondary-dark: #004871;
        --separator: #f8f8f8;
        --gradient-dark: linear-gradient(90deg, #000428 0%, #004871 100%);
        --box-shadow-green: #e5ede4;
    }

    h1 {
        font-size: 2rem;
    }

    h3 {
        margin: 10px;
        font-weight: 550;
    }

    h4 {
        margin: 0;
        font-weight: 550;
    }
`
