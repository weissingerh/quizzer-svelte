<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	let { data } = $props();
	let { form, errors, enhance } = superForm(data.loginForm);
</script>

<h1>V.E.L. (Very Exclusive Login)</h1>
<form method="post" action="?/login" use:enhance>
	<label for="name" class="label">Name</label>
	<input
		class:error={$errors.name}
		class="input"
		type="text"
		placeholder="Name"
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
		placeholder="Password"
		bind:value={$form.password}
	/>
	{#if $errors.password}
		<p class="errorMsg">{$errors.password}</p>
	{/if}
	<button class="btn bg-accentOneLightest text-background" type="submit">Login</button>
</form>
