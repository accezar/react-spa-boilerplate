import { styled, StitchesVariants, CSS } from '@cavilha/theme';

export const AuthModuleTemplateBackground = styled('div', {
  border: '1px solid aqua',
  width: 450,
  backgroundSize: 'cover',
  minHeight: '100%',
  overflow: 'hidden',
});

export const AuthModuleTemplateContent = styled('div', {
  border: '1px solid red',
  background: 'red',
  width: 'calc(100% - 450px)',
});

export const AuthModuleTemplate = styled('div', {
  display: 'flex',
  minHeight: '100%',
  variants: {
    layout: {
      page: {
        flexDirection: 'column',
        '&:nth-child(1)': {
          width: '100%',
        },
      },
      splitted: {
        height: '100%',
        width: '100%',
        background: 'orange',
        flexDirection: 'row-reverse',
      },
    },
    debug: {
      true: {
        border: '1px solid orange',
      },
    },
  },
});

export type Variants = StitchesVariants<typeof AuthModuleTemplate> & { css?: CSS };
