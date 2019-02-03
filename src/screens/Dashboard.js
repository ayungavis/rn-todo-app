import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Fab, Icon, Container } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Navigation from '../components/Navigation';
import '../todo';

MAX_HEADER_HEIGHT = '20%';
MAX_BOX_HEIGHT = '10%';

export default class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			item: todo
		}
	}

	onPress = () => {
		this.props.navigation.navigate('Add');
	} 

	render() {		
		const { navigate } = this.props.navigation
		return (
			
			
			<ScrollView>
			<Container>
			<View style={styles.container}>
				<View style={styles.header}></View>
				<Text style={styles.title}>To-Do App</Text>
				<Text style={styles.subtitle}>Add your to-do list here.</Text>
				<View style={{ justifyContent: 'center', alignItems: 'center'}}>
					<FlatList
						data={this.state.item}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({item}) => 
							<View style={styles.listBox}>
								<Text style={styles.todoTitle}>{item}</Text>
							</View>
						}
					/>
				</View>
				<Fab
					active={this.stats}
	        		containerStyle={{ }}
	        		style={styles.fab}
	        		position="bottomRight"
	        		onPress={this.onPress}>
	        		<Icon name="add" />
				</Fab>
				
			</View>

			</Container>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: hp('100%'),
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: '#4D73ED',
		height: hp('20%'),
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
		marginBottom: 15,
	},
	listBox: {
		width: wp('88%'),
		height: hp('10%'),
		borderRadius: 10,
		marginTop: 0,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 5},
		shadowOpacity: 0.2,
		shadowRadius: 20,
		elevation: 10,
		justifyContent: 'center',
		paddingLeft: 15,
		marginBottom: 15,
		marginLeft: 15,
		marginRight: 15,
	},
	todoTitle: {
		fontSize: hp('2.5%'),
		fontWeight: 'bold',
		color: 'black',
	},
	todoDesc: {
		fontSize: hp('2%'),
		color: 'black',
	},
	fab: {
		backgroundColor: '#4D73ED',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 3},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 10,
	}
});