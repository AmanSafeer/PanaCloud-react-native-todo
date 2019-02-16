import React, {Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView, TouchableOpacity,Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {add} from '../store/action/action'
const {height, width} = Dimensions.get('window');
import axios from 'axios'
import details from './details';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#3aafe2',
    padding:20,
    flexWrap:'wrap',
    
  },
  formBox:{
    
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flex:2
  },
  form:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    flexWrap:"wrap",
  },
  imageWrapper:{
    alignItems:"center",
    justifyContent:"center",
  },
  imageBox:{
    position:"relative",
  },
  image:{
    width:150,
    height:150,
    borderRadius:100,
    backgroundColor:"#56b7e2",
  },
  circle:{
    position:"absolute",
    top:5,
    right:5,
    width:30,
    height:30,
    borderColor:"#74d5ff",
    borderWidth: 1,
    borderRadius:100,
    backgroundColor:"#56b7e2"
  },
  textWrapper:{
    alignItems:"center",
    justifyContent:"center",
  },
  input:{
    minWidth: width/1.2,
    borderColor:"transparent",
    borderBottomColor:"#74d5ff",
    borderBottomWidth: 1,
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
    zIndex:1,
  },
  bottomCircle:{
    position:"absolute",
    top:"50%",
    width:100,
    height:100,
    backgroundColor:"#74d5ff",
    borderRadius:100,
  },
 
});


 class Todo extends Component{
  constructor(){
    super()
    this.state={
      person:'',
      about:'',
      error:false
    }
  }
   eventhandlerName=(text)=>{
    this.setState({
      person:text
    })
  }
  eventhandlerAbout=(text)=>{
    this.setState({
      about:text
    })
  }

  add=()=>{
    const {person,about}=this.state;
    if(!person || !about){
      this.setState({
        error:true
      })
      return;
    }
    const obj ={person,about}
    this.props.add(obj)
    this.props.navigation.navigate("Profile");
    this.setState({
      person:'',
      about:'',
      error:false
    })
    
  }
 
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formBox}>
        {this.state.error &&
              <Text style={{color:"red"}}> Input Field Empty</Text>
            }
          <View style={styles.form}>
          <View style={styles.imageWrapper}>
              <View style={styles.imageBox}>
                <View style={styles.image}>
                  <View style={styles.circle}></View>
                </View>
              </View>
            </View>
            <View style={styles.textWrapper}>
              <TextInput name="name" style={styles.input} value={this.state.person} onChangeText={(text)=>this.eventhandlerName(text)} placeholder="Person Name" placeholderTextColor="white"/>
              <TextInput name="about" style={styles.input} value={this.state.about} onChangeText={(text)=>this. eventhandlerAbout(text)} placeholder="Something about person" placeholderTextColor="white"/>
            
            </View>
          </View>
        </View>
        <View style={styles.button}>
          
          <TouchableOpacity style={styles.add} onPress={this.add}>
            <Text style={{color:"#3aafe2",fontSize:18}}>></Text>
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

export default connect(mapStateToProps,mapDispatchToProps)(Todo)