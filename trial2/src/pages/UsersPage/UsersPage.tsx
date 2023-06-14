import "./styles.css";
import { FC, useEffect, useState } from "react";

import Loader from "../../components/Loader";
import UserList from "../../components/UserList";
import Users from "../../api/mockApi";

import { Invite, TeamMember } from "../../types";

const UsersPage: FC = () => {
	const [data, setData] = useState<[] | Array<TeamMember | Invite>>([]);
	const [loading, setLoading] = useState(true);

	const admins = data.filter((el) => el.role === "Administrator");
	const standardUsers = data.filter((el) => el.role === "Standard");
		
	useEffect(() => {
		(async function fetch(): Promise<void> {
			const arr: Array<TeamMember | Invite> = [];
			try {
				const results = await Promise.allSettled([Users.getInvites(), Users.getUsers()]);
				for (const result of results) {
					if (result.status === 'fulfilled') {
						arr.push(...result.value)
					} else {
						throw new Error(result.reason.join(";"))
					}
				  }
				  setData(arr)
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	if (loading) return <Loader />;

	return (
		<div className="usersPageContainer">
			<UserList title={"Administrator"} data={admins} />
			<UserList title={"Standard"} data={standardUsers} />
		</div>
	);
};

export default UsersPage;
