import React from 'react';
import {View, Text, Image, navigateTo} from 'remax/one';
import { usePageEvent } from 'remax/macro';
const Item = (props) => {
  usePageEvent("onShow",() => {
    console.log("onShow");
  });
  return (<View>
   <Text>我是一个组件</Text>
  </View>);
};
export default Item;
