import { Container, Row, Link, Text } from '@nextui-org/react';
import { IoLogoGithub } from 'react-icons/io5';
import styled from '@emotion/styled';

const Footer = styled.footer`
  background-color: #000000;
`;

export default () => (
  <Footer>
    <Container css={{paddingTop: 16}}>
        <Row css={{alignItems: 'center'}}>
          <Text>{new Date().getUTCFullYear()} © Skia4Delphi. All rights reserved.</Text>
          <Link css={{color: '$white', fontSize: 22, marginLeft: 'auto'}} href="https://github.com/viniciusfbb/skia4delphi">
            <IoLogoGithub />
          </Link>
        </Row>
    </Container>
  </Footer>
);
