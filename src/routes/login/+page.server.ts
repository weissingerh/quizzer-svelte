import { setError, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerData, PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/schema';
import { error, fail } from '@sveltejs/kit';

export async function load(event: any): PageServerData {
	const form = await superValidate(zod(loginSchema));
	return { loginForm: form };
}

export const actions: Actions = {
	login: async (event) => {
		let form = await superValidate(event.request, zod(loginSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		if (form.data.email != 'test@mail.com') {
			setError(form, 'email', 'Invalid email.');
		}
		if (form.data.password !== 'hello123') {
			setError(form, 'password', 'Invalid password.');
		}

		event.cookies.set('name', form.data.name, { path: '/', httpOnly: true });
		event.locals.name = form.data.name;

		return { form };
	}
};
