import { Ride } from "@/types/type"
import { Text, View } from "react-native"

const RideCard = ({ride}:{ride:Ride}) => (
    <View>
        <Text>{ride.driver.first_name}</Text>
    </View>
)

export default RideCard