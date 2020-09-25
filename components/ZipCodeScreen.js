import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList,TouchableHighlight,ImageBackground  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
                <View style={styles.fullS2}>
                    <Text style={styles.Textc}>{place}</Text>
                    <Text style={styles.Textc}>{code}</Text>
                </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.fullS}>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%',
    },
    fullS:{
        width: '100%',
        height: '100%',
    },
    fullS2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    
        paddingRight:10,
        paddingLeft:10,
        width: '100%',
    },
    Textc:{
        color: 'white',
        fontSize :30,

    }
  })