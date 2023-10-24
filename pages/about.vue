<template>
	<section>
		<Animation />
		<div class="layout__content">

			about
			</div>

		<div class="layout__navigation">
			<Navigation />
		</div>
	</section>
 
 

</template>

<style>
	.layout__navigation {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	.layout__content {
 
		font-size: 40px;
		color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
 
</style>

<script>
import Animation from '../components/Animation.vue';

 

export default {
    name: "AboutPage",
    components: { Animation }
}
</script>
