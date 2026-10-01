export type User = {
	id: number;
	name: string;
	profile: {
		address: {
			city: string;
			street: string;
			zipCode: string;
		},
		email: string;
		name: string;
	},
	roles: [];
	settings: {
		notifications: {
			email: boolean;
			push: boolean;
		},
		theme: string;
	},
	username: string;
}