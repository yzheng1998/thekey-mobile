import styled from 'styled-components'

export const Background = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  flex: 1;
`
export const List = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  flex: 1;
  width: 100%;
  align-self: center;
`
