import { View, Text } from 'react-native'
import {Tabs} from "expo-router"
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name = "index"
            options = {{
                title: 'Home',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name = "liftplan"
            options = {{
                title: 'Lift Plan',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name = "liftlog"
            options = {{
                title: 'Lift Log',
                headerShown: false
            }}
        />
        <Tabs.Screen
            name = "progress"
            options = {{
                title: 'Progress',
                headerShown: false
            }}
        />
    </Tabs>
  )
}

export default _layout