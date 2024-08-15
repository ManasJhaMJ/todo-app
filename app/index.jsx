import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Task from '../components/Task.jsx'

const home = () => {
    return (
        <View className="w-full flex flex-col items-center text-center justify-center mt-20 px-16">
            <Text className="text-3xl mb-8 font-bold">Today's Task</Text>
            <View>
                <Task text={'Task 01'} />
                <Task text={'Task 02'} />
            </View>
        </View>
    )
}

export default home