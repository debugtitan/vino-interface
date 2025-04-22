import { createSystem, defaultConfig } from "@chakra-ui/react"



export const systemConfig = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                background: { value: "#FCFAF8" },
                primary: {
                    DEFAULT: { value: "#150C04" },
                    thin: { value: "#E3CDB9" }
                },
                brand: { value: "#A65F1D" },
                white: { value: "#FFFFFF" },
                slategray: { value: "#242A38" },
                border: {
                    DEFAULT: {
                        value: "#E3CDB9"
                    },
                    thin: { value: "#E0DDDA" }
                },
                neutral: { value: "#6F6760" },
                surface: {
                    DEFAULT: { value: "#F6EFE8" },
                    neutral: { value: "#F5F4F3" }
                }

            },

            fontWeights: {
                normal: { value: "400" },
                medium: { value: "500" },
                semibold: { value: "600" }
            },
            fontSizes: {
                xs: { value: "14px" },
                sm: { value: "20px" },
                small: { value: "23px" },
                medium: { value: "26px" },
                md: { value: "72px" }
            },
            sizes: {
                sm: { value: "350px" },
                small: { value: "568px" },
                md: { value: "786px" }
            }
        }
    },
    globalCss: {
        "html, body": {
            backgroundColor: "{colors.background}",
            font: "var(--font-dm-sans)",
            height: "100vh",
            width: "100vw"

        }
    }
})