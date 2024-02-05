
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/Search';
import Add from './components/Add';
import { useEffect, useState } from 'react';

export default function App() {

  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

    const select = (id) => {
      setSelectedId(id);
    }

    useEffect(() => {
      setItems(DATA);
    }, [])


  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <Add items={items} setItems={setItems}/>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem={({item}) => (
        <Row person={item} selectedId={selectedId} select={select} styles={styles}/>
      )}
        
      ></FlatList>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
