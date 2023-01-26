import "./styles.css";
import { FC } from "react";
import SVG from "react-inlinesvg";

import { Invite, Role, TeamMember } from "../../types";
import { IconAdminUser, IconStandardUser } from "../../assets/icons";
import UserRow from "./components/UserRow";

interface UserListProps {
	title: Role;
	data: (TeamMember | Invite)[];
}

const UserList: FC<UserListProps> = ({ title, data }) => {
	return (
		<div className="userListContainer">
			<div className="userListTitleContainer">
				<SVG
					src={title === "Administrator" ? IconAdminUser : IconStandardUser}
				/>
				<span className="userListTitle">
					{title === "Administrator" ? "Administrators" : "Standard Users"}
				</span>
			</div>
			<ul className="userListList">
				{!data.length && <span className="userListEmpty">Still Empty.</span>}
				{data.map((el) => (
					<UserRow key={el.id} userData={el} />
				))}
			</ul>
		</div>
	);
};

export default UserList;
