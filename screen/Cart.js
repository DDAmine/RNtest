import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
const CartScreen = props => {

    var Total = 0;
    props.CartReducer.forEach(item => {
        Total = Total + parseFloat(item.price);

    });





    return (
        <View style={StyleSheet.container}>

            <FlatList numColumns={2}
                data={props.CartReducer}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (

                    <View style={{ flex: 0.5, width: 100, height: 200, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F6F6F6', margin: 15 }} >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                            }}
                            source={{ uri: item.main_pair.detailed.http_image_path }}
                        />
                        <Text numberOfLines={1}>{item.price} </Text>
                        <Button title='Remove' color='#FF3A52' onPress={() => { props.RemoveFromCart(item); }} />




                    </View>
                )}
            />
            
                <Button title='Clear all' onPress={() => { props.ClearCart() }} />
                <Text numberOfLines={1}> Total price {Total}</Text>
            
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        bottom: 0
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
});


const mapToProps = (state) => {
    const { CartReducer } = state;
    return { CartReducer: CartReducer };

}
const mapDispatchToprops = (dispatch) => {
    return {
        RemoveFromCart: (product) => dispatch(actions.RemoveFromCart(product)),
        ClearCart: () => dispatch(actions.ClearCart())

    };

}

export default connect(mapToProps, mapDispatchToprops)(CartScreen);