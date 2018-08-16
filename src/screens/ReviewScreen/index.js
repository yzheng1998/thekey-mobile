import React, { Component } from 'react'
import FilterBlock from './components/FilterBlock'
import ReviewBlock from './components/ReviewBlock'
import ReviewPictureBlock from './components/ReviewPictureBlock'
import AddCompanyReviewModal from '../AddCompanyReviewModal'
import BackButton from 'react-native-vector-icons/Ionicons'
import { Background, Header, BackButtonContainer } from './styles'
import { FlatList, View } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import LoadingWrapper from '../../components/LoadingWrapper'

const GET_COMPANY_REVIEWS = gql`
  query companyReviews($companyReviewFilterInput: CompanyReviewFilterInput!) {
    companyReviews(companyReviewFilterInput: $companyReviewFilterInput) {
      id
      rating
      title
      pros
      cons
      employmentType
      current
      jobTitle
      location
      company {
        id
      }
      lastWorked
      createdAt
    }
  }
`

const TABS = [null, 'FULLTIME', 'PARTTIME', 'INTERNSHIP']

export default class ReviewScreen extends Component {
  constructor(props) {
    super(props)
    const { companyId, picture, title } = props.navigation.state.params
    this.state = {
      tab: 0,
      showAddReview: false,
      companyId,
      picture,
      companyName: title,
    }
  }

  changeTab = value => {
    this.setState({ tab: value })
  }
  render() {
    const {
      title,
      companyId,
      rating,
      picture,
      numReviews,
      refetchCompanies,
    } = this.props.navigation.state.params
    const variables = {
      companyReviewFilterInput: {
        companyId,
        employmentType: TABS[this.state.tab],
      },
    }
    return (
      <Background>
        <ReviewPictureBlock
          picture={picture}
          title={title}
          rating={rating}
          reviews={numReviews}
          navigation={this.props.navigation}
          companyId={companyId}
          showAddReview={() =>
            this.setState({ showAddReview: !this.state.showAddReview })
          }
        />
        <Header>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
            <BackButton name="ios-arrow-back" size={30} color="white" />
          </BackButtonContainer>
        </Header>
        <FilterBlock
          updateState={this.changeTab}
          selectedIndex={this.state.tab}
        />
        <Query query={GET_COMPANY_REVIEWS} variables={variables}>
          {({ loading, data, refetch }) => {
            if (loading) return <LoadingWrapper loading />
            return (
              <View>
                <FlatList
                  keyExtractor={review => review.id}
                  data={data.companyReviews}
                  renderItem={({ item: review }) => (
                    <ReviewBlock
                      subject={review.title}
                      date={review.createdAt}
                      rating={review.rating}
                      role={
                        review.current ? 'Current Employee' : 'Former Employee'
                      }
                      position={review.jobTitle}
                      location={review.location}
                      pros={review.pros}
                      cons={review.cons}
                    />
                  )}
                />
                <AddCompanyReviewModal
                  refetchCompanies={refetchCompanies}
                  refetchReviews={refetch}
                  state={this.state}
                  isVisible={this.state.showAddReview}
                  hideAddReview={() =>
                    this.setState({
                      showAddReview: !this.state.showAddReview,
                    })
                  }
                />
              </View>
            )
          }}
        </Query>
      </Background>
    )
  }
}
