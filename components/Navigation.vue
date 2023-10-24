<template>
	<div class="navigation">
		<NuxtLink to="/">
			Home Page
		</NuxtLink>
		<NuxtLink to="/about">
			About pag
		</NuxtLink>

	</div>
	 

</template>


<style>
	.navigation {
		font-size: 20px;
	}
	.navigation a {
		padding: 10px;
		color: #fff;
		text-decoration: none;
		border: 1px solid #000;
		text-transform: uppercase;
	}
	.nuxt-link-exact-active {
		border-color: #fff;
	}
</style>