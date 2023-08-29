import type { PageServerLoad } from './$types';
import { createClient } from 'edgedb';
import e from '../../dbschema/edgeql-js';

export const load: PageServerLoad = async ({ params }) => {
	const client = await createClient();

	const query = e.select(e.User, (user) => ({
		...e.User['*'],
		userGroup: { ...e.UserGroup['*'] },
		isAdmin: e.contains(user.name, 'admin')
	}));

	console.log(query.toEdgeQL());

	const users = await query.run(client);

	console.log(users);

	return {
		users: users
	};
};
