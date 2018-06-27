import { Platform, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const theme = {
  colors: {
    background: 'white',
    buttonPrimary: 'rgb(250, 53, 121)',
    fontHeader: {
      primary: 'rgb(7, 12, 27)',
      secondary: 'white',
    },
    fontTitle: {
      primary: 'rgb(51, 51, 51)',
      secondary: 'white',
    },
    fontSubtitle: {
      primary: 'rgb(148, 157, 170)',
      secondary: 'white',
    },
    fontDescription: {
      primary: 'rgb(176, 186, 200)',
      secondary: 'white',
      tertiary: 'rgb(128, 128, 128)',
      quaternary: 'rgb(51, 51, 51)',
    },
    border: 'rgb(230, 230, 230)',
    fontTag: 'white',
    fontCard: 'white',
    fontButtonPrimary: 'white',
    fontButtonSecondary: 'rgb(100, 108, 132)',
    fontButtonTertiary: 'rgb(250, 53, 121)',
    fontProfileFields: 'rgb(78, 158, 255)',
    chatCardBorder: 'rgba(142, 142, 147, 0.12)',
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
        heavy: 'Roboto-Heavy',
      },
    },
  }),
}

export default theme
