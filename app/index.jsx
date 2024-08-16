import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, Keyboard, ImageBackground, Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Task from '../components/Task.jsx'

const index = () => {

    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    const image = { uri: "https://i.pinimg.com/736x/42/45/55/4245559c3b94cb0ec859954d237e045f.jpg" };

    const [task, setTask] = useState(null);
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        if (task) {
            setTaskItems([...taskItems, task]);
        }
        else {
            alert('Please enter a task');
        }
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View>
            <ImageBackground className='' source={image} resizeMode="cover" style={{ height: { screenHeight }, width: { screenWidth }, justifyContent: "center", alignItems: "center" }}>
                <View className="w-full h-full flex flex-col justify-baseline mt-16 px-16">
                    <Text className="text-3xl mb-8 font-bold text-center">ToDo List</Text>
                    <View>
                        {
                            taskItems.map((task, index) => {
                                return (
                                    <Task text={task} key={index} remove={() => completeTask(index)} />
                                )
                            })
                        }
                    </View>
                    <KeyboardAvoidingView
                        className="absolute bottom-[120px] min-w-full w-[100vw] flex flex-row justify-between items-center px-4"
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <TextInput
                            className="px-12 w-[250px] py-4 bg-gray-300 rounded-3xl border-2 border-[#C0C0C0]"
                            placeholder={'Write a task'}
                            value={task}
                            onChangeText={(text) => setTask(text)}
                        />
                        <TouchableOpacity
                            onPress={handleAddTask}
                        >
                            <View className="flex items-center bg-gray-300 py-4 px-6 rounded-full border-2 border-[#C0C0C0]">
                                <Text className="text-3xl text-gray-500">+</Text>
                            </View>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </ImageBackground>
        </View>
    )
}

export default index