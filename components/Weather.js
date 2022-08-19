import React, { useEffect, useState } from "react";
import { ImageBackground, Text, StyleSheet } from 'react-native';
import { View } from "react-native";
import Forecast from "./Forecast";
import Constants from 'expo-constants';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState(
        {
            name: 'loading',
            country: 'loading',
            main: 'loading..',
            description: 'loading',
            temp: 0,
            humidity: 'loading',
            feels_like: 'loading',
        }
    )

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`);
        if (props.zipCode) {
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=c0d919cc900c017e3eb82c52744080e0`
          )
            .then((response) => response.json())
            .then((json) => {
              setForecastInfo({
                name: json.name,
                country: json.sys.country,
                main: json.weather[0].main,
                description: json.weather[0].description,
                humidity: json.main.humidity,
                temp: json.main.temp,
                feels_like: json.main.feels_like,
              });
            })
            .catch((error) => {
              console.warn(error);
            });
        }
      }, [props.zipCode]);

    return (
        <ImageBackground source={require('../bg.png')} style={style.backdrop}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', width:"100%"}}>
                  <Text style={style.titleText}>ZipCode : {props.zipCode}.</Text>
                </View>
            <View style={style.highlight}>
                <Forecast {...forecastInfo}/>
                
            </View>          
        </ImageBackground>
    );
}

const style = StyleSheet.create(
    {
        backdrop: {
            
            width: '100%',
            height: '100%'
        },
        highlight: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width:"100%", 
            height:"60%", 
            paddingTop: Constants.statusBarHeight, 
            alignItems: 'center',
                flexDirection: "row",
                justifyContent: 'center',
                alignItem: 'left'

        },

        titleText: {
            fontSize: 18,
            fontWeight: "bold",
            textAlign: 'center',
            color: 'rgba(223, 150, 101, 1)'
        }
    }
)