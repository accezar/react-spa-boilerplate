/* eslint-disable no-console */
import Header from 'components/common/layout/Header';
import Hero from 'components/common/layout/Heading';
import Footer from 'components/common/layout/Footer';
import Box from '@cavilha/box';
import Flex from '@cavilha/flex';
import Text from '@cavilha/text';
import { Container, Row, Col } from '@cavilha/layout';

const GuestPage = (): JSX.Element => (
  <>
    <Flex alignItems="center" css={{ height: 'inherit', width: 'inherit' }}>
      <Container>
        <Row>
          <Col>
            <Header>
              <Hero title="Hello World!" />
            </Header>
            <Box css={{ p: 15, border: '1px solid black' }}>Guest Page</Box>
            <Footer>
              <Text as="span" textStyle="bodySmallSemibold">
                feito com ❤️ 
              </Text>
            </Footer>
          </Col>
        </Row>
      </Container>
    </Flex>
  </>
);

export default GuestPage;
