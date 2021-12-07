import * as React from 'react';
import { Button, View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import { useEffect, useState } from 'react';
import SeeResultBtn from './components/seeResultBtn.js';
import TestTile from './components/testTile';


///////////////////////////////////////////////////////////////////////////////////

function HomeScreen(props) {
  const [tests, setTests] = useState([]);

  const getTest = async() => {
    try{
      const tests1 = await (await fetch('http://tgryl.pl/quiz/tests')).json();
      for(let test of tests1){
        const details = await (await fetch('http://tgryl.pl/quiz/test/'+test.id)).json();
        test.details = details;
      }
      setTests(tests1);
    }
    catch(error){
      console.log(error);
    }
  }

  const renderItem = ({ item }) => (
        <TestTile test={item} navigation={props.navigation} />
  );
  useEffect( () => {getTest()})
  return (

    <FlatList
      style={styles.container}
      ListHeaderComponent={<SeeResultBtn navigation={props.navigation}/>}
      data={tests}
      renderItem={renderItem}
      keyExtractor={item=>item.id}
    />

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#bdded4'
  }

})

export default HomeScreen;