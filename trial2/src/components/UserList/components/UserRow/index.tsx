import "./styles.css";
import { FC } from "react";
import SVG from "react-inlinesvg";

import { Invite, TeamMember } from "../../../../types";
import { IconChevron } from "../../../../assets/icons";

interface UserRowProps {
	userData: TeamMember | Invite;
}

const UserRow: FC<UserRowProps> = ({ userData }) => {
	const isInvited = !("user" in userData);

	const generalInfo = !isInvited
		? `${userData.user.name} ${userData.user.lastName}`
		: userData.phone;

	return (
		<li className="userRowContainer">
			<span className={isInvited ? "userRowInviteInfo" : "userRowUserInfo"}>
				{generalInfo}
			</span>
			<div className="userRowControlContainer">
				{isInvited && (
					<div>
						<span>Invited</span>
					</div>
				)}
				<SVG src={IconChevron} />
			</div>
		</li>
	);
};

export default UserRow;
