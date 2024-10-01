import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from 'react-native';

const itemSize = 36;
const dummyItems = [...Array(30)].map((_, index) => index);
const screenWidth = Dimensions.get('screen').width;

function App(): React.JSX.Element {
  const renderScrollViews = (id: string) => {
    return [...Array(3)].map((_, index) => (
      <ScrollView
        key={`${id}${index}`}
        onMomentumScrollEnd={() => console.log(`end-${index}`)}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={itemSize}>
        {dummyItems.map(item => (
          <View key={`i${id}${item}`} style={styles.itemContainer}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <Text style={[styles.title, {color: 'green'}]}>Works properly</Text>
        <View style={styles.wrapper}>{renderScrollViews('a')}</View>
      </View>

      <View style={styles.scrollContainer}>
        <Text style={[styles.title, {color: 'green'}]}>
          Works properly: with margin
        </Text>
        <View style={[styles.wrapper, {marginHorizontal: 10}]}>
          {renderScrollViews('b')}
        </View>
      </View>

      <View style={styles.scrollContainer}>
        <Text style={[styles.title, {color: 'red'}]}>
          Don't work: with padding
        </Text>
        <View style={[styles.wrapper, {paddingHorizontal: 20}]}>
          {renderScrollViews('c')}
        </View>
      </View>

      <View style={styles.scrollContainer}>
        <Text style={[styles.title, {color: 'red'}]}>
          Don't work: with element
        </Text>
        <View style={styles.wrapper}>
          <View style={{width: 100, height: 50, backgroundColor: 'gray'}}>
            <Text>Random element</Text>
          </View>
          {renderScrollViews('d')}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: itemSize,
  },
  wrapper: {
    width: screenWidth,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    height: itemSize * 3,
  },
  title: {
    fontSize: 18,
    marginVertical: 16,
  },
});

export default App;
