import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { ListContainer, ListItem, ListItemTitle, Footing } from './styles'
import Switch from 'react-native-switch-pro'

const ListItemWithSwitch = ({
  title,
  removeValue,
  addValue,
  disabled,
  value,
  item,
}) => (
  <ListItem>
    <ListItemTitle>{title}</ListItemTitle>
    <Switch
      backgroundActive="rgb(220, 60, 53)"
      disabled={disabled}
      value={value}
      onSyncPress={newValue => {
        if (newValue) addValue(item)
        else removeValue(item)
      }}
    />
  </ListItem>
)

export default class SwitchList extends Component {
  static defaultProps = {
    currentSelections: [],
    removeValue: () => null,
    addValue: () => null,
  }
  render() {
    const { data, currentSelections, removeValue, addValue } = this.props
    const disableNewAdditions = currentSelections.length >= 3
    return (
      <ListContainer>
        <FlatList
          ListFooterComponent={<Footing />}
          keyExtractor={item => item.id}
          data={data}
          renderItem={({ item }) => {
            const value = currentSelections.some(el => el.id === item.id)
            return (
              <ListItemWithSwitch
                item={item}
                title={item.label}
                removeValue={removeValue}
                addValue={addValue}
                disabled={disableNewAdditions && !value}
                value={value}
              />
            )
          }}
        />
      </ListContainer>
    )
  }
}
