import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,Dimensions,ScrollView,Image} from 'react-native';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';
import Goals from '../images/goals.jpg'
import Schedule from '../images/schedule.jpg'
import Projects from '../images/projects.jpg'
import image1 from '../images/image1.png';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      flexWrap:'wrap',
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        flex:1,
        shadowColor:'lightgray',
        elevation: 1,
        borderRadius:1
    },
    heading:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    imageWrapper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    image:{
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:"#56b7e2",
      },
    textWrapper:{
       flex:3,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        flexWrap:"wrap"
    },
    sideCircleBox:{
        // flex:1,
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
      notificationCircle:{
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
    todos:{
      flex:4,
      width:"100%" ,
      justifyContent:"space-evenly",
      alignItems:"center"
    },  
   
    todoCard:{
        flex:1,
        flexDirection:"row",
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
        borderBottomColor:"lightgray",
        borderBottomWidth: 1,
        
    },
    icon:{
        flex:1,
        // borderColor:"#3aafe2",
        // borderWidth: 1,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    todoDetails:{
        flex:3,
        
    },
    todoOptions:{
        flex:1,
        // borderColor:"#3aafe2",
        // borderWidth: 1,
        alignItems:"center"
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
                        <Image source={image1} style={{width:"100%", height:"100%"}}/>
                        </View>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={{color:"#3aafe2",fontSize:18,fontWeight:"bold"}}>{this.props.person}</Text>
                        <Text style={{color:"gray"}}>{this.props.about}</Text>
                    </View>
                </View>
                <View style={styles.sideCircleBox}>
                    <View style={styles.topCircle}>
                        <View style={styles.notificationCircle}><Text style={{color:"white"}}>2</Text></View>
                    </View>
                </View> 
            </View>
            <View style={styles.todos}>
              
                    <View style={styles.todoCard}>
                        <View style={styles.icon}>
                        <Image source={Goals} style={{width:width/6, height: height/10}}/>
                        </View>
                        <View style={styles.todoDetails}>
                            <Text style={{color:"#3aafe2",fontSize:16,fontWeight:"bold",}}>Goals</Text>
                            <Text >Project Management skills </Text>
                            <Text >Development </Text>
                        </View>
                        <View style={styles.todoOptions}><Text>...</Text></View>
                    </View>
                    <View style={styles.todoCard}>
                        <View style={styles.icon}>
                        <Image source={Schedule} style={{width:width/6, height: height/10}}/>
                        </View>
                        <View style={styles.todoDetails}>
                            <Text style={{color:"#3aafe2",fontSize:16,fontWeight:"bold",}}>Schedule</Text>
                            <Text >Project Management skills </Text>
                            <Text >Development </Text>
                        </View>
                        <View style={styles.todoOptions}><Text>...</Text></View>
                    </View>
                    <View style={styles.todoCard}>
                        <View style={styles.icon}>
                        <Image source={Projects} style={{width:width/6, height: height/10}}/>
                        </View>
                        <View style={styles.todoDetails}>
                            <Text style={{color:"#3aafe2",fontSize:16,fontWeight:"bold",}}>Projects</Text>
                            <Text >Project Management skills </Text>
                            <Text >Development </Text>
                        </View>
                        <View style={styles.todoOptions}><Text>...</Text></View>
                    </View>
                    {/* <View style={styles.todoCard}>
                        <View style={styles.icon}>
                            <Text>Icon...</Text>
                        </View>
                        <View style={styles.todoDetails}>
                            <Text style={{color:"#3aafe2",fontSize:16,fontWeight:"bold",}}>Goals</Text>
                            <Text >Project Management skills </Text>
                            <Text >Development </Text>
                        </View>
                        <View style={styles.todoOptions}><Text>...</Text></View>
                    </View> */}
                
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
export default connect(mapStateToProps,mapDispatchToProps)(Details)