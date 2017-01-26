import React from 'react';
import '../styles/layout.less';

class Layout extends React.Component {

	constructor (props) {
		super(props);
	}


	render () {
		return (
				<div className="layout">
					{this.props.children}
				</div>
			);
	}
} 

export default Layout;