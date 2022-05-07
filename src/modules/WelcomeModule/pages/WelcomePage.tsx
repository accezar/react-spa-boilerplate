/* eslint-disable no-console */
import Header from 'components/common/layout/Header';
import Hero from 'components/common/layout/Heading';
import Footer from 'components/common/layout/Footer';
import Box from '@cavilha/box';
import Text from '@cavilha/text';
import { Container, Row, Col } from '@cavilha/layout';
import useWelcomePageContent from 'hooks/useWelcomePageContent';

const WelcomPage = (): JSX.Element => {
  const [data, isLoading, isError] = useWelcomePageContent();

  return (
    <>
      {isLoading ? (
        <p>Carregando..</p>
      ) : (
        <Container fluid>
          {isError}
          <Row>
            <Col>
              <Header>
                <Hero title={data?.data?.text} />
              </Header>
              <Box css={{ p: 15, border: '1px solid black' }}>
                Modulo de boas vindas! Esta rota é protegida.
              </Box>
              <Footer>
                <Text as="span" textStyle="bodySmallSemibold">
                  feito com ❤️
                </Text>
              </Footer>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default WelcomPage;
