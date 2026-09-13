import { Anchor, Container, Text, createTheme, CSSVariablesResolver } from '@mantine/core'
import '@mantine/core/styles.css'

import containerStyles from './Container.module.css'

export const theme = createTheme({
  primaryColor: 'green',
  primaryShade: 6,
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'never',
        c: 'gray.9',
      },
    }),
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: size === 'responsive' ? containerStyles.responsiveContainer : undefined,
      }),
    }),
    Text: Text.extend({
      defaultProps: {},
    }),
  },
  breakpoints: {
    xs: '30em', // 480px
    sm: '48em', // 768px
    md: '64em', // 1024px
    lg: '74em', // 1184px
    xl: '90em', // 1440px
  },
})

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    '--mantine-color-text': theme.colors.gray[9],
  },
  dark: {
    '--mantine-color-text': theme.colors.dark[0],
  },
})
