import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  textScan: {
    fontSize: 20,
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 10,
  },
  scan: {
    color: "blue",
    fontSize: 15,
    fontWeight: "bold",
  },
  box: {
    backgroundColor: "white",
    width: '90%',
    height: 'auto',
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    marginTop: 30,
    borderRadius: 20,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 200, 
    width: 200, 
    resizeMode: 'contain'
  },
  scrollview: {
    flex: 1
  },
  deleteBtn: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 50,
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
});
