import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Button } from 'react-native';

export default function App() {

    const [value, setValue] = useState(0)
    const [total_taps, setTotalTaps] = useState(0)

    const incrementValue = () => {
        setValue(value + 1)
        setTotalTaps(total_taps + 1)
        console.log("Value: " + (value + 1));
    }

    const decrementValue = () => {
        setValue(value - 1)
        setTotalTaps(total_taps + 1)
        console.log("Value: " + (value - 1));
    }

    const showToast = () => {
        ToastAndroid.show("Counters Reset!", ToastAndroid.SHORT);
        setValue(0)
        setTotalTaps(0)
    }

    return (
        <View style={styles.container} >
            <Text style={styles.text}>{value}</Text>
            <Text style={styles.text2}>Total Taps : {total_taps}</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button} onPress={incrementValue}>
                    <Text style={styles.btn_text}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={showToast}>
                    <Text style={styles.btn_text}>Click Me!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decrementValue}>
                    <Text style={styles.btn_text}>Subtract</Text>
                </TouchableOpacity>
            </View>
            <Link href='/home' style={styles.navButton}>Continue</Link>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_text: {
        color: 'black',
        fontSize: 14,
        textAlign: 'center'
    },

    text: {
        color: 'black',
        fontSize: 30
    },

    text2: {
        color: 'grey',
        fontSize: 18
    },

    button: {
        backgroundColor: 'aqua',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        flex: 1,
        margin: 10,
    },

    navButton: {
        backgroundColor: 'gold',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        margin: 10,
        color: 'black',
        fontSize: 14
    }
});
