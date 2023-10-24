import Vuex from 'vuex'

const createStore = () => {
	return Vuex.Store({
		state: {
			page: 'index'
		},
		mutations: {
			// updatePage(state, pageName) {
			// 	state.page = pageName
			// }
		}
	})
}