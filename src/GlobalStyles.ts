import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        font-family: "Inter", sans-serif;
    }

    :root {
        --black: #000000;
        --white: #FFFFFF;

        --zinc-600: #52525b;
        --zinc-700: #3f3f46;
        --zinc-800: #27272a;

        --red: #ef4444;
        --blue: #3b82f6;
        --green: #22c55e;
        --yellow: #eab308;
        --pink: #be185d;
        --teal: #14b8a6;
        --orange: #f97316;
        --purple: #9333ea;
    }    

    body {
        background-color: var(--zinc-800);
        color: white;
    }
`;

export default GlobalStyles;
