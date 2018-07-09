import React, { Component } from 'react'
import {
  ProfileInfoRowContainer,
  TextContainer,
  Title,
  Subtitle,
  Years,
  EditButton,
} from './styles'
import EditPencil from 'react-native-vector-icons/MaterialIcons'

export default class ProfileInfoRow extends Component {
  render() {
    const {
      title,
      subtitle1,
      subtitle2,
      startYear,
      endYear,
      onPress,
    } = this.props
    const subtitleArray = [subtitle1, subtitle2].filter(Boolean)
    const yearArray = [startYear, endYear].filter(Boolean)
    return (
      <ProfileInfoRowContainer>
        <TextContainer>
          <Title>{title}</Title>
          {subtitleArray.length > 0 && (
            <Subtitle>{subtitleArray.join(', ')}</Subtitle>
          )}
          {yearArray.length > 0 && <Years>{yearArray.join(' - ')}</Years>}
        </TextContainer>
        {this.props.showEditButton && (
          <EditButton onPress={onPress}>
            <EditPencil name="edit" color="black" size={15} />
          </EditButton>
        )}
      </ProfileInfoRowContainer>
    )
  }
}
