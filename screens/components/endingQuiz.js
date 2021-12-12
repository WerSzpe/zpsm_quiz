import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function EndOfQuiz(props) {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    End of Quiz!
                </Text>
            </View>
            <Text style={styles.score}>
                Score: {props.score} / {props.max}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#79aba7'
    },
    title: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    titleText:{
        fontSize:30,
        color: "#0b544f"
    },
    score :{
        flex:1,
        fontSize:25,
        color: "#0b544f"
    }
})

export default EndOfQuiz;