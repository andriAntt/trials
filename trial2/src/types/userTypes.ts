export type Role = "Administrator" | "Standard";
type Status = "request" | "pending" | "approved" | "declined" | "invited";

export interface UserShortData {
	id: number;
	name: string;
	lastName: string;
	phone: string;
	email: string;
}

export interface TeamMember {
	id: number;
	status: Status;
	user: UserShortData;
	role: Role;
}

export interface Invite {
	id: number;
	phone: string;
	role: Role;
}
