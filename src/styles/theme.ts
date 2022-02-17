import { css } from 'styled-components';

const wrapSize = '1080px';

const wrapper = css`
  margin: 0 auto;
  width: ${wrapSize};
`;

const colors = {};

const theme = {
  colors,
  wrapSize,
  wrapper,
};

export default theme;
