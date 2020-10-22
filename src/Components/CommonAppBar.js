import React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper';

const CommonAppBar = ({title,nav}) => (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {nav.pop()}} />
      <Appbar.Content title={title} />
    </Appbar.Header>
);

export default CommonAppBar