import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});




const DrawerContent = ()=> {

  const propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
  }

  const contextTypes = {
    drawer: PropTypes.object,
  }

    return (
      <View style={styles.container}>
        <Text>Drawer Content :)</Text>

      </View>
    );
}

export default DrawerContent;
