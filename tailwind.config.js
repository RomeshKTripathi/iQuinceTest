import { anxity, depression } from "./src/assets/images";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                cea: "url('./bg.png')",
                anxity: "url('./anxity.png')",
                depression: "url('./depression.png')",
                ptsd: "url('./ptsd.png')",
                adhd: "url('./adhd.png')",
                adhdtesting: "url('./adhdtesting.png')",
                bipolar: "url('./bipolar.png')",
                grief: "url('./grief.png')",
                sucideprevention: "url('./sucideprevention.png')",
                weightmanagement: "url('./weightmanagement.png')",
                tree: "url('./treebg.png')",
                illustration: "url('./illustration.png')",
            },
            colors: {
                "my-dark-green": "#285400",
                "my-blue": "#29ABDF",
                "my-blue-light": "#8ed7f5",
                "my-blue-dark": "#0374a1",
                "my-green": "#5B9D24",
                "my-green-light": "#a9e872",
                "my-lightest-green": "#effce3",
            },
            keyframes: {
                "slide-down-out": {
                    "0%": { transform: "translateY(0)", opacity: "1" },
                    "100%": { transform: "translateY(100%)", opacity: "0" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(100%)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                rotateOnce: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                rotateBackAndForth: {
                    "0%, 100%": { transform: "rotate(-90deg)" },
                    "50%": { transform: "rotate(180deg)" },
                },
            },
            animation: {
                "slide-down-out": "slide-down-out 0.5s ease-in forwards",
                "slide-up": "slide-up 0.8s ease-out forwards",
                rotateOnce: "rotateOnce 1s ease-in-out forwards",
                rotatePingPong: "rotateBackAndForth 10s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
