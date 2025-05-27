import { anxity, depression } from "./src/assets/images";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                cea: "url('./public/bg.png')",
                anxity: "url('./public/anxity.png')",
                depression: "url('./public/depression.png')",
                ptsd: "url('./public/ptsd.png')",
                adhd: "url('./public/adhd.png')",
                adhdtesting: "url('./public/adhdtesting.png')",
                bipolar: "url('./public/bipolar.png')",
                grief: "url('./public/grief.png')",
                sucideprevention: "url('./public/sucideprevention.png')",
                weightmanagement: "url('./public/weightmanagement.png')",
                tree: "url('./public/treebg.png')",
                illustration: "url('./public/illustration.png')",
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
