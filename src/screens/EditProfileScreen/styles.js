import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Screen = styled.View`
  flex: 1;
  padding-top: 15px;
  width: 100%;
  background-color: ${themeGet('colors.background')};
`

export const ScreenScroll = styled.ScrollView`
  width: 100%;
`

export const Block = styled.View`
  margin-top: 8px;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
`

export const Divider = styled.View`
  width: 100%;
  height: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${themeGet('colors.divider')};
`

export const Picture = styled.ImageBackground`
  align-self: center;
  margin-top: 24px;
  margin-bottom: 12px;
  height: 123px;
  width: 123px;
  border-radius: ${123 / 2}px;
  overflow: hidden;
`

export const PictureButton = styled.TouchableOpacity`
  height: 29px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.33);
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const EditLabel = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontCard')};
  font-size: 13;
  margin-left: 3;
`

export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const ColumnContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Title = styled.Text`
  flex: 1;
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
`

export const Input = styled.TextInput`
  flex: 2;
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontProfileFields')};
`

export const TagText = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontProfileFields')};
`
export const LargeInput = styled.TextInput`
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontProfileFields')};
`

export const BlockTitle = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
`
export const EditTagsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const EditTagsButton = styled.TouchableOpacity``
export const ContactContent = styled.TextInput`
  font-size: 18px;
  font-family: ${themeGet('fonts.light')};
  line-height: 23px;
  color: ${themeGet('colors.fontProfileFields')};
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 5px;
`

export const ContactContainer = styled.View`
  margin-bottom: 12px;
`

export const Contact = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
`

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  margin-top: 5;
  margin-bottom: 5;
  padding-left: 16;
  padding-right: 16;
`

export const PickerContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`

export const PickerText = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontProfileFields')};
`

export const PickerButton = styled.TouchableOpacity`
  flex: 2;
  justify-content: space-between;
  flex-direction: row;
`

export const PickerView = styled.Picker`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`

export const DoneButton = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet('colors.divider')};
`

export const DoneButtonText = styled.Text`
  font-size: 16px;
  color: black;
  font-family: ${themeGet('fonts.medium')};
`

export const WideContainer = styled.View``

export const ExperienceList = styled.View`
  margin-top: 5;
  margin-bottom: 5;
  width: 100%;
  padding-left: 16;
`

export const ModalContainer = styled.View`
  height: 35%;
  background-color: ${themeGet('colors.background')};
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
`

export const EmojiContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const EmojiWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100px;
`

export const EmojiButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin: 3px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.selected ? themeGet('colors.fontProfileFields') : 'transparent'};
`

export const Emoji = styled.Text`
  font-size: 30;
`
