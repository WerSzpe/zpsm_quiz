import * as React from 'react';
import { ActivityIndicator, FlatList,View, Text, StyleSheet, RefreshControl } from 'react-native';
import { useEffect, useState } from 'react';

import ResultTile from './components/resultTile';

////////////////////////////////////////////////////////////

function ScoresScreen(props) {

  const [results, setResults] = useState([]);

  const getResult = async() => {
    try{
      const results1 = await (await fetch('http://tgryl.pl/quiz/results')).json();
      setResults(results1);
    }
    catch(error){
      console.log(error);
    }
  }

  const renderItem = ({ item }) => (
      <ResultTile result={item} navigation={props.navigation} />
  );

  useEffect( () => {getResult()})

  return (

    <FlatList
      style={styles.container}
      data={results}
      renderItem={renderItem}
      keyExtractor={item=>item.id}
    />

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#bdded4'
  },

})

export default ScoresScreen;