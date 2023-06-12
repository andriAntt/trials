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
		(async function fetch() {
			try {
				Promise.allSettled([Users.getInvites(), Users.getUsers()]).then(
					(data) => {
						const resolvedData = (
							data.filter((res) => "value" in res) as Array<
								PromiseFulfilledResult<Invite[]>
								| PromiseFulfilledResult<TeamMember[]>
							>
						)
							.map((res) => res.value)
							.reduce((a, b) => {
								return [...a, ...b];
							}, [] as (TeamMember | Invite)[]);
						const rejectedData = (
							data.filter(
								(res) => "reason" in res
							) as Array<PromiseRejectedResult>
						).map((res) => res.reason);

						setData((prevState) => [...prevState, ...resolvedData]);

						if (rejectedData.length) throw new Error(rejectedData.join(";"));
					}
				);
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
