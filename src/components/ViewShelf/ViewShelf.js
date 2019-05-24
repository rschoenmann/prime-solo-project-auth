import React, {Component} from 'react';
import {connect} from 'react-redux';

class ViewShelf extends Component{

	componentDidMount(){
		this.props.dispatch({type: 'FETCH_SHELF'})
	}

	render(){
		let deleteDisplay;
		console.log('this.props.user', this.props.user)
		console.log('this.props.shelf', this.props.shelf);

		// if(this.props.user.id === this.props.shelf.item.userid){
		// 	deleteDisplay = (<button>Delete Item</button>)
		// }else{
		// 	deleteDisplay = (`You can't delete this!`)
		// }
		return(
			<div>
				<h2>Baconian Shelf!</h2>
				<p>Here all all the items people have added to the shelf:</p>
				<table>
					<thead>
						<tr>
							<th>User</th>
							<th>Item Description</th>
							<th>Image</th>
							<th>Delete Item?</th>
						</tr>
					</thead>
					<tbody>
						{this.props.shelf.map((item) => {
							return(
								<tr>
									<td>{item.username}</td>
									<td>{item.description}</td>
									<td><img className="image" src={item.image_url} alt={item.description}/></td>
									<td>{deleteDisplay}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user,
	shelf: state.viewShelfReducer
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ViewShelf);