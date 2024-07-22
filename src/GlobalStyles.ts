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

        --zinc-100: #f4f4f5;
        --zinc-200: #e5e7eb;
        --zinc-300: #d4d4d8;
        --zinc-400: #a1a1aa;
        --zinc-500: #6b7280;
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
        width: 100vw;
        overflow-x: hidden;

        display: flex;
        justify-content: center;
    }
`;

export default GlobalStyles;
