import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosWithAuth from './AxiosWithAuth';
import FriendForm from "./FriendForm";

const Friends = (props) => {
	const [friendsList, setFriendsList] = useState([]);
	
	useEffect(() => {
		axiosWithAuth().get('http://localhost:5000/api/friends')
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log(err.response));
	}, []);

	const addFriend = friend => {
		axiosWithAuth().post('http://localhost:5000/api/friends', friend)
			.then(res => setFriendsList(res.data))
			.catch(err => console.log(error.response))
	}

	return (
		<div>
			<h1>Friends</h1>
			<FriendForm submitFriend={addFriend} />
			{friendsList.map(friend => {
				return <div key={friend.id}>{friend.name}</div>
			})}
		</div>
	)
};

export default Friends;