import { Platform } from 'react-native'

const theme = {
  colors: {
    background: 'white',
    buttonPrimary: 'rgb(250, 53, 121)',
    fontHeader: 'rgb(7, 12, 27)',
    fontTitle: 'rgb(51, 51, 51)',
    fontSubtitle: 'rgb(148 157, 170)',
    fontDescription: 'rgb(176, 18, 200)',
    fontTag: 'white',
    fontButtonPrimary: 'white',
    fontButtonSecondary: 'rgb(100, 108, 132)',
    fontButtonTertiary: 'rgb(250, 53, 121)',
    fontProfileFields: 'rgb(78, 158, 255)',
  },
  width: {
    primary: '87.2%',
  },
  ...Platform.select({
    ios: {
      fonts: {
        bold: 'SFProDisplay-Bold',
        medium: 'SFProDisplay-Medium',
        light: 'SFProDisplay-Light',
      },
    },
    android: {
      fonts: {
        bold: 'Roboto-Bold',
        medium: 'Roboto-Medium',
        light: 'Roboto-Light',
      },
    },
  }),
}

export default theme
