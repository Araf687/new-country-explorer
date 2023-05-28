import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const Card = (props) => {
    const { cardData } = props;
    const {name}=props.cardData;
    // console.log(props.cardData)
    return (
        <View style={styles.cardContainer}>
            <View style={{ width: 120}}>
                <Image
                    source={"png" in cardData.coatOfArms ? { uri: cardData.coatOfArms.png } : require('../../assets/splashImg.jpg')}
                    style={{ height: 100, width: 100 }}
                />
            </View>
            <View>
                <Text>{name.official}</Text>
                <Text >{name.official}</Text>
                <Text >{name.official}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    cardContainer:{ 
        flexDirection: "row", 
        justifyContent: "left",
        marginBottom: 5, 
        backgroundColor: "lightgrey", 
        padding: 10
    }
});

export default Card;