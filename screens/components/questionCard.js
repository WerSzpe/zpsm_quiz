import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

function QuestionCard(props) {

  return(
    <View style={styles.container}>
        <Text style={styles.quizTitle}>
            Question {props.taskNumber}/{props.tasksLength}
        </Text>

        <Progress.Bar progress={props.time/props.task.duration} color="#2ce6d9"/>

        <Text style={styles.question}>
          {props.task.question}
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    alignItems: 'center',
    padding:"5%",
    backgroundColor: '#79aba7',
  },

  quizTitle:{
    fontSize: 20,
    margin: 10
  },
  question:{
    flex:2,
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
    color: '#021417'
  },
  answer:{
    flex:2,
    fontSize: 20,
    margin: 10,
    width: '80%',
    margin: 20,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#0b544f',
    borderRadius: 20
  },
  answerText:{
      color: 'white'
  }

})

export default QuestionCard;