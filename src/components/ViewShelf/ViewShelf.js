import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewShelf extends Component {




	componentDidMount() {
		this.props.dispatch({ type: 'FETCH_SHELF' })
	}

	render() {
		return (
			<div>
				<h2>Baconian Shelf!</h2>
				<p>Here all all the items people have added to the shelf:</p>
				<table>
					<thead>
						<tr>
							<th>User</th>
							<th>Item Name</th>
							<th>Item Description</th>
							<th>Image</th>
							<th>Delete Item?</th>
						</tr>
					</thead>
					<tbody>
						{this.props.state.viewShelfReducer.map((item) => {
							return (
								<tr>
									<td>{item.username}</td>
									<td>{item.description}</td>
									<td>{item.image_url}</td>
									<td><button>DELETE ITEM</button></td>
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
	state
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ViewShelf);