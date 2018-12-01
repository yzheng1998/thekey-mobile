import React, { Component } from 'react'
import { DatePickerAndroid } from 'react-native'
import Error from '../../components/Error'

export default class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
    }
    const { setDate, doneOnPress, date } = props
    this.openDatePicker = async () => {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date,
          mode: 'spinner',
        })
        if (action !== DatePickerAndroid.dismissedAction) {
          setDate(new Date(year, month, day))
          doneOnPress()
        } else if (action === DatePickerAndroid.dismissedAction) {
          doneOnPress()
        }
      } catch ({ code, message }) {
        this.setState({ error: `Cannot open date picker: ${message}` })
      }
    }
  }

  render() {
    return <Error error={this.state.error} />
  }
}
