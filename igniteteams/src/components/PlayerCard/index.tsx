import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Name } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonIcon } from "../ButtonIcon";

type Props = TouchableOpacityProps & {
  name: string;
  onRemove?: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon name="close" type="secondary" onPress={onRemove} />
    </Container>
  );
}
