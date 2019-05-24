import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ViewShelf.css';


class ViewShelf extends Component {

	componentDidMount() {
		this.props.dispatch({ type: 'FETCH_SHELF' })
	}

	deleteItem = (itemid) => {
		console.log('handleClick itemid:', itemid);
		this.props.dispatch({type: 'DELETE_ITEM', payload: itemid})
	}

	render(){
		let deleteDisplay;
		console.log('this.props.user', this.props.user)
		console.log('this.props.shelf', this.props.shelf);
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
							if (this.props.user.id === item.userid) {
								deleteDisplay = (<button onClick={() => this.deleteItem(item.itemid)}>Delete Item</button>)
							} else {
								deleteDisplay = (`You can't delete this!`)
							}
							return(
								<tr key={item.itemid}>
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


export default connect(mapStateToProps)(ViewShelf);