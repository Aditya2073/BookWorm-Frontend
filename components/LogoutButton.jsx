import { View, Text, Touchable, TouchableOpacity, Alert } from 'react-native'
import { useAuthStore } from "../store/authStore";
import styles from "../assets/styles/profile.styles";
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';

export default function LogoutButton() {

    const confirmLogout = () => {
        Alert.alert("Logout", "Are you sure you want to logout?",[
            {text: "Cancel", style: "cancel"},
            {text: "Logout", onPress: () => logout(), style: "destructive"}
        ])
    };

    const { logout } = useAuthStore();
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
      <Ionicons name="log-out-outline" size={20} color={COLORS.white}/>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  )
}