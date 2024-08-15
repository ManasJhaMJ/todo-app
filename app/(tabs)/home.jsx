import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Task from '../../components/Task.jsx'

const home = () => {
    return (
        <View className="w-full h-full flex flex-col justify-center px-16">
            <Text className="text-3xl mb-8 font-bold">Today's Task</Text>
            <View>
                <Task text={'Task 01'} />
                <Task text={'Task 02'} />
            </View>
        </View>
    )
}

export default home