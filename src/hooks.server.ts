export function handle({ event, resolve }) {
	let name = event.cookies.get('name');
	event.locals.name = name;
	return resolve(event);
}
