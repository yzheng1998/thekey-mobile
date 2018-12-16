import React, { Component } from 'react'
import { Background } from './styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../../../components/LoadingWrapper'
import SwitchList from '../SwitchList'
import SwitchListHeader from '../SwitchListHeader'
import { currentInitiativesOptions } from '../../../../constants'

const GET_INITIATIVES = gql`
  query initiatives {
    initiatives {
      id
      initiative
    }
  }
`
export default class EditWaysToMeetModal extends Component {
  render() {
    const {
      isVisible,
      toggleModal,
      currentInitiatives,
      addInitiative,
      removeInitiative,
    } = this.props
    return (
      <Background
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={isVisible}
      >
        <SwitchListHeader title="Current Initiatives" goBack={toggleModal} />
        <Query query={GET_INITIATIVES}>
          {({ loading, data }) => {
            if (loading) return <LoadingWrapper loading />
            const cleanedData = data.initiatives.map(initiative => {
              const initiativeDisplayInfo = currentInitiativesOptions.find(
                emoji => emoji.value === initiative.initiative,
              )
              return { ...initiative, ...initiativeDisplayInfo }
            })
            return (
              <SwitchList
                data={cleanedData}
                currentSelections={currentInitiatives}
                addValue={addInitiative}
                removeValue={removeInitiative}
              />
            )
          }}
        </Query>
      </Background>
    )
  }
}
