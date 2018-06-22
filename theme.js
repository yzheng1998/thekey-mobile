import { Platform, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const theme = {
  colors: {
    background: 'white',
    buttonPrimary: 'rgb(250, 53, 121)',
    fontHeader: 'rgb(7, 12, 27)',
    fontTitle: 'rgb(51, 51, 51)',
    fontSubtitle: 'rgb(148,157, 170)',
    fontDescription: 'rgb(176, 186, 200)',
    fontTag: 'white',
    fontCard: 'white',
    fontButtonPrimary: 'white',
    fontButtonSecondary: 'rgb(100, 108, 132)',
    fontButtonTertiary: 'rgb(250, 53, 121)',
    fontProfileFields: 'rgb(78, 158, 255)',
    textArea: 'rgb(249,249,249)',
    textAreaText: 'rgb(69,77,88)',
    textAreaBorder: 'rgb(211, 216, 223)',
    messageBubbleCurrentUser: 'rgb(250, 53, 121)',
    messageBubbleOtherUser: 'rgb(75, 67, 91)',
    messageBubbleText: 'white',
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
        regular: 'SFProDisplay-Regular',
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
