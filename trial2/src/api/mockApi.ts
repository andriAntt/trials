import { Invite, TeamMember } from "../types";

const mockedUsers: TeamMember[] = [
	{
		id: 1,
		status: "approved",
		user: {
			id: 101,
			name: "Joe",
			lastName: "Bloggs",
			phone: "+3531234567",
			email: "test1@gmail.com",
		},
		role: "Administrator",
	},
	{
		id: 2,
		status: "approved",
		user: {
			id: 102,
			name: "Sarah",
			lastName: "Connors",
			phone: "+3531234567",
			email: "test2@gmail.com",
		},
		role: "Administrator",
	},
	{
		id: 3,
		status: "approved",
		user: {
			id: 103,
			name: "Mathew",
			lastName: "Murphy",
			phone: "+3531234567",
			email: "test3@gmail.com",
		},
		role: "Administrator",
	},
	{
		id: 4,
		status: "approved",
		user: {
			id: 104,
			name: "Test4",
			lastName: "Test4",
			phone: "+3531234567",
			email: "test4@gmail.com",
		},
		role: "Standard",
	},
	{
		id: 6,
		status: "approved",
		user: {
			id: 106,
			name: "Sarah",
			lastName: "Connors",
			phone: "+3531234567",
			email: "test6@gmail.com",
		},
		role: "Standard",
	},
	{
		id: 7,
		status: "approved",
		user: {
			id: 107,
			name: "Mathew",
			lastName: "Murphy",
			phone: "+3531234567",
			email: "test7@gmail.com",
		},
		role: "Standard",
	},
];

const mockedInvites: Invite[] = [
	{
		id: 11,
		phone: "+1131234567",
		role: "Administrator",
	},
	{
		id: 22,
		phone: "+2231234567",
		role: "Standard",
	},
	{
		id: 33,
		phone: "+3331234567",
		role: "Standard",
	},
	{
		id: 44,
		phone: "+4431234567",
		role: "Standard",
	},
];

const Users = {
	getUsers: (): Promise<TeamMember[]> => {
		return Promise.resolve(mockedUsers);
	},
	getInvites: (): Promise<Invite[]> => {
		return Promise.resolve(mockedInvites);
	},
};

export default Users;
