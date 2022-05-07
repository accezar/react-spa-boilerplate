import Box from '@cavilha/box';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = ({ children }: HeaderProps): JSX.Element => (
  <Box css={{ my: 10, border: '1px solid black', p: 15 }}>{children}</Box>
);

export default Header;
