import { Platform, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const theme = {
  colors: {
    background: 'white',
    buttonPrimary: 'rgb(250, 53, 121)',
    fontPrimary: 'white',
    fontHeader: 'rgb(7, 12, 27)',
    fontTitle: 'rgb(51, 51, 51)',
    fontSubtitle: {
      primary: 'rgb(148, 157, 170)',
      secondary: 'rgb(255, 149, 239)',
    },
    fontDescription: {
      primary: 'rgb(176, 18, 200)',
      secondary: 'rgb(128, 128, 128)',
      tertiary: 'rgb(51, 51, 51)',
    },
    fontButtonSecondary: 'rgb(100, 108, 132)',
    fontProfileFields: 'rgb(78, 158, 255)',
  },
  width: {
    primary: 0.872 * width,
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
