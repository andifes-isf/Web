import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const sizes = {
  xs: defineStyle({
    control: {
      h: "20px",
      w: "20px",
    },
    label: {},
  }),
};

const variants = {
  primary: defineStyle({
    control: {
      borderColor: "blue_gray.100",
      borderWidth: "1px",
      borderStyle: "solid",
      _checked: {
        borderColor: "blue_gray.100",
        borderWidth: "3px",
        borderStyle: "solid",
        bg: "blue_gray.100",
        "&:hover": {
          bg: "blue_gray.100",
          borderWidth: "3px",
          borderColor: "blue_gray.100",
        },
      },
    },
  }),
};

const Checkbox = defineStyleConfig({
  variants,
  sizes,
  defaultProps: {
    variant: "primary",
    size: "xs",
  },
});
export default Checkbox;
