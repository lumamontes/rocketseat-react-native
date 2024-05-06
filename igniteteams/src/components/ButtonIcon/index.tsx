import { TouchableOpacityProps } from "react-native";
import { Container, ButtonIconTypeStyleProps, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  name: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ name, type = "primary", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon name={name} type={type} />
    </Container>
  );
}
