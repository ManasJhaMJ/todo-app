import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Icon from 'react-native-ico-material-design';

const Task = ({ text, remove }) => {

    const [isDone, setIsDone] = useState(false);

    const done = () => {
        setIsDone(!isDone);
    }

    return (
        <View className={"w-full my-2 bg-gray-200 rounded-lg p-2.5 flex flex-row items-center justify-between " + (isDone ? "bg-green-200" : "")}>
            <View className="flex flex-row items-center flex-wrap">
                <TouchableOpacity
                    className="w-8 h-8 bg-green-400 rounded-md flex items-center justify-center"
                    onPress={done}
                >
                    <Icon
                        name="check-box"
                        color="white"
                        size={20}
                    />
                </TouchableOpacity>
                <Text className={"max-w-[80%] ml-2 " + (isDone ? "line-through text-gray-400" : "")}>{text}</Text>
            </View>
            <View className=" bg-white border-red-200 border-[1px] flex items-center justify-center rounded-md">
                <TouchableOpacity
                    className="w-8 h-8 flex items-center justify-center"
                    onPress={remove}
                >
                    <Icon
                        name="close-button"
                        color="red"
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Task