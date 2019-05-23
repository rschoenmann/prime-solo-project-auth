import React from 'react';
import {connect} from 'react-redux';

const ViewShelf = () => {

}


const mapStateToProps = state => ({
	user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ViewShelf);