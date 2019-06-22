import React, { useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, Icon, Button } from "semantic-ui-react";
// import Signout from "../Auth/Signout";
import "./SideDrawer.css";
// import { UserContext } from "./../../index";

const SideDrawer = ({ onSide, onHide }) => {
	// const currentUser = useContext(UserContext);
	return (
		<Sidebar
			as={Menu}
			animation="overlay"
			visible={onSide}
			icon="labeled"
			onHide={() => onHide(false)}
			vertical
			direction="top"
			inverted>
			<Menu.Item as={NavLink} to="/habits" onClick={() => onHide(false)}>
				<Icon name="home" />
				Habits
			</Menu.Item>
			{/* {currentUser ? (
				<Fragment>
					<Menu.Item as={NavLink} to="/myhabits" onClick={() => onHide(false)}>
						<Icon name="tasks" />
						MyHabits
					</Menu.Item>
					<Menu.Item as={NavLink} to="/favorites" onClick={() => onHide(false)}>
						<Icon name="star" />
						MyFavorites
					</Menu.Item>

					<Menu.Item as={NavLink} to="/newhabit" onClick={() => onHide(false)}>
						<Icon name="pencil alternate" />
						NewHabit
					</Menu.Item>
					<Menu.Item as={NavLink} to="/profile" onClick={() => onHide(false)}>
						<Icon name="user" />
						Profile
					</Menu.Item>
					<Menu.Item>
						<Signout color="black" inverted={true} hide={onHide} />
					</Menu.Item>
				</Fragment>
			) : (
				<Menu.Item>
					<Menu.Item>
						<Button
							as={NavLink}
							to="/signin"
							inverted
							onClick={() => onHide(false)}>
							Signin
						</Button>
					</Menu.Item>
					<Menu.Item>
						<Button
							as={NavLink}
							to="/signup"
							inverted
							onClick={() => onHide(false)}>
							Signup
						</Button>
					</Menu.Item>
				</Menu.Item>
			)} */}
		</Sidebar>
	);
};

export default SideDrawer;
