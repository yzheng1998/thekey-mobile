import React, { Component } from 'react'
import { View } from 'react-native'
import ResumeItem from '../ResumeItem'

export default class ResumeList extends Component {
  render() {
    const { resumeListData, cancel, refetch } = this.props
    return (
      <View>
        {resumeListData &&
          resumeListData.map(item => {
            const { id, dataSize, title, progress } = item
            return (
              <ResumeItem
                refetch={refetch}
                cancel={cancel}
                key={id}
                id={id}
                dataSize={dataSize}
                title={title}
                progress={progress}
              />
            )
          })}
      </View>
    )
  }
}
