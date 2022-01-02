import { DrawerItem } from '@react-navigation/drawer';
import * as React from 'react';
import { View, Text} from 'react-native';

const _ = require('lodash');

export default function DrawerContent(props) {
    const arrTests = [];
    const arr = [];

    return(
        <View style={{ alignItems: 'center', flexDirection:'column'}}>

            <View style={{height: 110, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 40}}>Quiz App</Text>
                <Text style={{fontSize: 20, marginTop: 5}}>Your nick: {props.nick}</Text>
                <Text style={{fontSize: 15, marginTop: 5, display:props.connected?'none':'flex'}}>(No internet connection, using local database)</Text>
            </View>

            {arr.map((item, key)=>
                <DrawerItem
                    label={item.route.name}
                    style={{width:'90%'}}
                    key={key} />
            )}

            <DrawerItem
                label='Reload Tests'
                onPress={() => props.refreshCallback()}
                activeBackgroundColor='#2b5e5d'
                activeTintColor='#d8eded'
                style={{width: '90%'}}/>

            <DrawerItem
                label='Random test'
                onPress={() => props.navigation.navigate(_.sample(arrTests).route.name)}
                activeBackgroundColor='#2b5e5d'
                activeTintColor='#d8eded'
                style={{width: '90%'}}/>

            <View style={{height: 1, width: '80%', backgroundColor: 'black'}}></View>

            {arrTests.map((item, key) =>
                <DrawerItem
                    label={item.route.name}
                    onPress={() => props.navigation.navigate(item.route.name)}
                    focused={item.navigation.isFocused() ? true : false}
                    activeBackgroundColor='#2b5e5d'
                    activeTintColor='#d8eded'
                    style={{width: '90%'}}
                    key={key} />
            )}
        </View>
    )
}