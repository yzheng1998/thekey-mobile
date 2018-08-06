import React, { Component } from 'react'
import { Text } from 'react-native'
import { ScreenContainer, Divider, SecondaryTitle } from './styles'
import MyProfilePicBlock from './components/MyProfilePicBlock'
import MyProfileBioBlock from './components/MyProfileBioBlock'
import ButtonRowView from './components/ButtonRowView'
import Description from './components/Description'
import EducationListView from './components/EducationListView'
import ExperienceListView from './components/ExperienceListView'
import ContactContainerView from './components/ContactContainerView'
import EventsInCommon from './components/EventsInCommon'
import ReportUserModal from './components/ReportUserModal'
import { Query } from 'react-apollo'
import { GET_USER } from './query'
import nodeEmoji from 'node-emoji'
import ActionSheet from 'react-native-actionsheet'

const defaultProfilePicture =
  'https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc363c8e033813d4f7b798846bb13a24&auto=format&fit=crop&w=582&q=80'

const lookingForOptions = [
  { label: 'Business Mentor', value: 'BUSINESSMENTOR' },
  { label: 'Friends', value: 'FRIENDS' },
  { label: 'Business Partner', value: 'BUSINESSPARTNER' },
  { label: 'Employment', value: 'EMPLOYMENT' },
  { label: 'School Advice', value: 'SCHOOLADVICE' },
]

export default class MemberScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showReportUserModal: false,
    }
  }
  showActionSheet = () => {
    this.ActionSheet.show()
  }
  render() {
    return (
      <Query
        query={GET_USER}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ loading, data, refetch }) => {
          if (loading) return <Text>`Loading...`</Text>
          const {
            id,
            email,
            firstName,
            lastName,
            demographics,
            bio,
            linkedIn,
            facebook,
            twitter,
            profilePicture,
            education,
            interestingFact,
            preferredWaysToMeet,
            tags,
            workExperiences,
            lookingFor,
            skills,
            mutualFriends,
            eventsInCommon,
            isFriend,
            hasFriendRequest,
          } = data.user
          const emojiList = preferredWaysToMeet.map(emoji =>
            nodeEmoji.get(emoji.wayToMeet.toLowerCase()),
          )
          return (
            <ScreenContainer>
              <ActionSheet
                ref={o => {
                  this.ActionSheet = o
                }}
                options={['Report', 'Cancel']}
                cancelButtonIndex={1}
                destructiveButtonIndex={0}
                onPress={() =>
                  this.setState({
                    showReportUserModal: true,
                  })
                }
              />
              <MyProfilePicBlock
                id={id}
                name={`${firstName} ${lastName}`}
                hometown={demographics.hometown}
                profilePic={profilePicture || defaultProfilePicture}
                mutualFriends={mutualFriends}
                navigation={this.props.navigation}
                isFriend={isFriend}
                hasFriendRequest={hasFriendRequest}
                refreshScreen={refetch}
              />
              <ButtonRowView
                reportUser={this.showActionSheet}
                goBack={() => this.props.navigation.goBack()}
                showSettings={() =>
                  this.setState({
                    showSettings: !this.state.showSettings,
                  })
                }
              />
              <MyProfileBioBlock tagData={tags} bioText={bio} />
              <Divider />
              <Description
                row
                title="Looking For"
                content={
                  lookingForOptions.find(el => el.value === lookingFor).label
                }
              />
              <Description
                row
                title="Preferred Ways To Meet"
                content={emojiList}
              />
              <Divider />
              <EducationListView educationData={education} />
              <ExperienceListView experienceData={workExperiences} />
              <SecondaryTitle>Events In Common</SecondaryTitle>
              <EventsInCommon
                navigation={this.props.navigation}
                events={eventsInCommon}
              />
              <Description
                row={false}
                title="Interesting Fact About Me"
                content={interestingFact}
              />
              <Description row={false} title="Skills" content={skills} />
              <ContactContainerView
                linkedIn={linkedIn}
                email={email}
                facebook={facebook}
                twitter={twitter}
              />
              <ReportUserModal
                reportedUserId={id}
                isVisible={this.state.showReportUserModal}
                closeModal={() =>
                  this.setState({
                    showReportUserModal: !this.state.showReportUserModal,
                  })
                }
              />
            </ScreenContainer>
          )
        }}
      </Query>
    )
  }
}
