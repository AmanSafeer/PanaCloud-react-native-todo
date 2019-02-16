import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      padding:20,
      flexWrap:'wrap',
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomColor:"lightgray",
        borderBottomWidth:1,
        width:"100%"
    },
    heading:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    imageWrapper:{
        alignItems:"center",
        justifyContent:"center",
    },
    image:{
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor:"#56b7e2",
      },
    textWrapper:{
       
        alignItems:"flex-start",
        justifyContent:"flex-start",
        flexWrap:"wrap"
    },
    sideCircleBox:{
        justifyContent:"center",
        alignItems:"center",
      },
      topCircle:{
        position:"absolute",
        bottom:"60%",
        width:100,
        height:100,
        borderRadius:100,
        backgroundColor:"#74d5ff"
      },
      circle:{
        position:"absolute",
        bottom:0,
        left:3,
        justifyContent:"center",
        alignItems:"center",
        width:20,
        height:20,
        borderRadius:100,
        backgroundColor:"red"
      },
    todo:{
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"center",
        flexWrap:"wrap",
        borderBottomColor:"lightgray",
        borderBottomWidth:1,
    },
    schedule:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:'100%'
    }

});

 class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.heading}>
                <View style={styles.imageWrapper}>
                  <View style={styles.image}>
                  </View>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={{color:"#3aafe2",fontSize:18,fontWeight:"bold"}}>{this.props.person}</Text>
                    <Text style={{color:"gray"}}>{this.props.about}</Text>
                </View>
            </View>
             <View style={styles.sideCircleBox}>
                <View style={styles.topCircle}>
                    <View style={styles.circle}><Text style={{color:"white"}}>2</Text></View>
                </View>
            </View> 
        </View>
        <View style={styles.todo}>
            <Text style={{color:"#3aafe2",fontSize:16,fontWeight:"bold"}}>Goals</Text>
            <Text >Project Management skills </Text>
        </View>
        <View style={styles.todo}>
                <Text style={{color:"#3aafe2",fontSize:16,fontWeight:"bold"}}>Schedule</Text>
            <View style={styles.schedule}>
                <Text  style={{color:"gray"}}>Start From</Text>
                <Text  style={{color:"gray"}}>1 March 2019</Text>    
            </View>
            <View style={styles.schedule}>
                <Text style={{color:"gray"}}> Plan</Text>
                <Text  style={{color:"gray"}}>6 months</Text>    
            </View>
        </View>
        <View></View>
        </View>
    );
  }
}
function mapStateToProps(state){
    return ({
        person:state.root.person,
         about:state.root.about
    })
  }
  function mapDispatchToProps(dispatch){
    return ({
        add: (obj)=> dispatch(add(obj)),
  
    })
  } 
export default connect(mapStateToProps,mapDispatchToProps)(Details)