import React, { useState } from 'react';
import { View, Text, Button, TextInput, SafeAreaView, FlatList, Pressable, Modal } from 'react-native';
import Card from './Card';
import { StyleSheet } from 'react-native-web';
import ViewCountryInfo from '../ViewCountryInfo/ViewCountryInfo';


const LandingPage = (props) => {
    const { data, resetData, search } = props;
    const [searchText, setSearchText] = useState("");
    const [viewInfo, setViewInfo] = useState(false);
    const [viewData, setViewData] = useState({})

    const handleChangeCountryName = (text) => {
        setSearchText(text);
        console.log(text);
        if (text === "") {
            console.log("kk")
            resetData();
        }
    }
    const handleClickViewInfo = (item) => {
        setViewData(item)
        setViewInfo(true);
    }



    return (
        <View style={{ width: "96%", margin: 6, marginTop: 20 , fontFamily: 'Cochin'}}>
            <View style={{ justifyContent: 'center', flexDirection: "row", alignItems: 'center', paddingVertical: 5 }}>
                <TextInput
                    placeholder="Enter counrtry name.."
                    style={styles.searchInput}
                    onChangeText={handleChangeCountryName}
                />

                <Pressable
                    style={[styles.searchButton]}
                    onPress={() => search(searchText) }>
                    <Text style={styles.textStyle}>Search</Text>
                </Pressable>
            </View>
            {
                viewInfo && <Modal
                    animationType="slide"
                    transparent={true}
                    visible={viewInfo}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setViewInfo(!viewInfo);
                    }}>
                    <ViewCountryInfo data={viewData} setViewInfo={setViewInfo} />
                </Modal>
            }
            {data.length > 0 && <SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={(item, i) => <Card key={i} cardData={item} handleClickViewInfo={handleClickViewInfo} />}

                />
            </SafeAreaView>}
        </View>

    );
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    searchInput: {
        flex: 1,
        backgroundColor: "#e3b99a",
        padding: 5,
        borderRadius: 6,
        height: 40,
        marginRight: 3,
        color: 'black'
    },
    searchButton: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        backgroundColor: '#4630EB',
    },
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
        padding: 5,
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


export default LandingPage;