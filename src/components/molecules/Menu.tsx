import styled from '@emotion/styled';
import { Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const Menu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 32px;
`;

const textCss = {
  fontSize: '1.2em',
  '&:hover': {
    textGradient: '45deg, $red200 -20%, $red500 50%',
  },
  '@smMax': {
    fontSize: '1em',
    flexWrap: 'wrap',
  },
};

export default () => (
  <Menu>
    <li>
      <Link to="/about">
        <Text weight="bold" css={textCss}>About</Text>
      </Link>
    </li>
    <li>
      <a href="https://github.com/skia4delphi/skia4delphi/releases">
        <Text weight="bold" css={textCss}>Download</Text>
      </a>
    </li>
    <li>
      <a href="https://github.com/skia4delphi/skia4delphi">
        <Text weight="bold" css={textCss}>Github</Text>
      </a>
    </li>
    <li>
      <a href="https://opencollective.com/skia4delphi">
        <Text weight="bold" css={textCss}>Contribute</Text>
      </a>
    </li>
  </Menu>
);
