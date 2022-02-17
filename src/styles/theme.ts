import { css } from "styled-components";

const wrapSize = "1240px";

const wrapper = css`
  margin: 0 auto;
  width: ${wrapSize};
`;

const colors = {
  white: "#fff",
  primary: "#ff9270",
  yellow: "#fefcf2",
  blue: "#8fc4ff",
  pink: "#f5788c",
  gray300: "#e3e3e3",
  gray500: "#bbbbbb",
};

const media = {
  phone: "only screen and (max-width: 768px)",
  desktop: "screen and (min-width: 769px)",
};

const theme = {
  colors,
  wrapSize,
  wrapper,
  media,
};

export default theme;
