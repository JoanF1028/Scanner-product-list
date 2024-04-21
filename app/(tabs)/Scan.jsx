import { CameraView, useCameraPermissions, } from "expo-camera/next";
import React, { useState, useMemo } from "react";
import { CustomModal } from "../../components/CustomModal";
import { useNavigation, } from "expo-router";
import { Button, Text, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "../styles/style";

export default function Scan() {
  const navigation = useNavigation();
  const [facing, setFacing] = useState("back");
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions(false);

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const handleBarCodeScanned = useMemo( () => async ({ data }) => {
        setScanned(true);
        try {
          const apiUrl = `https://world.openfoodfacts.net/api/v2/product/${data}?fields=product_name,image_small_url,product._id`;
          const response = await fetch(apiUrl);
          const dataResult = await response.json();
          if (dataResult.product && dataResult.product.product_name) {
            setScannedData(dataResult);
            setModalVisible(true);
          } else {
            Alert.alert("product not found", "Would you like to rescan?", [
              {
                text: "Yes",
                onPress: () => closeModal(),
              },
              {
                text: "No",
                onPress: () => closeModal(),
                style: "cancel",
              },
            ]);
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      },
    []
  );
  if (!permission) {
    requestPermission();
  }

  if (permission) {
    requestPermission(true);
  }

    function closeModal(){
      setModalVisible(false);
      setScanned(false);
      setScannedData({});
    };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>

      <CustomModal
        visible={modalVisible}
        data={scannedData}
        onClose={() => closeModal()}
        onAdd={() => {
          closeModal();
          navigation.navigate("index", {
            ...scannedData,
            productName: scannedData?.product?.product_name,
            productImage: scannedData?.product?.image_small_url,
          });
        }}
      />
    </View>
  );
}