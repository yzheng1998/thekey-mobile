import React, { Component } from 'react'
import FilterBlock from './components/FilterBlock'
import ReviewBlock from './components/ReviewBlock'
import ReviewPictureBlock from './components/ReviewPictureBlock'
import AddCompanyReviewModal from '../AddCompanyReviewModal'
import ButtonRow from '../../components/MainButtonRow'
import { Background } from './styles'
import { FlatList, View } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import LoadingWrapper from '../../components/LoadingWrapper'
import { reviewsLimit } from '../../../config'

const GET_COMPANY_REVIEWS = gql`
  query companyReviews(
    $companyReviewFilterInput: CompanyReviewFilterInput!
    $offset: Int
    $limit: Int
  ) {
    companyReviews(
      companyReviewFilterInput: $companyReviewFilterInput
      offset: $offset
      limit: $limit
    ) {
      nodes {
        id
        rating
        title
        pros
        cons
        reviewableCompany {
          id
        }
        employmentType
        current
        jobTitle
        location
        lastWorked
        createdAt
      }
      pageInfo {
        offset
        limit
      }
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
      offset: 0,
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
        reviewableCompanyId: companyId,
        employmentType: TABS[this.state.tab],
      },
      limit: reviewsLimit,
      offset: 0,
    }
    return (
      <Background>
        <Query query={GET_COMPANY_REVIEWS} variables={variables}>
          {({ loading, data, refetch, fetchMore }) => {
            if (loading) return <LoadingWrapper loading />
            return (
              <View>
                <FlatList
                  ListHeaderComponent={
                    <View>
                      <ReviewPictureBlock
                        picture={picture}
                        title={title}
                        rating={rating}
                        reviews={numReviews}
                        navigation={this.props.navigation}
                        companyId={companyId}
                        showAddReview={() =>
                          this.setState({
                            showAddReview: !this.state.showAddReview,
                          })
                        }
                      />
                      <ButtonRow navigation={this.props.navigation} />
                      <FilterBlock
                        updateState={this.changeTab}
                        selectedIndex={this.state.tab}
                      />
                    </View>
                  }
                  keyExtractor={review => review.id}
                  data={data.companyReviews.nodes}
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
                  onEndReachedThreshold={0.55}
                  onEndReached={() =>
                    fetchMore({
                      variables: {
                        ...variables,
                        offset: data.companyReviews.nodes.length,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev
                        return Object.assign({}, prev, {
                          companyReviews: Object.assign(
                            {},
                            prev.companyReviews,
                            {
                              nodes: [
                                ...prev.companyReviews.nodes,
                                ...fetchMoreResult.companyReviews.nodes.filter(
                                  n =>
                                    !prev.companyReviews.nodes.some(
                                      p => p.id === n.id,
                                    ),
                                ),
                              ],
                              pageInfo: fetchMoreResult.companyReviews.pageInfo,
                            },
                          ),
                        })
                      },
                    })
                  }
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
