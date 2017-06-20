import React from 'react'
import {
  Button,
  Card,
  PropTypes,
  PureComponent,
  ScrollView,
  Text,
  View
} from 'react-native-mdcore'

export default class Example extends PureComponent {

  static contextTypes = {
    theme: PropTypes.any
  }

  render() {
    const { theme } = this.context
    return (
      <View style={{ flex: 1, paddingTop: 32, backgroundColor: theme.palette.backgroundDark }}>
        <View style={{ padding: 16 }}>
          <Card>
            <View>
              <Text>Hello</Text>
            </View>
          </Card>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <Button
              title="Hello"
              onPress={() => { }} />
            <Button
              palette="primary"
              title="Hello"
              onPress={() => { }} />
            <Button
              palette="accent"
              title="Hello"
              onPress={() => { }} />
            <Button
              palette="warn"
              title="Hello"
              onPress={() => { }} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Button
              title="Hello"
              type="borderless"
              onPress={() => { }} />
            <Button
              palette="primary"
              title="Hello"
              type="borderless"
              onPress={() => { }} />
            <Button
              palette="accent"
              title="Hello"
              type="borderless"
              onPress={() => { }} />
            <Button
              palette="warn"
              title="Hello"
              type="borderless"
              onPress={() => { }} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
