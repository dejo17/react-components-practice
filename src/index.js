import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {

	return (
		<div className="ui container comments">
			<CommentDetail 
				author = "Alex" 
				timeAgo = "Today at 2:02PM" 
				text="Dude you missed one comment below XD" 
				src={faker.image.avatar()}
			/>
			<CommentDetail 
				author = "Sam" 
				timeAgo = "Today at 4:45AM" 
				text="I commented on this first!" 
				src={faker.image.avatar()}
			/>
			<CommentDetail 
				author = "Jane" 
				timeAgo = "Yesterday at 1:40PM" 
				text="Great text!" 
				src={faker.image.avatar()}
			/>
		</div>

	);
}

ReactDOM.render(
	<App />, document.querySelector('#root')
);