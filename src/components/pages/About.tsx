import { Container, Text } from '@nextui-org/react';
import styled from '@emotion/styled';

const Content = styled.div`
  min-height: calc(100vh - 130px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 16px 0;
`;

export default () => (
  <Container>
    <Content>
      <Text h2>
        About Skia4Delphi
      </Text>
      <Text size="1.1em">
        The project was founded by Paulo César Botelho Barbosa and Vinícius
        Felipe Botelho Barbosa, enthusiastic Delphi developers with over 15
        years of programming experience.
        The library was made from developers to developers and we hope it
        helps and somehow adds value for everyone.
      </Text>
      <hr />
      <Text h2>
        Contributions
      </Text>
      <Text size="1.1em">
        Skia4Delphi is an open source library that requires a lot of personal investment,
        to do it with the highest quality we have received support
        of many different people. We would like to be very grateful to
        {' '}
        <b>Jim McKeeth</b>
        {' '}
        and
        {' '}
        <b>Ian Barker</b>
        {' '}
        for giving us support and guidance on this journey.
        <br />
        Nevertheless, we invite you developer, interested in helping us to build
        a great tool to collaborate and share some of your time. We are a very
        friendly and open-minded community and we hope we can do great things together.
        <br />
        If you preferer helping us with financial contrubutions feel free to do it via
        our open collective page, any amount is a lot as it help us to keep this project
        live and free.
        <br />
        <a href="https://opencollective.com/skia4delphi" rel="noreferrer" target="_blank">https://opencollective.com/skia4delphi</a>
      </Text>
      <hr />
      <Text h2>
        What is Skia?
      </Text>
      <Text size="1.1em">
        Skia is an open source library for drawing 2D Text, Geometries, Images,
        focused on accurate, high quality and high performance rendering,
        which provides common APIs that work across a variety of hardware and
        software platforms, used by Chrome, Android, Flutter, Xamarin, Mozilla
        Firefox, Firefox OS, and many other products.
      </Text>
    </Content>
  </Container>
);
