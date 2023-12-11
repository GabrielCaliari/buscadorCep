import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextOne = styled.Text`
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: bold;
  color: black;
`;

export const Input = styled.TextInput`
  background-color: white;
  border-width: 1px;
  border-color: gray;
  border-radius: 5px;
  width: 90%;
  padding: 10px;
  font-size: 18px;
`;

export const SecondView = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  height: 58px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  background-color: blue;
`;
export const ButtonSecond = styled.TouchableOpacity`
  height: 58px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  background-color: red;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  color: white;
`;

export const ThirdView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ItemText = styled.Text`
  font-size: 22px;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;
