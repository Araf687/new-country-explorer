import React, { Component } from 'react'
import { View, Text, Image, TextInput, SafeAreaView, FlatList, Pressable, Modal, StyleSheet, ScrollView } from 'react-native';

const ViewCountryInfo = (props) => {
    const { setViewInfo, data } = props;
    const { name, maps, currencies, population, flags } = data;
    console.log(flags.png)
    // const img="png" in flags?flags.png:
    const currency = currencies ? currencies[`${Object.keys(currencies)[0]}`].name : "N/A";
    const img = data.coatOfArms.hasOwnProperty('png') ? { uri: data.coatOfArms.png } : require('../../assets/splashImg.jpg');

    // console.log(data);
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', padding: 10 }}>
                        <View>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source={img}
                                    style={{ height: 100, width: 100 }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name.official}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <Text style={{ fontWeight: 600 }}>Currencies: </Text>
                        <Text>{currency}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <Text style={{ fontWeight: 600 }}>Populatioin: </Text>
                        <Text>{population}</Text>
                    </View>

                    <View>
                        <Text style={{ fontWeight: 600, marginVertical: 10 }}>About: </Text>
                        <Text>
                            This generator uses a dictionary of Latin words to construct passages of Lorem Ipsum text that meet your desired length. The sentence and paragraph durations and punctuation dispersal are calculated using Gaussian distribution, based on statistical analysis of real world texts. This ensures that the generated Lorem Ipsum text is unique, free of repetition and also resembles readable text as much as possible.
                        </Text>
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{ fontWeight: 600, marginVertical: 10 }}>Flag: </Text>
                        <Image
                            source={{ uri: flags.png } }
                            style={{ height: 100, width: 150, marginBottom:10 }}
                        />
                        <Text>
                            {flags.alt}
                        </Text>
                    </View>
                </ScrollView>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setViewInfo(false)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flex: 1,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    }
});
export default ViewCountryInfo