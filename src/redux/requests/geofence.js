import axios from "../../axios/axios_instance.js";
const geofenceURL = "/api/test/geocercas";

const geofence = {
	GetGeofence: async (geocerca, unidades, fechas) => {
		try {
			const resp = await axios.get(geofenceURL, {
				params: { geocerca, unidades, fechas },
			});
			return resp;
		} catch (error) {
			return error.response;
		}
	},
	CreateGeofence: async (bodyData) => {
		try {
			const resp = await axios.post(geofenceURL, bodyData);
			return resp;
		} catch (error) {
			return error.response;
		}
	},
};

export default geofence;
