import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function TestTile(props) {
  return(
    <TouchableOpacity
    onPress={()=>props.navigation.navigate(props.test.name)}
    style={styles.container}>

      <Text style={styles.title}>
        {props.test.name}
      </Text>

      <View style={styles.tagsContainer}>
        {props.test.tags.map((tag,tagKey)=>
          <Text key={tagKey} style={styles.tag}>
            #{tag}
          </Text>
        )}
      </View>

      <Text style={styles.description}>
        {props.test.description}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    height: 200,
    padding: "5%",
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#123836',
    margin: '0.5%',
  },
  tagsContainer:{
      flexDirection: 'row',
  },
  title:{
    fontSize: 30,
    marginBottom:15,
    color:'white'
  },
  description:{
    marginTop: 10,
    color: '#6ca6a2'
  },
  tag:{
    marginRight: 5,
    color: '#cef0ee',
    textDecorationLine: 'underline'
  }
})

export default TestTile;