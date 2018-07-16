import { Platform, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const theme = {
  colors: {
    background: 'white',
    backgroundSecondary: 'rgb(242, 244, 245)',
    buttonPrimary: 'rgb(250, 53, 121)',
    buttonSecondary: 'rgb(243, 244, 245)',
    buttonClicked: 'rgb(253, 205, 221)',
    fontPrimary: 'white',
    fontHeader: 'rgb(7, 12, 27)',
    fontTitle: 'rgb(51, 51, 51)',
    fontSubtitle: {
      primary: 'rgb(148, 157, 170)',
      secondary: 'rgb(255, 149, 239)',
    },
    fontDescription: {
      primary: 'rgb(176, 186, 200)',
      secondary: 'rgb(128, 128, 128)',
      tertiary: 'rgb(69, 77, 88)',
    },
    border: 'rgb(230, 230, 230)',
    fontTag: 'white',
    fontCard: 'white',
    fontButtonPrimary: 'white',
    fontButtonSecondary: 'rgb(100, 108, 132)',
    fontButtonTertiary: 'rgb(250, 53, 121)',
    fontButtonQuaternary: 'rgb(39, 43, 49)',
    fontProfileFields: 'rgb(250, 53, 121)',
    fontReviewFields: 'rgb(250, 53, 121)',
    shadow: 'rgb(15, 16, 26)',
    chatCardBorder: 'rgba(142, 142, 147, 0.12)',
    textArea: 'rgb(249, 249, 249)',
    textAreaBorder: 'rgb(211, 216, 223)',
    textAreaText: 'rgb(69,77,88)',
    messageBubbleCurrentUser: 'rgb(250, 53, 121)',
    messageBubbleOtherUser: 'rgb(75, 67, 91)',
    like: 'rgba(119, 210, 103, 0.8)',
    dislike: 'rgba(221, 91, 91, 0.8)',
    divider: 'rgb(243, 244, 245)',
    profileTitle: 'rgb(39, 43, 49)',
    textInputBorder: 'rgb(229, 223, 242)',
  },
  width: {
    primary: 0.872 * width,
  },
  ...Platform.select({
    ios: {
      fonts: {
        heavy: 'SFProDisplay-Heavy',
        bold: 'SFProDisplay-Bold',
        semiBold: 'SFProDisplay-Semibold',
        medium: 'SFProDisplay-Medium',
        light: 'SFProDisplay-Light',
        regular: 'SFProDisplay-Regular',
      },
    },
    android: {
      fonts: {
        heavy: 'Roboto-Bold',
        bold: 'Roboto-Bold',
        medium: 'Roboto-Medium',
        light: 'Roboto-Light',
        regular: 'Roboto-Regular',
      },
    },
  }),
}

export default theme
