import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStarkParamList} from '../App';
import ProductItem from '../Components/ProductItem';
import {PRODUCTS_LIST} from '../data/Contants';
import Separator from '../Components/Seperator';

type HomeProps = NativeStackScreenProps<RootStarkParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Details', {product: item})}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#fff',
  },

  smallText: {
    color: '#000',
  },
});
