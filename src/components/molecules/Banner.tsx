import styled from '@emotion/styled';
import {
  Button, Col, Row, Text,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
`;

export default () => (
  <Wrapper>
    <Col>
      <Text
        h1
        css={{
          '@xsMax': {
            fontSize: '22px',
          },
        }}
      >
        Skia4Delphi is a cross-platform 2D graphics
        <br />
        API for Delphi based on
        <br />
      </Text>
      <Text
        h1
        css={{
          textGradient: '90deg, $red500 0%, $yellow500 80%',
          '@xsMax': {
            fontSize: '22px',
          },
        }}
      >
        Google's Skia Graphics Library
      </Text>

      <Row css={{
        justifyContent: 'center',
        display: 'flex',
        paddingTop: 16,
        gap: 16,
        '@smMax': { flexWrap: 'wrap' },
      }}
      >
        <Link to="/about">
          <Button
            color="secondary"
            css={{
              padding: '$12',
              minWidth: 220,
            }}
          >
            <Col>
              <Text
                span
                css={{
                  fontSize: 20,
                  fontWeight: '$bold',
                  display: 'block',
                  height: 16,
                }}
              >
                Learn more
              </Text>
              <Text small>About Skia4Delphi</Text>
            </Col>
          </Button>
        </Link>
        <Button
          css={{ padding: '$12', minWidth: 220 }}
          color="primary"
          onClick={() => {
            window.location.href = 'https://github.com/viniciusfbb/skia4delphi/releases/latest';
          }}
        >
          <Col>
            <Text
              span
              css={{
                fontSize: 20,
                fontWeight: '$bold',
                display: 'block',
                height: 16,
              }}
            >
              Download
            </Text>
            <Text small>Latest version</Text>
          </Col>
        </Button>
      </Row>
    </Col>
  </Wrapper>
);
