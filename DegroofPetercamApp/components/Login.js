import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';


class Login extends React.Component{
	render(){
		return(
			 <View style={styles.container}>
			 	<Image
		          style={styles.logo}
		          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
		        />
			 	<TextInput style={styles.input}
			 	keyboardType='email-address' 
               	returnKeyType="next" 
               	placeholder='Email'
               	autoCapitalize="none" 
               	onSubmitEditing={() => this.passwordInput.focus()} 
               	autoCorrect={false}
			 	></TextInput>
			 	<TextInput style = {styles.input}   
              	returnKeyType="go" 
              	ref={(input)=> this.passwordInput = input} 
              	placeholder='Password'
              	secureTextEntry
			 	></TextInput>
			 	<TouchableOpacity 
					 onPress={this.props.onPressButton} 
					 style={styles.button}>
					 	<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<View style={styles.containerSign}>
					<Text style = {styles.text}>Don't have an account?</Text>
					<TouchableOpacity 
						 onPress={this.props.onPressButton} 
						 style={styles.buttonSign}>
						 	<Text style={styles.buttonText}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>
			)
	}
}
export default Login;

const styles=StyleSheet.create({
	container:{
		padding: 10
	},
	logo:{
		marginBottom: 20,
		width: 50, 
		height: 50,
		marginLeft: 120
	},
	input:{
		height: 40,
		width: 300,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 20,
        color: '#fff'
	},
	button:{
		backgroundColor: '#00524A',
        paddingVertical: 15
	},
	buttonText:{
		color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
	},
	containerSign:{
		flexDirection: 'row',
		width: 300,
		paddingTop: 20,
		justifyContent: 'space-between',
	},
	text:{
		paddingRight: 10,
	},
	buttonSign:{
		backgroundColor: '#4FBB84',
		padding: 20,
		width: 120,
	}
})