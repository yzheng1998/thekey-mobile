import React, { Component } from 'react'
import Share, { ShareSheet } from 'react-native-share'
import { email, text } from 'react-native-communications'
import InviteButton from './components/InviteButton'

const EMAIL_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABC1BMVEUAAAA/Pz8/Pz9AQEA/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz9AQEA+Pj5AQEA/Pz87Ozs7Ozs/Pz8+Pj47OztAQEA/Pz89PT01NTVBQUFBQUE/Pz8/Pz8+Pj4/Pz9BQUE+Pj4/Pz8/Pz89PT0+Pj4/Pz9BQUFAQEA9PT09PT0/Pz87Ozs9PT05OTk/Pz8+Pj4/Pz9AQEA/Pz8/Pz8/Pz8/Pz+AgIA+Pj4/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz9AQEA+Pj4/Pz8+Pj4/Pz85OTk/Pz8/Pz8/Pz8/Pz88PDw9PT0/Pz88PDw8PDw+Pj45OTlktUJVAAAAWXRSTlMA/7N4w+lCWvSx8etGX/XlnmRO7+1KY/fjOGj44DU7UvndMec/VvLbLj7YKyiJdu9O7jZ6Um1w7DnzWQJz+tpE6uY9t8D9QehAOt7PVRt5q6duEVDwSEysSPRjqHMAAAEfSURBVEjH7ZTXUgIxGEa/TwURUFyKYgMURLCvbe2gYAV7ff8nMRksgEDiKl7lXOxM5p8zO3s2CWAwGAx/CjXontzT25Y+pezxtpv2+xTygJ+BYOvh4BBDwx1lKxxhNNZqNjLK+JjVWUYsykj4+2h8gpNTUMkIBuhPNE+SKU7PQC3D62E60ziYzXIuBx0Z+XRTc9F5fgF6MhKNzWXnRejKWGJdc9GZy8AP3kyurH52Ju01XTkjvnldNN+Qi03RecthfFtPlrXz8rmzi739Ax7mUCjy6FhH/vjPonmqVD6pdT718excLX/tsItLeRAqtc7VLIsFlVy/t6+ub27v7t8XD490niy3p+rZpv3i+jy/Or+5SUrdvcNcywaDwfD/vAF2TBl+G6XvQwAAAABJRU5ErkJggg=='

const TEXT_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCgEAMzMu72vLAAABL0lEQVQ4y5WUPUsDQRCGHz0/DgtJo6QRDBFbO7G1s7MQKyFoE7D0X0QI2IhNCsUmICqKlYWVhZ1YCoKIhCDqSbgmMeGIxR66czcbk2ebe4d754MdFgxFArrKqbOOYAgAj08ycaRKCGRZjfUT82mDT5NDQtJkWflNZeHTZRaNJRoyMMyADGwYSehRSuQtPUHABRBxxJU2wxqbjk4uTTfJCjM8ABl8Ef2iTZMxWmmDYY+c0PucumYwbPU/tOFE3i67VHsbNvCE/v6vQpEpoa+56214JBD6zV2hxThwoyTxiDTDOccs80yFHaat+CSvdMBe7xwvcaY5ytS45xZYoMIiEFK38ybX+51C/JVab33obc5woK+383e7pb9T48NSDa1CR4RLHIh5VOxnpk3kfmZ+AP3eYDEEDGXNAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEwLTAxVDAwOjUxOjUxKzAyOjAw0j7ZPwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMC0wMVQwMDo1MTo1MSswMjowMKNjYYMAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC'

const MORE_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAQlBMVEUAAABEREQ9PT0/Pz8/Pz9AQEA7OzszMzM/Pz8/Pz9FRUU/Pz8/Pz9VVVUAAAA/Pz8+Pj4/Pz8/Pz9BQUFAQEA/Pz+e9yGtAAAAFnRSTlMAD5bv9KgaFJ/yGv+zAwGltPH9LyD5QNQoVwAAAF5JREFUSMft0EkKwCAQRFHHqEnUON3/qkmDuHMlZlVv95GCRsYAAAD+xYVU+hhprHPWjDy1koJPx+L63L5XiJQx9PQPpZiOEz3n0qs2ylZ7lkyZ9oyXzl76MAAAgD1eJM8FMZg0rF4AAAAASUVORK5CYII='

export default class ShareMenu extends Component {
  render() {
    const shareOptions = {
      title: 'React Native',
      message: 'Download The Key here: ',
      url: 'http://onelink.to/ywz9nu',
      subject: 'Share Link',
    }

    return (
      <ShareSheet
        visible={this.props.visible}
        onCancel={this.props.toggleInviteFriendModal}
      >
        <InviteButton
          iconSrc={{ uri: EMAIL_ICON }}
          onPress={() => {
            this.props.toggleInviteFriendModal()
            email(
              null,
              null,
              null,
              null,
              'Join the key! https://itunes.apple.com/us/app/the-key-society/id1397945385?mt=8',
            )
          }}
        >
          Email
        </InviteButton>
        <InviteButton
          iconSrc={{ uri: TEXT_ICON }}
          onPress={() => {
            this.props.toggleInviteFriendModal()
            text(null, 'Join the key! http://onelink.to/ywz9nu')
          }}
        >
          Text
        </InviteButton>
        <InviteButton
          iconSrc={{ uri: MORE_ICON }}
          onPress={() => {
            this.props.toggleInviteFriendModal()
            Share.open(shareOptions)
          }}
        >
          More
        </InviteButton>
      </ShareSheet>
    )
  }
}
