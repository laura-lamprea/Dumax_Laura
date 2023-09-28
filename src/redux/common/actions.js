import { SEARCH_TOGGLE, MOBILE_RIGHT_TOGGLE, RIGHT_SIDEBAR, SWITCH_TOGGLE, GET_GEOFENCE } from '../actionTypes'
import geofence from "../requests/geofence";

export const SearchBarToggle = (toggleVal) =>{  
  return(
    {
        type: SEARCH_TOGGLE,
        toggleVal
    }
  )
}

export const MobileRightToggle = (toggleVal) => {
  return(
    {
      type: MOBILE_RIGHT_TOGGLE,
      toggleVal
    }
  )
}

export const RightSidebarToggle = (toggleVal) => {
  return(
    {
      type: RIGHT_SIDEBAR,
      toggleVal
    }
  )
}

export const SwitchToggle = (toggleVal) => {
  return(
    {
      type: SWITCH_TOGGLE,
      toggleVal
    }
  )
}

export const getGeofence = (geocerca, unidades, fechas ) => {
  return async (dispatch) => {
    const { data, status } = await geofence.GetGeofence(geocerca, unidades, fechas );
    if (status === 200) {
      dispatch(GETGEOFENCE(data));
      return { status: true, data: data };
    }
    return { status: false };
  };
};

const GETGEOFENCE = (data) => ({
  type: GET_GEOFENCE,
  payload: data,
});

export const createGeofence = (bodyData) => {
  return async () => {
    const { data, status } = await geofence.CreateGeofence(bodyData);
    if (status === 200) {
      return { status: true, data };
    }
    return { status: false };
  };
};