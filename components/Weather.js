import React, { useState } from "react";
import { ImageBackground, Text, StyleSheet } from 'react-native';
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecast] = useState(
        {
            main: '-',
            description: '-',
            temp: 0
        }
    )
    return (
        <ImageBackground source={require('../bg.png')} style={style.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
        
    );
}

const style = StyleSheet.create(
    {
        backdrop: {
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }
    }
)