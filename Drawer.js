import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import HomeScreen from './screens/homeScreen';
import TestScreen from './screens/testScreen';
import ScoresScreen from './screens/scoresScreen';

function Drawer (props) {

    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTests = async() => {
        try{
            const tests = await (await fetch('http://tgryl.pl/quiz/tests')).json();
            for(let test of tests){
                const details = await (await fetch('http://tgryl.pl/quiz/test/'+test.id)).json();
                test.details = details;
            }
            setTests(tests);
            setLoading(false);
        } catch(error){
            console.log(error);
        }
    }

    useEffect( () => getTests);

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer >
            <Drawer.Navigator initialRouteName="Home">

            <Drawer.Screen name="Home">
                {({navigation}) => <HomeScreen navigation={navigation}
                                    tests={props.tests} loading={props.loading}
                                    refreshCallback={getTests}/>}
            </Drawer.Screen>

            <Drawer.Screen name="Scores">
                {({navigation}) => <ScoresScreen navigation={navigation}/>}
            </Drawer.Screen>

            {tests.map((test, key) =>
                <Drawer.Screen name={test.name}  key={key} >
                    {({navigation}) => <TestScreen navigation={navigation} test={test} />}
                </Drawer.Screen>
            )}

            </Drawer.Navigator>
        </NavigationContainer>

        );
    }

export default Drawer;