import {
	SEARCH_TOGGLE,
	MOBILE_RIGHT_TOGGLE,
	RIGHT_SIDEBAR,
	SWITCH_TOGGLE,
	GET_GEOFENCE,
} from "../actionTypes";

const Initial_state = {
	searchToggle: false,
	mobileRightToggle: false,
	rightSidebarToggle: false,
	switchToggle: false,
	geofence: [],
};

const Common = (state = Initial_state, action) => {
	switch (action.type) {
		case SEARCH_TOGGLE:
			state.searchToggle = !state.searchToggle;
			return state;
		case MOBILE_RIGHT_TOGGLE:
			state.mobileRightToggle = !state.mobileRightToggle;
			return state;
		case RIGHT_SIDEBAR:
			state.rightSidebarToggle = !state.rightSidebarToggle;
			return state;
		case SWITCH_TOGGLE:
			state.switchToggle = !state.switchToggle;
			return state;
		case GET_GEOFENCE:
			const allgeofence = action.payload;
			const orderAsc = allgeofence.sort((a, b) =>
				a.timeStamps.entrada > b.timeStamps.entrada
					? 1
					: a.timeStamps.entrada < b.timeStamps.entrada
					? -1
					: 0
			);
			return { ...state.geofence, geofence: orderAsc };
		default:
			return state;
	}
};

export default Common;
