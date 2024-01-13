import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Popover,
  Button,
  FormControl,
  Input,
  Radio,
  Select,
  Checkbox,
  CheckIcon,
  Center,
  VStack,
} from "native-base";
import Theme from "../Theme/Theme";

const MainTennisButton = () => {
  const navigation = useNavigation();
  const initialFocusRef = React.useRef(null);
  const [value, setValue] = React.useState("one");
  const [service, setService] = React.useState("");

  return (
    <Popover
      initialFocusRef={initialFocusRef}
      trigger={(triggerProps) => {
        return (
          <TouchableOpacity
            {...triggerProps}
            style={[styles.button, styles.roundButton]}
          >
            <Image
              source={require("../assets/images/icons8-tennis-ball-96.png")}
              style={[styles.image, styles.TennisIcon]}
            />
          </TouchableOpacity>
        );
      }}
    >
      <Popover.Content
        style={styles.Popover}
        bottom={30}
        accessibilityLabel="Select a service"
      >
        <Popover.CloseButton />
        <Popover.Header background={0}>Select a Service</Popover.Header>
        <Popover.Body background={0}>
          <FormControl>
            <VStack space={4} alignItems="center">
              <FormControl.Label>Select a location:</FormControl.Label>
              <Select
                selectedValue={service}
                minWidth={200}
                accessibilityLabel="Select a service"
                placeholder="Choose Location"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
              <Checkbox value="example">Checkbox</Checkbox>
              <Box width={"100%"}>
                <Button
                  borderRadius={50}
                  onPress={() => console.log("hello world")}
                >
                  Start
                </Button>
              </Box>
            </VStack>
          </FormControl>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
};

const styles = StyleSheet.create({
  TennisIcon: {
    top: -25,
    width: 100,
    height: 100,
  },
  Popover: {
    width: 300,
    backgroundColor: Theme.white,
    borderRadius: 20,
  },
});

export default MainTennisButton;
