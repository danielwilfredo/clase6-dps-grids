import React, { Component , useState} from 'react';
import { StyleSheet, View, Text, Alert, TouchableHighlight, ImageBackground } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default function Example() {
  const [items, setItems] = useState([
    { name: 'TURQUOISE', code: '#1abc9c', uri:'https://fsr.eui.eu/wp-content/uploads/2021/03/pawel-czerwinski-KWpm9MmEo2s-unsplash-scaled.jpg' },
    { name: 'EMERALD', code: '#2ecc71', uri:'https://gemfields.com/wp-content/uploads/2021/04/ESHED_Emeralds_1080x1080px_final.jpg' },
    { name: 'PETER RIVER', code: '#3498db', uri:'https://ih1.redbubble.net/image.368406370.1814/fcp,small,wall_texture,product,750x1000.u2.jpg' },
    { name: 'AMETHYST', code: '#9b59b6' , uri:'https://img.joomcdn.net/8b4e9dd870365b9eef7da16cf6075d107294f7fe_original.jpeg'},
    { name: 'WET ASPHALT', code: '#34495e' , uri:'https://cgmood.com/storage/previews/12-2017/108/108-2.jpeg'},
    { name: 'GREEN SEA', code: '#16a085' , uri:'https://media-cdn.tripadvisor.com/media/photo-s/10/60/91/a2/green-sea-bay.jpg'},
    { name: 'NEPHRITIS', code: '#27ae60' , uri:'https://ih1.redbubble.net/image.368416231.2054/mp,840x860,gloss,f8f8f8,t-pad,1000x1000,f8f8f8.u3.jpg'},
    { name: 'BELIZE HOLE', code: '#2980b9' , uri:'https://upload.wikimedia.org/wikipedia/commons/6/61/Great_Blue_Hole.jpg'},
    { name: 'WISTERIA', code: '#8e44ad' , uri:'https://upload.wikimedia.org//wikipedia/commons/thumb/0/07/Chinese_Wisteria_Bl%C3%BCtentrauben.JPG/1200px-Chinese_Wisteria_Bl%C3%BCtentrauben.JPG'},
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' , uri:'https://i.blogs.es/1cd8a6/dualshock-4-midnight-blue/840_560.jpg'},
    { name: 'SUN FLOWER', code: '#f1c40f' , uri:'https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwfd95ba5a/images/products/flowers/01814_01_sunrichorangesum.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196'},
    { name: 'CARROT', code: '#e67e22' , uri:'https://www.collinsdictionary.com/images/full/carrot_125262134.jpg'},
    { name: 'ALIZARIN', code: '#e74c3c' , uri:'https://static.educalingo.com/img/en/800/alizarin.jpg'},
    { name: 'CLOUDS', code: '#ecf0f1' , uri:'https://ec.europa.eu/research-and-innovation/sites/default/files/styles/w1108/public/hm/field/image/clouds-mf.jpg?itok=yurxzoSX'},
    { name: 'CONCRETE', code: '#95a5a6' , uri:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/concrete-wall-royalty-free-image-1572896179.jpg?crop=1xw:0.74929xh;center,top&resize=1200:*'},
    { name: 'ORANGE', code: '#f39c12' , uri:'https://www.collinsdictionary.com/images/full/orange_342874121.jpg'},
    { name: 'PUMPKIN', code: '#d35400' , uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5MnTVhwmdcujIf_La43q9HtOsir2CQo5FbV8IfGd0_P1hx5PbkC9kh5jEqsSQQsG2X8&usqp=CAU'},
    { name: 'POMEGRANATE', code: '#c0392b' , uri:'https://www.farmersalmanac.com/wp-content/uploads/2020/11/pomegranate-as_239075380.jpeg'},
    { name: 'SILVER', code: '#bdc3c7' , uri:'https://www.silverinstitute.org/wp-content/uploads/2021/03/Silver-Price-and-investment-homepage.jpg'},
    { name: 'ASBESTOS', code: '#7f8c8d' , uri:'https://upload.wikimedia.org/wikipedia/commons/c/cd/Asbestos_with_muscovite.jpg'},
  ]);

function createButtonAlert (msg){
    Alert.alert(
      "Informacion del Color Seleccionado:",
      msg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    }

  return (
    <SectionGrid
      itemDimension={100}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: 'Colores Aquosos',
          data: items.slice(0, 6),
        },
        {
          title: 'Natural Colors',
          data: items.slice(6, 12),
        },
        {
          title: 'Other Colors',
          data: items.slice(12, 20),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD" onPress={() => createButtonAlert(`Has seleccionado el Color: ${item.name} y su codigo de color es: ${item.code}`)}>
        <View style={[styles.itemContainer, { backgroundColor: item.code }]} >
        <ImageBackground 
          source={{uri: item.uri}}
          style={{ flex: 1,
            width: null,
            height: null,
            }}
        >
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       </View>

 </ImageBackground >
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});