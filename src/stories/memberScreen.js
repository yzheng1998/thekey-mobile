import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'

import MemberScreen from '../screens/MemberScreen'

import { tagData } from './SocietyCard'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

const experience = [
  {
    companyName: 'Unfiltered Network',
    position: 'CEO',
    startYear: '2016',
    endYear: 'Present / 1yr 9 mos',
    id: 0,
  },
  {
    companyName: 'Facemovie',
    position: 'Graphic Designer',
    startYear: '2010',
    endYear: '2016',
    id: 1,
  },
]

const education = [
  {
    schoolType: 'UNDERGRADUATE',
    schoolName: 'Harvard University',
    degreeType: 'Bachelors Degree',
    major: 'East Asian Studies',
    startYear: '2013',
    graduationYear: '2017',
    id: 0,
  },
  {
    schoolType: 'GRADUATE',
    schoolName: 'Beachwood High School',
    startYear: '2009',
    graduationYear: '2013',
    id: 1,
  },
]
const user = {
  id: 123,
  email: 'yz@g.com',
  firstName: 'Yuke',
  lastName: 'Zheng',
  birthday: '12/28/1998',
  gender: 'MALE',
  hometown: 'Cleveland',
  state: 'Ohio',
  major: 'Chemistry',
  bio:
    'Lorem ipsum dolor sit amet, viderer luptatum molestiae duo id, nisl movet imperdiet id sea. Mea ea soluta sapientem, nam cu natum idque discere. Qui et possim tibique. Mea et choro invenire platonem. Aperiri evertitur usu ei, ius no mucius verterem cotidieque, et vim atomorum incorrupte definitiones. Velit eruditi mel eu. Summo veniam apeirian nec in, in eligendi molestiae intellegat vim, invidunt partiendo vel ex. No prima graecis vix, eum legere fabellas legendos et. An semper molestie mel, no causae facilisis his.',
  tags: tagData,
  resume: 'temp',
  linkedIn: 'linkedin.com/yukezheng',
  facebook: 'facebook.com/yukezheng',
  twitter: '@yukezheng',
  profilePicture: {
    uri:
      'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
  },
  quote: 'Temporary quote',
  highSchool: 'Beachwood High School',
  college: 'Harvard University',
  education,
  graduateSchool: 'Stanford University',
  interestingFact: 'I can ride the unicycle!',
  ethnicity: 'ASIAN',
  preferredWayToMeet: 'Drinks!',
  workExperience: experience,
  lookingFor: 'Business Mentor',
  goodQualities: 'Lorem Ipsum',
}

storiesOf('CenteredView').add('MemberScreen', () => (
  <CenteredView>
    <MemberScreen user={user} />
  </CenteredView>
))
