import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatListDemo from './src/Components/FlatListDemo'
import NestedFlatList from './src/Components/NestedFlatList'
import MultiViewFlatList from './src/Components/MultiViewFlatList'
import RefreshingFlatlist from './src/Components/RefreshingFlatlist'

const App = () => {
  return (
      // <FlatListDemo/>
      // <NestedFlatList/>
      // <MultiViewFlatList/>
      <RefreshingFlatlist/>
  )
}

export default App

const styles = StyleSheet.create({})