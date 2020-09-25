import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Weather from './Weather';
import { StatusBar } from 'expo-status-bar';

export default function WeatherScreen({route}) {    
    return (
        <View style={styles.fullS}>
            <Weather zipCode={route.params.zipCode} />
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    fullS:{
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
  })