
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Button } from 'react-native';
import {connect} from 'react-redux';
import * as actions  from '../redux/actions/actions';
const StoreScreen = props => {

 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch('http://hrassignment.s3-website.us-east-2.amazonaws.com/categories.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24, backgroundColor: '#E0E0E0' }}>
      {isLoading ? <Text>Loading...</Text> :
        (<View >
          <FlatList numColumns={2}
            data={data.products}
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
                <Text numberOfLines={1}>{item.product}</Text>
                <Text numberOfLines={1}> RS {parseFloat(item.price)}</Text>
                <Button title='ADD' color='#FF3A52' onPress={()=>{props.Addtocart(item );  }} />
                
          
              </View>


            )}
          />
        </View>
        )}

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
});

const mapToProps = (state)=>{
  const { CartReducer} = state;
  return {CartReducer:CartReducer};

}
const mapDispatchToprops = (dispatch)=>{
  return {
    Addtocart : (product)=> dispatch(actions.AddToCart(product))
  };

}


export default connect(mapToProps , mapDispatchToprops) (StoreScreen);