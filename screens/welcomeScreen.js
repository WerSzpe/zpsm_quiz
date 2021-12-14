import * as React from 'react';
import { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';

function WelcomeScreen ( props ) {
    const [username, setUsername] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Welcome!
            </Text>

            <View style={styles.inputBox}>
                <Text style={styles.text}>
                    Enter your username:
                </Text>
                <TextInput style={styles.input} onChangeText={(text) => setUsername(text)}/>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => props.confirm(username)}>
                <Text style={styles.btnText}>
                    Show me the quizes
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#186666'
    },
    welcomeText:{
        backgroundColor: '#186666',
        width: '100%',
        textAlign: 'center',
        paddingTop: '20%',
        fontSize: 50,
        flex: 1
    },
    inputBox:{
        flex:2,
        backgroundColor: '#186666',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center'
    },
    text:{
        fontSize:20,
        color: "#043333"
    },
    input:{
        textAlign: 'center',
        margin:'5%',
        backgroundColor: '#a3e6e6',
        fontSize: 20,
        height: 50,
        width: '99%',
    },
    button:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a3e6e6',
        width: '100%',
        marginTop: 3,
    },
    btnText:{
        fontSize: 30,
        color: "#043333"
    }
})

export default WelcomeScreen;