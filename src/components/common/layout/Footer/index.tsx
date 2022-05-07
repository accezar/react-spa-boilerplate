import Box from '@cavilha/box';

type FooterProps = {
  children?: React.ReactNode;
};

const Footer = ({ children }: FooterProps): JSX.Element => (
  <Box css={{ ta: 'right', mt: 25, p: 15, border: '1px solid black' }}>{children}</Box>
);

export default Footer;
