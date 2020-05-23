import React,{useState} from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.css';
import Item from "../../components/item";
import RecycleView from "remax-recycle-view/lib/index";
import {usePageEvent} from 'remax/macro';

export default () => {
  const [list,setList]=useState([]);
  usePageEvent('onShow', () => {
    setList([{S: 1}, {S: 2}, {S: 3}, {S: 4}, {S: 5}, {S: 6}, {S: 7}]);
  })
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始
        </View>
        <RecycleView
          scroll-y={true}
          className={styles.recycleView}
          data={list}
          renderItem={(item,index) => (<Item />)}
        />
      </View>
    </View>
  );
};
