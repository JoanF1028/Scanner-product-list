import { Modal } from "react-native";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "../app/styles/style";

export const CustomModal = ({ visible, data, onClose, onAdd }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Code {`${data.code}`} has been scanned succesfully!
          </Text>
          <Text>{data ? data.image_front_url : ""}</Text>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={onAdd}
          >
            <Text style={styles.textStyle}>Add to Products</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
