import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Card from './Card';
import { StyleSheet } from 'react-native-web';

const LandingPage = (props) => {
    const { data, setData } = props;
    const handleChangeCountryName=(text)=>{
        console.log(text);
    }
    return (
        <View
            style={{ width: "96%", margin:6 }}
        >
            <View style={{ justifyContent: 'center', flexDirection: "row", alignItems: 'center', paddingVertical: 5 }}>
                <TextInput placeholder="Enter counrtry name.." style={{flex:1}}/>
                
                <Button title='Search' style={{}} />
            </View>
            <View style={{ marginBottom: 5 }}>
                {data.length > 0 && data.map((countryInfo, i) => <Card key={i} cardData={countryInfo} />)}
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    input: {
        height: 30,
        borderWidth: 1,
        padding: 10,
    },
});


export default LandingPage;