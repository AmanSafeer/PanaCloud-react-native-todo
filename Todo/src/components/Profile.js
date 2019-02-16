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
      topCircleBox:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
      },
      wrapper:{
        justifyContent:"center",
        alignItems:"center",
        // borderColor:"#74d5ff",
        // borderWidth: 1,
        width:"100%",
        flex:6
      },
      profileBoxes:{
        width:"90%",
        height:"90%"     
      },
      profileBox:{
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        width:"100%",
        height:"100%",
        // borderColor:"lightgray",
        // borderWidth: 1,
        backgroundColor:"white",
        shadowColor: 'lightgray',
        elevation: 3,
        borderRadius:5
      },
      profileBox1:{
        top:14,
        elevation: 1,
      },
      profileBox2:{
        top:7,
        elevation: 2,
      },
      imageWrapper:{
        width:width/1.8,
        alignItems:"center",
        justifyContent:"center",
      },
      imageBox:{
        position:"relative",
      },
      image:{
        width:120,
        height:120,
        borderColor:"#74d5ff",
        borderWidth: 1,
        borderRadius:100,
        backgroundColor:"#56b7e2",
      },
      textWrapper:{
        alignItems:"center",
        justifyContent:"center",
        width:width/1.8,
      },
      topCircle:{
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:"60%",
        width:100,
        height:100,
        // borderColor:"#74d5ff",
        // borderWidth: 1,
        borderRadius:100,
        backgroundColor:"#74d5ff"
      },
      circle:{
        position:"absolute",
        bottom:-8,
        justifyContent:"center",
        alignItems:"center",
        width:20,
        height:20,
        borderRadius:100,
        backgroundColor:"red"
      },
      button:{
        // borderColor:"#74d5ff",
        // borderWidth: 1,
        justifyContent:"center",
        alignItems:"center",
        
      },
      add:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ffffff",
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'#3aafe2',
        zIndex:1,
      },
      bottomCircle:{
        position:"absolute",
        top:"60%",
        width:100,
        height:100,
        backgroundColor:"lightgray",
        borderRadius:100,
      },
});

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.topCircleBox}>
          <View style={styles.topCircle}>
            {/* <Text style={{color:"white"}}>$</Text> */}
            <View style={styles.circle}><Text style={{color:"white"}}>2</Text></View>
          </View>
      </View>

       <View style={styles.wrapper}>
          <View style={styles.profileBoxes}>
              <View style={[styles.profileBox,styles.profileBox1]} ></View>
              <View style={[styles.profileBox,styles.profileBox2]}></View>
              <View style={[styles.profileBox]}>
                <View style={styles.imageWrapper}>
                  <View style={styles.image}>
                  </View>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={{color:"#3aafe2",fontSize:20,fontWeight:"bold"}}>{this.props.person}</Text>
                    <Text style={{color:"gray", textAlign:"center"}}>{this.props.about}</Text>
                </View>
              </View>
          </View>
        </View>
        
        <View style={styles.button}>
          <TouchableOpacity style={styles.add} onPress={()=>{this.props.navigation.navigate("Details")}}>
            <Text style={{color:"white",fontSize:18}}>+</Text>
          </TouchableOpacity>
          <View style={styles.bottomCircle}></View>
        </View>
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

export default connect(mapStateToProps,mapDispatchToProps)(Profile)