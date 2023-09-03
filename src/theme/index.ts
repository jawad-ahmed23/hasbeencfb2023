// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/Button";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    secondary: "#011627",
    primary: "#f29e33",
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth !important",
      },
      body: {
        bgColor: "secondary",
        color: "#fff",
      },
    },
  },
  breakpoints: {
    "3xl": "1550px",
    "4xl": "1700px",
    "1200px": "1200px",
    "1280px": "1280px",
    "2560px": "2560px",
    "2520px": "2520px",
    "3000px": "3000px",
    "3400px": "3400px",
    "4000px": "4000px",
  },
  components: {
    Button,
  },
});

export default theme;
