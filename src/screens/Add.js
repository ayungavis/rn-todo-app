import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Navigation from '../components/Navigation';
import '../todo';

export default class Add extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
		}
	}

	goBack = () => {
		todo.push(this.state.input);
		this.props.navigation.goBack();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Add To-Do</Text>
				<Text style={styles.subtitle}>Please fill the form below to add.</Text>
				<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
					<View style={styles.box}>
						<Form style={{width: wp('80%'), alignItems: 'center'}}>
							<Item floatingLabel>
								<Label>Text</Label>
								<Input
									onChangeText={(input) => this.setState({input})} 
								/>
							</Item>
						</Form>
					</View>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
					<TouchableOpacity onPress={this.goBack}>
						<View style={styles.buttonAdd}>
							<Text style={styles.buttonText}>ADD</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#4D73ED',
	},
	title: {
		fontSize: hp('4%'),
		fontWeight: 'bold',
		color: 'white',
		marginTop: 25,
		marginLeft: 25,
	},
	subtitle: {
		fontSize: hp('2%'),
		color: 'white',
		marginLeft: 25,
		marginTop: 5,
	},
	box: {
		width: wp('88%'),
		height: hp('15%'),
		borderRadius: 10,
		marginTop: 15,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 5},
		shadowOpacity: 0.2,
		shadowRadius: 20,
		elevation: 10,
		
	},
	buttonAdd: {
		width: wp('88%'),
		height: hp('8%'),
		borderRadius: 10,
		marginTop: 15,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 5},
		shadowOpacity: 0.2,
		shadowRadius: 10,
		elevation: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: hp('2.5%'),
		fontWeight: 'bold',
		color: 'black',
	}
});