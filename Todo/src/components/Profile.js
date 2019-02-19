import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,Dimensions,ScrollView ,Image} from 'react-native';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';
import Goals from '../images/goals.jpg'
import Schedule from '../images/schedule.jpg'
import Projects from '../images/projects.jpg'
import Contacts from '../images/contacts.jpg'
import image1 from '../images/image1.png';

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
        height:"90%",
        alignItems:"center",    
      },
      profileBox:{
        justifyContent:"space-around",
        alignItems:"center",
        position:"absolute",
        height:"100%",
        backgroundColor:"white",
        shadowColor: 'lightgray',
        borderRadius:5,
        flex:2
      },
      profileBox1:{
        width:"92%",
        top:14,
        elevation: 1,
      },
      profileBox2:{
        width:"96%",
        top:7,
        elevation: 2,
      },
      profileBox3:{
        width:"100%",
        top:0,
        elevation: 3,
      },
      profile:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
      },
      imageWrapper:{
        width:width/1.8,
        alignItems:"center",
        justifyContent:"center",
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
      notificationCircle:{
        position:"absolute",
        bottom:-8,
        justifyContent:"center",
        alignItems:"center",
        width:20,
        height:20,
        borderRadius:100,
        backgroundColor:"red"
      },
      todos:{
        flex:1,
        flexDirection:"row",
      },
      todo:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      },
      todoCircle:{
        position:"absolute",
        bottom:-3,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        width:20,
        height:20,
        borderRadius:100,
        backgroundColor:"orange"
      },
      button:{
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
        shadowColor: 'gray',
        elevation:5,
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
          <Image source={Contacts} style={{width:width/10, height: height/15, position:"absolute", bottom:10}}/>
            <View style={styles.notificationCircle}><Text style={{color:"white"}}>2</Text></View>
          </View>
      </View>

       <View style={styles.wrapper}>
          <View style={styles.profileBoxes}>
              <View style={[styles.profileBox,styles.profileBox1]} ></View>
              <View style={[styles.profileBox,styles.profileBox2]}></View>
              <View style={[styles.profileBox,styles.profileBox3]}>

                <View style={styles.profile}> 
                  <View style={styles.imageWrapper}>
                    <View style={styles.image}>
                    <Image source={image1} style={{width:"100%", height:"100%"}}/>
                    </View>
                  </View>
                  <View style={styles.textWrapper}>
                      <Text style={{color:"#3aafe2",fontSize:20,fontWeight:"bold"}}>{this.props.person}</Text>  
                  </View>
                  <View style={styles.textWrapper}>
                      <Text style={{color:"gray", textAlign:"center"}}>{this.props.about} </Text>
                  </View>
                </View>

                <View style={styles.todos}>
                  <View style={styles.todo}>
                      <View style={styles.todoImage}>
                        <Image source={Goals} style={{width:width/5, height: height/8}}/>
                        <View style={styles.todoCircle}><Text style={{color:"white"}}>2</Text></View>
                      </View>
                      <View style={styles.todoText}>
                        <Text>Goals</Text>
                      </View>
                  </View>
                  <View style={styles.todo}>
                      <View style={styles.todoImage}>
                        <Image source={Schedule} style={{width:width/5, height: height/8}}/>
                        <View style={styles.todoCircle}><Text style={{color:"white"}}>2</Text></View>
                      </View>
                      <View style={styles.todoText}>
                        <Text>Schedule</Text>
                      </View>
                  </View>
                  <View style={styles.todo}>
                      <View style={styles.todoImage}>
                        <Image source={Projects} style={{width:width/5, height: height/8}}/> 
                        <View style={styles.todoCircle}><Text style={{color:"white"}}>2</Text></View>
                      </View>
                      <View style={styles.todoText}>
                        <Text>Projects</Text>
                      </View>
                  </View>
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