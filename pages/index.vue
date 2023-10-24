<template>
	<div class="layout">
		<Animation />
		<div class="layout__content">
			<Tutorial/>
		</div>
		<div class="layout__navigation">
			<Navigation />
		</div>

	</div>
  
</template>

<style>

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	body {
		background-color: #000;
		position: relative;
		color: #fff;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
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
	.slide-enter-active {
		transition: all .3s ease-in-out ;
	}
	
	.slide-leave-active {
		transition: all .3s ease-in-out ;
	}
	.slide-enter {
		transform: translateY(-100%);
	}
	.slide-enter-to {
		transform: translateY((0%));
	}
	.slide-leave {
		transform:  translateY(0);
	}
	.slide-leave-to {
		transform: translateY(100%);
	}
</style>

<script>
import Animation from '../components/Animation.vue';
import Navigation from '../components/Navigation.vue';

export default {
	transition() {
		return 'slide'
	},
	
    name: "IndexPage",
    components: { Navigation, Animation }
}
</script>
