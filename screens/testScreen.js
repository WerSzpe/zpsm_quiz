import * as React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { useState, useEffect } from 'react';

import QuestionCard from './components/questionCard';
import EndOfQuiz from './components/endingQuiz';
import { TouchableOpacity } from 'react-native-gesture-handler';

function TestScreen(props) {

  const taskNumber = 0;
  const remainingTime = 100;
  const score=0;
  const [completed, setCompleted] = useState(false);

  sendResult = async() => {
    try {
      const name = await AsyncStorage.getItem('username');
      if(name !== null) {
        await fetch('http://tgryl.pl/quiz/result', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nick: thisnick,
            score: this.state.score,
            total: this.state.test.details.tasks.length,
            type: this.state.test.name
          })
        })
      } else
        return;
    } catch (error) {
      console.log(error)
    }
  }

  const nextTest = () => {
    if(props.taskNumber+1== props.test.details.tasks.length){
      setCompleted(true);
      clearInterval(props.interval);
      sendResult();
    }
    else {
      taskNumber = props.taskNumber + 1;
      remainingTime = props.test.details.tasks[props.taskNumber+1].duration;
    }
  }

  const tick = () => {
    if(props.remainingTime <= 0.0) {
      nextTest();
    } else {
      remainingTime = props.remainingTime-0.1;
    }
  }

  const verify = (isCorrect) => {
    if(isCorrect)
      score = props.score+1;
    nextTest();
  }

  const init = () => {
    taskNumber = 0;
    remainingTime = props.test.details.tasks[0].duration;
    score=0;
    completed=false;
    interval = setInterval(tick, 100);
  }

  const exit = () => {
    clearInterval(props.interval);
  }

  useEffect(() => {
    navigation.addListener('focus', init)
    navigation.addListener('blur', exit)
    return () => {
                navigation.removeListener('focus', init)
                navigation.removeListener('blur', exit)
            }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={[styles.container,{display: props.completed ? 'none' : 'flex'}]}>
        <QuestionCard task={task} taskNumber={taskNumber+1} tasksLength={tasksLength} time={props.remainingTime}/>
        {props.task.answears.map((item, key) =>
          <TouchableOpacity style={styles.answear} key={key} onPress={() => verify(item.isCorrect)}>
            <Text>{item.content}</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={[styles.container, {display: props.completed ? 'flex' : 'none'}]}>
          <EndOfQuiz completed={props.completed} score={props.score} max={tasksLength} type={props.test.name}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#bdded4'
  },
  answear: {
    flex:1,
    fontSize: 20,
    margin: 10,
    width: '80%',
    margin: 20,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#0b544f',
    borderRadius: 20
  }

})

export default TestScreen;