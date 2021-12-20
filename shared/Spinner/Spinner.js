import { View, Image } from "react-native";

function Spinner() {
    return (
        <View>
            <Image
                source={require("../../assets/spinner.gif")}
                alt={"Loading..."}
                style={{ width: 70, height: 70 }}
            />
        </View>
    );
}

export default Spinner;
