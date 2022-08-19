import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Nakhon Si Thammarat', code: '80190' },
    { place: 'Phuket', code: '83000'},
    { place: 'Phattalung', code: '93000'},
    { place: 'Surat Thani', code: '84000'},
    { place: 'Chumphon', code: '86000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate("Weather", {zipCode: code})
    }}>
      <>
        <View style= {style.zipItem}>
            <Text style= {style.zipPlace}>{place}</Text>
            <Text style= {style.zipCode}>{code}</Text>
        </View>
        <View>
          <Text style= {{fontSize: 1,}}></Text>
        </View>
        <StatusBar style="auto"/>
      </>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
          <View>
            <StatusBar styte="auto" />
            <FlatList
            data = {availableZipItems}
            key = {_keyExtractor}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
          />
          <StatusBar style="auto"/>
          </View> 
    )
}

const style = StyleSheet.create(
    {
      zipItem: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingTop: 9
      },
      zipPlace: {
        flex: 2,
        fontSize: 34,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'right',
        textAlignVertical: 'center',
        color: 'rgba(223, 150, 101, 1)'
      },
      zipCode: {
        flex: 2,
        textAlign: 'center',
        fontSize: 34,
        fontWeight: "bold",
        color: 'white',
        textAlignVertical: 'center',
        color: 'rgba(223, 150, 101, 1)'
      },
      backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    }
  ) 