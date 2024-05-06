import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding-top: 64px;
  padding-left: 16px;
  padding-right: 16px;
`;
