import React, { Component } from 'react'
import { Background } from './styles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LoadingWrapper from '../../../../components/LoadingWrapper'
import SwitchList from '../SwitchList'
import SwitchListHeader from '../SwitchListHeader'
import { waysToMeetOptions } from '../../../../constants'

const GET_WAYS_TO_MEET = gql`
  query waysToMeet {
    waysToMeet {
      id
      wayToMeet
    }
  }
`
export default class EditWaysToMeetModal extends Component {
  render() {
    const {
      isVisible,
      toggleModal,
      preferredWaysToMeet,
      addWayToMeet,
      removeWayToMeet,
    } = this.props
    return (
      <Background
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={isVisible}
      >
        <SwitchListHeader title="Preferred ways to meet" goBack={toggleModal} />
        <Query query={GET_WAYS_TO_MEET}>
          {({ loading, data }) => {
            if (loading) return <LoadingWrapper loading />
            const cleanedData = data.waysToMeet.map(wayToMeet => {
              const wayToMeetDisplayInfo = waysToMeetOptions.find(
                emoji => emoji.value === wayToMeet.wayToMeet,
              )
              return { ...wayToMeet, ...wayToMeetDisplayInfo }
            })
            return (
              <SwitchList
                data={cleanedData}
                currentSelections={preferredWaysToMeet}
                addValue={addWayToMeet}
                removeValue={removeWayToMeet}
              />
            )
          }}
        </Query>
      </Background>
    )
  }
}
