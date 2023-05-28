import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const Card = (props) => {
    const { item } = props.cardData;
    const { name } = item;
    const img = item.coatOfArms.hasOwnProperty('png') ? { uri: item.coatOfArms.png } : require('../../assets/splashImg.jpg');
    return (
        <View style={styles.cardContainer}>
            <View style={{ width: 120 }}>
                <Image
                    source={img}
                    style={{ height: 100, width: 100 }}
                />
            </View>
            <View style={{flex:1, flexWrap: "wrap" }}>
                <View>
                    <Text style={styles.cardHeading}>{name.official}</Text>
                </View>
                <Text style={styles.cardText}>{name.official}</Text>
                <Text style={styles.cardText}>{name.official}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        justifyContent: "left",
        marginBottom: 5,
        backgroundColor: "#f6eeee",
        padding: 10,
        borderRadius:6
    },
    cardHeading: {
        fontWeight: "bold",
        fontSize: 20,
    }
});

export default Card;