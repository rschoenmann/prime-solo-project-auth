import React, {Component} from 'react';
import {connect} from 'react-redux';

class ViewShelf extends Component{
	render(){
		return(
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
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><p>this.props.username</p></td>
							<td><p>this.props.itemName</p></td>
							<td><p>this.props.itemDescription</p></td>
							<td><p>this.props.itemImage</p></td>
						</tr>
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