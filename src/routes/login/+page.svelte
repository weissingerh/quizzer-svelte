<script lang="ts">
	import Expandable from '$lib/components/Expandable.svelte';
	import { superForm } from 'sveltekit-superforms';

	let { data } = $props();
	let { form, errors, enhance } = superForm(data.loginForm);
</script>

<h1>V.E.L. (Very Exclusive Login)</h1>
<form method="POST" action="?/login" use:enhance>
	<label for="name" class="label">Name</label>
	<input
		class:error={$errors.name}
		class="input"
		type="text"
		placeholder="Name"
		name="name"
		bind:value={$form.name}
	/>
	{#if $errors.name}
		<p class="errorMsg">{$errors.name}</p>
	{/if}
	<label for="email" class="label">Email</label>
	<input
		class:error={$errors.email}
		class="input"
		type="text"
		placeholder="Email"
		name="email"
		bind:value={$form.email}
	/>
	{#if $errors.email}
		<p class="errorMsg">{$errors.email}</p>
	{/if}
	<label for="password" class="label">Password</label>
	<input
		class:error={$errors.password}
		class="input"
		type="password"
		name="password"
		placeholder="Password"
		bind:value={$form.password}
	/>
	{#if $errors.password}
		<p class="errorMsg">{$errors.password}</p>
	{/if}
	<button class="btn bg-accentTwoDarker text-background" type="submit">Login</button>
</form>

<Expandable title="Need an email hint?"
	>Hint: Email should be a valid email address. Could be something like .. hmm, maybe
	<span class="font-mono text-green-400">test@mail.com</span>.
</Expandable>
<Expandable title="Need password hint, too?">
	Hint: Password should be at least 5 characters long.. something like <span
		class="font-mono text-green-400">hello123</span
	> could work?
</Expandable>
