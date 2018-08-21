import { Platform } from 'react-native'

const theme = {
  colors: {
    background: 'white',
    backgroundSecondary: 'rgb(242, 244, 245)',
    buttonPrimary: 'rgb(220, 60, 53)',
    buttonSecondary: 'rgb(243, 244, 245)',
    buttonTertiary: 'rgb(244, 89, 82)',
    buttonClicked: 'rgb(255, 212, 210)',
    fontPrimary: 'white',
    fontHeader: 'rgb(7, 12, 27)',
    headerClicked: 'rgb(211, 216, 223)',
    fontTitle: 'rgb(51, 51, 51)',
    fontSubtitle: {
      primary: 'rgb(148, 157, 170)',
      secondary: 'rgb(255, 95, 88)',
    },
    fontDescription: {
      primary: 'rgb(176, 186, 200)',
      secondary: 'rgb(128, 128, 128)',
      tertiary: 'rgb(69, 77, 88)',
      quaternary: 'rgb(148,157,170)',
    },
    border: 'rgb(230, 230, 230)',
    fontTag: 'white',
    fontCard: 'white',
    fontButtonPrimary: 'white',
    fontButtonSecondary: 'rgb(100, 108, 132)',
    fontButtonTertiary: 'rgb(244, 89, 82)',
    fontButtonQuaternary: 'rgb(39, 43, 49)',
    fontProfileFields: 'rgb(244, 89, 82)',
    fontReviewFields: 'rgb(244, 89, 82)',
    shadow: 'rgb(15, 16, 26)',
    chatCardBorder: 'rgba(142, 142, 147, 0.12)',
    textArea: 'rgb(249, 249, 249)',
    textAreaBorder: 'rgb(211, 216, 223)',
    textAreaText: 'rgb(69,77,88)',
    messageBubbleCurrentUser: 'rgb(244, 89, 82)',
    messageBubbleOtherUser: 'rgb(75, 67, 91)',
    like: 'rgba(119, 210, 103, 0.8)',
    dislike: 'rgba(221, 91, 91, 0.8)',
    divider: 'rgb(243, 244, 245)',
    profileTitle: 'rgb(39, 43, 49)',
    progressBarEmpty: 'rgb(235, 240, 247)',
    progressBarPrimary: 'rgb(119, 210, 103)',
    textInputBorder: 'rgb(229, 223, 242)',
    pickerPlaceholder: 'rgb(139, 133, 150)',
    activeTag: 'rgb(92, 78, 121)',
    cardLoading: 'rgb(100, 108, 132)',
    pictureHeaderTint: 'rgba(0, 0, 0, 0.3)',
    eventCardTint: 'rgba(0, 0, 0, 0.4)',
    confirmation: 'rgb(119, 210, 103)',
    facebookBlue: 'rgb(59,89,152)',
    facebookBorder: 'rgb(45,73,134)',
    linkedInBlue: 'rgb(1, 119, 181)',
    linkedInBorder: 'rgb(8, 92, 144)',
    splashBackground: 'rgb(247, 249, 252)',
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
        semiBold: 'Roboto-Medium',
        medium: 'Roboto-Medium',
        light: 'Roboto-Light',
        regular: 'Roboto-Regular',
      },
    },
  }),
}

export default theme
