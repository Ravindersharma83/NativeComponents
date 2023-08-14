import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlatListDemo from './src/Components/FlatListDemo'
import NestedFlatList from './src/Components/NestedFlatList'
import MultiViewFlatList from './src/Components/MultiViewFlatList'
import RefreshingFlatlist from './src/Components/RefreshingFlatlist'
import FlatListLoadMore from './src/Components/FlatListLoadMore'
import AlertComponent from './src/Components/AlertComponent'
import DismissKeyboard from './src/Components/DismissKeyboard'
import SwitchComponent from './src/Components/SwitchComponent'
import SectionListDemo from './src/Components/SectionListDemo'
import ToastAndroidComponent from './src/Components/ToastAndroidComponent'
import ApperanceComponent from './src/Components/ApperanceComponent'
import DetectPlatform from './src/Components/DetectPlatform'
import AnimationComponent from './src/Components/AnimationComponent'
import DrawerLayoutComponent from './src/Components/DrawerLayoutComponent'
import TransformComponent from './src/Components/TransformComponent'
import BackHandlerAndroidComp from './src/Components/BackHandlerAndroidComp'
import PromptAlert from './src/Components/PromptAlert'
import VibrationAlert from './src/Components/VibrationAlert'
import SliderComponent from './src/Components/SliderComponent'
import AvatarElem from './src/Components/ReactNativeElements/AvatarElem'
import BadgeElem from './src/Components/ReactNativeElements/BadgeElem'
import GeoLocationNative from './src/Components/ReactNativeElements/GeoLocationNative'
import ViewMap from './src/Components/ReactNativeElements/NativeViewMap'
import Products from './src/Components/ReduxTutorial/ReduxExample/Products'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import Cart from './src/Components/ReduxTutorial/ReduxExample/Cart';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      {/* // <FlatListDemo/>
      // <NestedFlatList/>
      // <MultiViewFlatList/>
      // <RefreshingFlatlist/>
      // <FlatListLoadMore/>
      // <AlertComponent/>
      // <DismissKeyboard/>
      // <SwitchComponent/>
      // <SectionListDemo/>
      // <ToastAndroidComponent/>
      // <ApperanceComponent/>
      // <DetectPlatform/>
      // <AnimationComponent/>
      // <DrawerLayoutComponent/>
      // <TransformComponent/>
      // <BackHandlerAndroidComp/>
      // <PromptAlert/>
      // <VibrationAlert/>
      // <SliderComponent/>
      // <AvatarElem/>
      // <BadgeElem/>
      // <GeoLocationNative/>
      // <ViewMap/> */}
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Products} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({})