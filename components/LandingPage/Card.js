import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


const Card = (props) => {
    const { item } = props.cardData;
    const { name, capital,continents ,currencies } = item;
    // console.log(currencies?currencies[`${Object.keys(currencies)[0]}`]:"N")
    const img = item.coatOfArms.hasOwnProperty('png') ? { uri: item.coatOfArms.png } : require('../../assets/splashImg.jpg');
    return (
        <TouchableOpacity onPress={() => { props.handleClickViewInfo(item) }}>
            <View style={styles.cardContainer}>
                <View style={{ width: 120 }}>
                    <Image
                        source={img}
                        style={{ height: 100, width: 100 }}
                    />
                </View>
                <View style={{ flex: 1, flexWrap: "wrap" }}>
                    <View>
                        <Text style={styles.cardHeading}>{name.official}</Text>
                    </View>
                    <Text style={styles.cardText}>Capital: {capital?capital[0]:"Capital"}</Text>
                    <Text style={styles.cardText}>Continent: {continents?continents[0]:"Continent"}</Text>
                </View>
            </View>

        </TouchableOpacity>

    );
};
const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        marginBottom: 5,
        backgroundColor: "#f6eeee",
        padding: 10,
        borderRadius: 6
    },
    cardHeading: {
        fontWeight: "bold",
        fontSize: 18,
    },
    cardText:{
        fontWeight:600,
        paddingTop:5
    }
});

export default Card;