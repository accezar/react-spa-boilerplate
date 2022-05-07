import Text from '@cavilha/text';
import Box from '@cavilha/box';

type HeroProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
};

const Hero = ({ title, backgroundImage, subtitle, children }: HeroProps): JSX.Element => (
  <Box css={{ backgroundImage: `url(${backgroundImage})` }}>
    <Text as="h1" textStyle="hero" css={{ mb: 15 }}>
      {title}
    </Text>

    {subtitle && <Text as="h2">{subtitle}</Text>}

    {children && <Box>{children}</Box>}
  </Box>
);

export default Hero;
