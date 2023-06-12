import "./styles.css";
import { FC } from "react";
import SVG from "react-inlinesvg";

import { Invite, Role, TeamMember } from "../../types";
import { IconAdminUser, IconStandardUser } from "../../assets/icons";
import UserRow from "../UserRow";

interface UserListProps {
	title: Role;
	data: (TeamMember | Invite)[];
}

const UserList: FC<UserListProps> = ({ title, data }) => {
	return (
		<div className="userListContainer">
			<div className="userListHeader">
				<SVG
					src={title === "Administrator" ? IconAdminUser : IconStandardUser}
				/>
				<span className="userListTitle">
					{title === "Administrator" ? "Administrators" : "Standard Users"}
				</span>
			</div>
			<ul className="userList">
				{data.length ? data.map((el) => (
					<UserRow key={el.id} userData={el} />
				))
				: <span className="userListEmpty">Still Empty.</span>}
			</ul>
		</div>
	);
};

export default UserList;
