// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//     color: '#ac2154',
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '900',
//     color: '#ac2154',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: '#ac2154',
//   },
//   highlight: {
//     fontWeight: '700',
//     color: '#ac2154',
//   },
// });

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'},
    {key: 10, item: 'Item 10'},
    {key: 11, item: 'Item 11'},
    {key: 13, item: 'Item 13'},
    {key: 14, item: 'Item 14'},
    {key: 15, item: 'Item 15'},
    {key: 16, item: 'Item 16'},
  ]);

  const [flatListElements, setFlatListElements] = useState([
    {name: 'name 1'},
    {name: 'name 2'},
    {name: 'name 3'},
    {name: 'name 4'},
    {name: 'name 5'},
    {name: 'name 6'},
    {name: 'name 8'},
    {name: 'name 9'},
    {name: 'name 10'},
    {name: 'name 11'},
    {name: 'name 13'},
    {name: 'name 14'},
    {name: 'name 15'},
    {name: 'name 16'},
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Title 1 - 1', 'Title 1 - 2', 'Title 1 - 3'],
    },
    {
      title: 'Title 2',
      data: ['Title 2 - 1', 'Title 2 - 2', 'Title 2 - 3'],
    },
    {
      title: 'Title 3',
      data: ['Title 3 - 1', 'Title 3 - 2'],
    },
    {
      title: 'Title 4',
      data: ['Title 4 - 1'],
    },
  ];
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key: 17, item: 'Item 17'}]);
    setRefreshing(false);
  };
  return (
    // <View style={styles.body}>
    //   <ScrollView
    //     refreshControl={
    //       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //     }>
    //     {Items.map(x => {
    //       return (
    //         <View style={styles.item} key={x.key}>
    //           <Text style={styles.text}> {x.item}</Text>
    //         </View>
    //       );
    //     })}
    //   </ScrollView>

    //   {/* <Button title="Ubdate Name" onPress={handleUpdateName}></Button> */}
    // </View>

    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={flatListElements}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}> {item.name}</Text>
    //     </View>
    //   )}
    // />

    <SectionList
      keyExtractor={(item, index) => index.toString}
      sections={DATA}
      renderItem={({item}) => <Text style={styles.text}> {item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}> {section.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  item: {
    backgroundColor: '#a5cf16',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
