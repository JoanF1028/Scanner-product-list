import { Text, View, ScrollView, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, useLocalSearchParams, useFocusEffect, useNavigation } from "expo-router";
import { styles } from "../styles/style";
import React, { useState, useCallback } from "react";

const Page = () => {
  const { productName, code, productImage } = useLocalSearchParams();
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const isEmpty = products.length <= 0;

  const updateProducts = useCallback(() => {
    if (productName && code && productImage) {
      setProducts((prevProducts) => {
        const productExistIndex = prevProducts.findIndex(
          (item) => item.code === code
        );
        if (productExistIndex !== -1) {
          let updatedProducts = [...prevProducts]; 
          updatedProducts[productExistIndex].quantity += 1;
          return updatedProducts;
        } else {
          const newProduct = { productName, code, productImage, quantity: 1 };
          return [...prevProducts, newProduct];
        }
      });
    }
      navigation.reset({routes: [{key: 'index2.0', name: 'index'}]})
  }, [productName, code, productImage]);
  useFocusEffect(updateProducts);

  const deleteProduct = (item) => {
    const productId = item.code;
    setProducts((prevProducts) => {
      const productIndex = prevProducts.findIndex(
        (product) => product.code === productId
      );
      if (productIndex !== -1) {
        if (prevProducts[productIndex].quantity > 1) {
          let updatedProducts = [...prevProducts];
          updatedProducts[productIndex].quantity -= 1;
          return updatedProducts;
        } else {
          return prevProducts.filter((product) => product.code !== productId );
        }
      }
      return prevProducts;
    });
  };

  return (
    <View style={styles.container1}>
      <StatusBar style="auto"></StatusBar>
  
      {isEmpty ? (
        <View style={styles.title}>
          <Text style={styles.textScan}>
            There are no products yet, start scanning something
          </Text>
          <Link href="/Scan" style={styles.scan}>
            go to scan
          </Link>
        </View>
      ) : (
        <View>
          <ScrollView style={styles.scrollview}>
            {products.map((item) => (
              <View style={styles.box} key={item.code}>
                <Text> Product name: {item.productName}
                  </Text>
                <View>
                  <Image
                    source={{ uri: `${item.productImage}` }}
                    style={styles.image}
                  />
                </View>
                <Text>Barcode number: {item.code}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Pressable onPress={() => deleteProduct(item)}>
                  <Text style={styles.deleteBtn}>Delete</Text>
                </Pressable>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
  
};

export default Page;
