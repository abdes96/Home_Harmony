import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";
import Button from "./Button";
import { Ionicons } from "@expo/vector-icons";

const TaskModal = ({ task, isVisible, onClose, onDone }) => {
  if (!task) {
    return null;
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <BlurView intensity={100} style={styles.absolute} tint="light" />
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <AntDesign name="closecircleo" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{task.title}</Text>
          <View style={styles.notes}>
            <Text style={styles.modalDescription}>{task.description}</Text>
            <View style={styles.message}>
              <Button
                title={
                  <View style={styles.icons}>
                    <Text style={styles.buttonText}>Message to discuss</Text>
                    <Ionicons
                      style={styles.icon}
                      name="chatbubble-ellipses-outline"
                      size={18}
                      color="black"
                    />
                  </View>
                }
                onPress={() => console.log("Button Pressed")}
                style={styles.buttonMessage}
                bgColor="#62D2C3"
              />
            </View>
          </View>

          <TouchableOpacity>
            <Button
              title={
                <View style={styles.button}>
                  <Text style={styles.mark}>Mark as Done </Text>
                  <Ionicons
                    name="checkmark"
                    style={{
                      marginLeft: -2,
                      borderRadius: 50,
                    }}
                    size={30}
                    color="black"
                  />
                </View>
              }
              onPress={onDone}
              style={styles.button}
              bgColor="#62D2C3"
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttonMessage: {
    width: "70%",
    marginBottom: 8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mark: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeBtn: {
    position: "absolute",
    top: -20,
    right: -20,
    padding: 10,
    backgroundColor: "#62D2C3",
    zIndex: 99999,
    borderRadius: 50,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginRight: 5,
    fontSize: 16,
    color: "black",
  },
  icon: {
    marginLeft: 5,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "85%",
    height: "70%",
    justifyContent: "space-around",
    borderColor: "#62D2C3",
    borderWidth: 2,
  },
  notes: {
    height: "50%",
    backgroundColor: "rgba(33, 150, 243, 0.1)",
    borderRadius: 10,
    marginBottom: 20,
    padding: 12,
    justifyContent: "space-between",
  },
  message: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  modalTitle: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Poppins",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 18,
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  doneButtonText: {
    color: "black",
    fontWeight: "bold",
  },

  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TaskModal;
