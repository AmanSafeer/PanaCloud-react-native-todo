import React, {Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView, TouchableOpacity,Dimensions,Image,ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {add} from '../store/action/action';
import image1 from '../images/image1.png';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.png';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3aafe2',
    alignItems:'stretch',
    padding:20,
    flexWrap:'wrap',
    
  },
  formBox:{
    justifyContent:"center",
    alignItems:"center",
    flex:2
  },
  form:{
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
    width:130,
    height:130,
    borderRadius:100,
    borderColor:"#74d5ff",
    borderWidth: 1,
    backgroundColor:"#56b7e2",

  },
  imagecircle:{
    position:"absolute",
    top:5,
    right:5,
    width:30,
    height:30,
    borderColor:"#3aafe2",
    borderWidth: 2,
    borderRadius:100,
    backgroundColor:"#74d5ff",
    
  },
  textWrapper:{
    alignItems:"stretch",
    justifyContent:"center",
    width: width/1.5,
  },
  input:{
    textAlign:"center",
    borderColor:"transparent",
    borderBottomColor:"#74d5ff",
    borderBottomWidth: 1,
    color:"white",
    fontSize:14
  },
  inputName:{
    fontWeight:"bold",
    fontSize:22
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
    shadowColor: 'gray',
    elevation:5,
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
      error:false,
      images:["",image1,image2,image3],
      imgNumber:0
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
  changeImage=()=>{
    if(this.state.imgNumber == this.state.images.length-1){
      this.setState({
        imgNumber:1
      })
      return
    }
    this.setState({
      imgNumber:this.state.imgNumber+1
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
          <View style={styles.form}>

            <View style={styles.imageWrapper}>

              <View style={styles.imageBox}>
                <TouchableOpacity style={styles.image} onPress={this.changeImage}>
                {this.state.imgNumber > 0 ? <Image source={this.state.images[this.state.imgNumber]} style={{width: '100%', height: '100%',borderRadius:100}}/>:null}
                  <View style={styles.imagecircle}></View>
                </TouchableOpacity>
              </View>

            </View>
              {this.state.error && <Text>Empty Input Field</Text>}
            <View style={styles.textWrapper}>
              <TextInput name="name" style={[styles.input,styles.inputName]} value={this.state.person} onChangeText={(text)=>this.eventhandlerName(text)} placeholder="Person's Name" placeholderTextColor="white"/>
              <TextInput name="about" style={styles.input} value={this.state.about} onChangeText={(text)=>this. eventhandlerAbout(text)} placeholder="Statemaent about this person" placeholderTextColor="white"/>
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