import { Dimensions } from "react-native";

export const deviceHeight = Dimensions.get('screen').height
export const deviceWidth = Dimensions.get('screen').width

export const normalizeHeight = (size) => {
  if(deviceHeight > 800){
    return size;
  } else if(deviceHeight > 700) {
    return size - 10
  } else if(deviceHeight > 600) {
    return size - 15
  } else if(deviceHeight > 500){
    return size - 20;
  } else { 
    return size - 25;
  }
}

export const normalizeWidth = (size) => {
  if(deviceWidth > 400){
    return size;
  } else if(deviceWidth > 350) {
    return size - 2
  } else if(deviceWidth > 300) {
    return size - 3
  } else if(deviceWidth > 250){
    return size - 4;
  } else { 
    return size - 5;
  }
}