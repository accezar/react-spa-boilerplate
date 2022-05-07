import { styled, StitchesVariants, CSS } from '@cavilha/theme';

export const WorkspaceLayout = styled('div', {
  display: 'flex',
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',

  variants: {
    layout: {
      full: {
        true: {
          height: '100%',
        },
      },
    },
    debug: {
      true: {
        border: '2px solid black',
      },
    },
  },
});

export const WorkspaceSidebarWrapper = styled('div', {
  border: '1px solid aqua',
  background: 'lightcyan',
  width: 250,
});

export const WorkspaceNavbarWrapper = styled('nav', {
  border: '1px solid red',
  display: 'block',
  background: 'red',
  width: '100%',
});

export const WorkspaceContentWrapper = styled('div', {
  border: '1px solid green',
  background: 'lightgreen',
  width: 'calc(100% - 250px)',
  display: 'flex',
});

export type Variants = StitchesVariants<typeof WorkspaceLayout> & { css?: CSS };
