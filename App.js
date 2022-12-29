import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import Config from 'react-native-config'

global.appConfig = {
  envName: Config.ENV,
  buildVersion: Config.BUILD_VERSION,
  appVersion: Config.APP_VERSION,
  appName: Config.APP_NAME,
  appId: Config.APP_ID,
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ENV : {appConfig.envName}</Text>
      <Text>Build Version : {appConfig.buildVersion}</Text>
      <Text>App Version : {appConfig.appVersion}</Text>
      <Text>APP Name: {appConfig.appName}</Text>
      <Text>APP ID : {appConfig.appId}</Text>
      <Image source={require('@images/marker.png')}></Image>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default App
