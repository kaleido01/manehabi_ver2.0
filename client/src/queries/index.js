import { gql } from "apollo-boost";

export const CREATE_HABIT = gql`
	mutation createHabit(
		$title: String!
		$description: String!
		$units: [String!]
	) {
		createHabit(title: $title, description: $description, units: $units) {
			title
			description
		}
	}
`;
export const DELETE_HABIT = gql`
	mutation deleteHabit($_id: ID!) {
		deleteHabit(_id: $_id) {
			_id
		}
	}
`;

export const UPDATE_HABIT = gql`
	mutation updateHabit($_id: ID!, $todayRecords: [todayRecord]) {
		updateHabit(_id: $_id, todayRecords: $todayRecords)
	}
`;
export const RESET_COUNT = gql`
	mutation resetCount($_id: ID!) {
		resetCount(_id: $_id) {
			_id
		}
	}
`;

export const STAR_HABIT = gql`
	mutation starHabit($_id: ID!) {
		starHabit(_id: $_id) {
			_id
			starUser {
				_id
			}
		}
	}
`;
export const UNSTAR_HABIT = gql`
	mutation unStarHabit($_id: ID!) {
		unStarHabit(_id: $_id) {
			_id
			starUser {
				_id
			}
		}
	}
`;
export const GET_CURRENT_USER = gql`
	query getCurrentUser {
		getCurrentUser {
			_id
			username
			email
			imageUrl
			joinDate
			oneWord
			favorites {
				_id
				title
				createdAt
				creator {
					_id
					username
					imageUrl
				}
			}
		}
	}
`;

export const GET_ALL_HABITS = gql`
	query getAllHabits(
		$offset: Int
		$limit: Int
		$descending: String
		$option: String
		$searchTerm: String
	) {
		getAllHabits(
			offset: $offset
			limit: $limit
			descending: $descending
			option: $option
			searchTerm: $searchTerm
		) {
			habits {
				_id
				title
				description
				countDate
				startDate
				limitDate
				createdAt
				starUser {
					_id
				}
				creator {
					_id
					username
					imageUrl
					oneWord
				}
			}
			pageInfo {
				startCursor
				endCursor
				hasNextPage
			}
		}
	}
`;
export const GET_USER_HABITS = gql`
	query getUserHabits($offset: Int, $limit: Int) {
		getUserHabits(offset: $offset, limit: $limit) {
			habits {
				_id
				title
				description
				countDate
				startDate
				limitDate
				createdAt
				updateDate
				starUser {
					_id
				}
				creator {
					_id
					username
					imageUrl
					oneWord
				}
				habitRecords {
					unit
					_id
				}
			}
			pageInfo {
				startCursor
				endCursor
				hasNextPage
			}
		}
	}
`;
export const GET_HABIT = gql`
	query getHabit($_id: ID!) {
		getHabit(_id: $_id) {
			_id
			title
			description
			countDate
			startDate
			limitDate
			createdAt
			numberOfFailure
			starUser {
				_id
			}
			habitRecords {
				unit
				_id
			}

			creator {
				_id
				username
				imageUrl
				joinDate
				oneWord
			}
		}
	}
`;

export const GET_HABIT_RECORDS = gql`
	query getHabitRecords($habitId: ID!, $habitRecordNumber: ID!, $limit: Int!) {
		getHabitRecords(
			habitId: $habitId
			habitRecordNumber: $habitRecordNumber
			limit: $limit
		) {
			_id
			date
			total
			habitId
			today
		}
	}
`;
export const GET_HABIT_TIMERECORDS = gql`
	query getHabitTimeRecords($_id: ID!, $limit: Int!) {
		getHabitTimeRecords(_id: $_id, limit: $limit) {
			_id
			date
			total
			habitId
			today
		}
	}
`;

export const GET_MESSAGES = gql`
	query getMessages(
		$_id: ID!
		$offset: Int
		$limit: Int
		$descending: String
		$user: String
		$searchTerm: String
	) {
		getMessages(
			_id: $_id
			offset: $offset
			limit: $limit
			descending: $descending
			user: $user
			searchTerm: $searchTerm
		) {
			messages {
				_id
				body
				createdAt
				creator {
					_id
					username
					imageUrl
				}
			}
			pageInfo {
				startCursor
				endCursor
				hasNextPage
			}
		}
	}
`;

export const CREATE_USER = gql`
	mutation createUser(
		$username: String!
		$email: String!
		$password: String!
		$passwordConfirmation: String!
	) {
		createUser(
			username: $username
			email: $email
			password: $password
			passwordConfirmation: $passwordConfirmation
		) {
			token
		}
	}
`;
export const UPDATE_PROFILE = gql`
	mutation updateProfile(
		$username: String
		$email: String
		$oneWord: String
		$description: String
	) {
		updateProfile(
			username: $username
			email: $email
			oneWord: $oneWord
			description: $description
		) {
			_id
			username
			email
			oneWord
			description
		}
	}
`;

export const CREATE_COMMENT = gql`
	mutation createComment($body: String!, $habitId: ID!) {
		createComment(body: $body, habitId: $habitId) {
			_id
			body
			createdAt
		}
	}
`;

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`;
