import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 24px;
  color: ${themeGet('colors.fontTag')};
  margin-top: 10px;
`
export const Company = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 18px;
  color: ${themeGet('colors.fontTag')};
`
export const Description = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 14px;
  color: ${themeGet('colors.fontTag')};
  margin-top: 3px;
`
export const Deadline = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 12px;
  color: ${themeGet('colors.fontTag')};
  margin-top: 3px;
  margin-bottom: 64px;
`
export const Apply = styled.TouchableOpacity`
  height: 45;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: ${props =>
    props.hasApplied ? 'rgb(119, 210, 103)' : themeGet('colors.buttonPrimary')};
  align-items: center;
  justify-content: center;
  padding: ${props => (props.hasApplied ? '5px' : '14px')};
`
export const ApplyButtonText = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 14px;
  color: white;
`
export const AppliedButtonText = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 13px;
  color: white;
  margin-left: 3px;
`
export const DescriptionContainer = styled.View`
  align-items: center;
  margin-top: 12px;
  margin-bottom: 4px;
`
export const HeaderContainer = styled.View`
  flex: 1;
`
export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`
