import axios from "axios";
const mainBackend = axios.create({
	baseURL:
		process.env.REACT_APP_BASE_URL ||
		"https://us-central1-dumax-eld.cloudfunctions.net/userApp",
});

export default mainBackend;
