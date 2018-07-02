import React, { Component } from 'react'
import { ScreenContainer, Divider } from './styles'

import MyProfilePicBlock from './components/MyProfilePicBlock'
import MyProfileBioBlock from './components/MyProfileBioBlock'
import ButtonRowView from './components/ButtonRowView'
import Description from './components/Description'
import EducationListView from './components/EducationListView'
import ExperienceListView from './components/ExperienceListView'
import ContactContainerView from './components/ContactContainerView'

export default class ProfileScreen extends Component {
  render() {
    // Placeholder data
    const tagData = [
      {
        name: 'Medicine',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Health',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Business',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Venture Capital',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Start-up',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Tech',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Dev',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Computer Engineering',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Basketball',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Photography',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Running',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        name: 'Swimming',
        image: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
    ]

    const experienceData = [
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

    const educationData = [
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
      education: educationData,
      graduateSchool: 'Stanford University',
      interestingFact: 'I can ride the unicycle!',
      ethnicity: 'ASIAN',
      preferredWayToMeet: 'Drinks!',
      workExperience: experienceData,
      lookingFor: 'Business Mentor',
      goodQualities: 'Lorem Ipsum',
    }
    const {
      email,
      firstName,
      lastName,
      hometown,
      state,
      bio,
      tags,
      linkedIn,
      facebook,
      twitter,
      profilePicture,
      education,
      interestingFact,
      preferredWayToMeet,
      workExperience,
      lookingFor,
      goodQualities,
      // } = this.props.user
    } = user
    return (
      <ScreenContainer>
        <MyProfilePicBlock
          name={`${firstName} ${lastName}`}
          city={hometown}
          state={state}
          profilePic={profilePicture}
        />
        <ButtonRowView goBack={() => this.props.navigation.goBack()} />
        <MyProfileBioBlock tagData={tags} bioText={bio} />
        <Divider />
        <Description row title="Looking For" content={lookingFor} />
        <Description
          row
          title="Preferred Way To Meet"
          content={preferredWayToMeet}
        />
        <Divider />
        <EducationListView educationData={education} />
        <Divider />
        <ExperienceListView experienceData={workExperience} />
        <Description
          row={false}
          title="Interesting Fact About Me"
          content={interestingFact}
        />
        <Description
          row={false}
          title="Good Qualities"
          content={goodQualities}
        />
        <ContactContainerView
          linkedIn={linkedIn}
          email={email}
          facebook={facebook}
          twitter={twitter}
        />
      </ScreenContainer>
    )
  }
}
