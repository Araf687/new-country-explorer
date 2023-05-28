import React, { useState } from 'react';
import { View, Text, Button, TextInput, SafeAreaView, FlatList, Pressable } from 'react-native';
import Card from './Card';
import { StyleSheet } from 'react-native-web';

const LandingPage = (props) => {
    const { data, setData,search } = props;
    const [searchText, setSearchText] = useState("")

    const handleChangeCountryName = (text) => {
        console.log(text);
        setSearchText(text);
    }

    return (
        <View style={{ width: "96%", margin: 6, marginTop: 10 }}>
            <View style={{ justifyContent: 'center', flexDirection: "row", alignItems: 'center', paddingVertical: 5 }}>
                <TextInput
                    placeholder="Enter counrtry name.."
                    style={styles.searchInput}
                    onChangeText={handleChangeCountryName}
                />
                <Pressable >
                    <View style={styles.searchButton}>
                        <Button onPress={()=>{search(searchText)}} title='Search'  />
                    </View>
                </Pressable>


            </View>
            {data.length > 0 && <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={(item, i) => <Card key={i} cardData={item} />}
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
        height: 40,
    }
});


export default LandingPage;