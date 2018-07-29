import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const SafeView = styled.SafeAreaView`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
export const BackButton = styled.TouchableOpacity``

export const HeaderContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 16px;
  position: absolute;
`
export const TitleContainer = styled.View`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
`
export const TruncateTitle = styled.View`
  width: 40%;
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  font-size: 17px;
  color: black;
  font-family: ${themeGet('fonts.heavy')};
`
export const AvatarContainer = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
`
export const AvatarRowContainer = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-right: 16px;
`
export const Avatar = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 15px;
`
