import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon, IconButtonProps } from '@/types/types';

const IconButton: React.FC<IconButtonProps> = ({ icon, color, onPress, ...rest }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed} {...rest}>
      <Ionicons name={icon as Icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
