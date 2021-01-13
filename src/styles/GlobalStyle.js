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
        background-color: var(--light);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        font-family: 'Raleway', sans-serif;
        font-size: 112.5%;
        color: var(--secondary-dark);
    }

    :root {
        --primary: #004871;
        --primary-gradient: linear-gradient(90deg, #000428 0%, #004871 100%);
        --secondary-light: #f8f8f8;
        --secondary-medium: #62757f;
        --secondary-medium-transparent: #62757fa1;
        --secondary-dark: #414143;
        --light: #ffffff;
        --light-transparent: #ffffffBF;
    }

    h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 2rem;
    }

    h3 {
        margin: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 550;
    }

    h4 {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        font-weight: 550;
    }
`
