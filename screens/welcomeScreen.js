import * as React from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';

function WelcomeScreen ( props ) {
    const username = '';

    return(
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Welcome!
            </Text>

            <View style={styles.inputBox}>
                <Text style={styles.text}>
                    Enter your username:
                </Text>
                <TextInput style={styles.input} onChangeText={(text) => {username = text; props.username=username}}/>
            </View>

            <TouchableOpacity style={styles.button}>
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
       height: '100%',
       flexDirection: 'column',
       alignItems: 'center',
       backgroundColor: 'lightgrey'
    },
    welcomeText:{
        backgroundColor: '#f0f0f0',
        width: '100%',
        textAlign: 'center',
        paddingTop: '20%',
        fontSize: 50,
        flex: 1
    },
    inputBox:{
        flex:2,
        backgroundColor: '#f0f0f0',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center'
    },
    text:{
        fontSize:20
    },
    input:{
        textAlign: 'center',
        margin:'5%',
        backgroundColor: 'white',
        fontSize: 20,
        height: 50,
        width: '99%',
    },
    button:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        marginTop: 3,
    },
    btnText:{
        fontSize: 30
    }
})

export default WelcomeScreen;