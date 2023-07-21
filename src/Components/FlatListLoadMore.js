// import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// const FlatListLoadMore = () => {
//     const[products,setProducts] = useState(['cyan','pink','red','yellow','blue','green','black','orange','purple','white','lightgreen','darkblue','grey']);

//     const[loading,setLoading] = useState(false);

//     const loadMore = ()=>{
//         setLoading(true);
//         let tempData = products;
//         // api hit for new data
//         tempData.push(...products);
//         setProducts(tempData);
//         setLoading(false);
//     }
//   return (
//     <View style={{flex:1}}>
//       <Text>FlatListLoadMore</Text>
//       <FlatList
//         data={products}
//         onEndReachedThreshold={60}
//         ListFooterComponent={({item,index})=>{
//             return (
//             <View>
//                 {loading && (
//                 <View style={{width:'100%',height:50,justifyContent:'center',alignItems:'center'}}>
//                     <ActivityIndicator/>
//                 </View>
//                 )}
//             </View>
//             )
//         }}
//         onEndReached={()=>{
//             loadMore()
//         }}
//         renderItem={({item,index})=>{return(
//             <View style={{backgroundColor:item,height:200,width:'100%',flex:1,justifyContent:'center',alignItems:'center'}}>
//                 <Text style={{color:'#fff'}}>{item}</Text>
//             </View>
//         )}}
//       />
//     </View>
//   )
// }

// export default FlatListLoadMore

// const styles = StyleSheet.create({})



import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

const FlatListLoadMore = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const fetchTodosFromApi = async (page) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${itemsPerPage}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const newData = await fetchTodosFromApi(page);
      if (newData.length > 0) {
        setTodos((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error loading more data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{fontSize:24,margin:10,textAlign:'center'}}>FlatListLoadMore</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => (
          <View>
            {loading && (
              <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
              </View>
            )}
          </View>
        )}
        onEndReached={loadMore}
        renderItem={({ item,index }) => (
          <View style={{ backgroundColor: item.completed ? 'green' : 'red', height: 60, width: '100%', justifyContent: 'center', paddingHorizontal: 10 }}>
            <Text style={{ color: '#fff' }}>{index +1} -- {item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FlatListLoadMore;

const styles = StyleSheet.create({});
