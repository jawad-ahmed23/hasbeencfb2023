import { defineStyleConfig } from "@chakra-ui/react";

export default defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: {
      // bgColor: "#fff",
      // border: "1px solid #fff",
      color: "#000",
      border: "3px solid #f29e33",
      // backgroundImage: "linear-gradient(30deg, #f29e33 80%, transparent 50%)",

      // backgroundSize: "500px",
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "0%",
      transition: "all 300ms ease-in-out",
      bgColor: "primary",
      _hover: {
        // backgroundPosition: "100%",
        // bgColor: "transparent",
        // border: "1px solid #fff",
        // color: "#fff",
        bg: "transparent",
        color: "#f29e33",
        textDecor: "none",
      },
      _active: {
        boxShadow: "0 0 5px 0 #f29e33 inset, 0 0 10px 2px",
      },
    },

    "primary-outline": {
      bgColor: "none",
      color: "#f29e33",
      borderColor: "#f29e33",
      borderWidth: "3px",
      backgroundColor: "transparent",

      // border: 3px solid #00d7c3;
      // border-radius: 50px;
      // -webkit-transition: all .15s ease-in-out;
      transition: "all .15s ease-in-out",
      // color: #00d7c3;
      _hover: {
        boxShadow: "0 0 5px 0 #f29e33 inset, 0 0 10px 2px",
        textDecor: "none",
      },
      _active: {
        boxShadow: "none",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
