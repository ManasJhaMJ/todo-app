import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Task = ({ text }) => {
    return (
        <View className="w-full my-2 bg-gray-200 rounded-lg p-2.5 flex flex-row items-center justify-between">
            <View className="flex flex-row items-center flex-wrap">
                <TouchableOpacity className="w-8 h-8 bg-blue-400 rounded-md">
                </TouchableOpacity>
                <Text className="max-w-[80%] ml-2">{text}</Text>
            </View>
            <View className="w-4 h-4 bg-white border-blue-400 border-2 rounded-md">
            </View>
        </View>
    )
}

export default Task