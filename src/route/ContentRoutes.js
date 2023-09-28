import React from "react";
import Defaultpage from "../components/dashboard/default";
import Samplepage from "../components/starterkits/samplepage";
import GeofencePage from "../components/reports/geofence//geofenceContainer";

export const routes = [
	{ path: "/dashbaord/default", Component: (props) => <Defaultpage title="Default" subparent="Dashboard" {...props} />},
	{ path: "/starter-kit/sample-page", Component: Samplepage },
	{ path: "/reports/geofence", Component: GeofencePage },
	{ path: "/reports/telemetry", Component:  (props) => <Defaultpage subparent="Reports" title="Telemetry report"{...props} />  },
	{ path: "/reports/speed", Component:  (props) => <Defaultpage subparent="Reports" title="Speed report" {...props} />  },
	{ path: "/reports/temperature", Component:  (props) => <Defaultpage subparent="Reports" title="Temperature report" {...props} />  },
	{ path: "/reports/driving", Component:  (props) => <Defaultpage subparent="Reports" title="Driving report"  {...props} /> },
	{ path: "/reports/mileage", Component:  (props) => <Defaultpage subparent="Reports" title="Mileage report"  {...props} /> },
	{ path: "/reports/fuel", Component:  (props) => <Defaultpage subparent="Reports" title="Fuel report"  {...props} /> },
	{ path: "/reports/reverse", Component:  (props) => <Defaultpage subparent="Reports" title="Reverse report"  {...props} /> },
	{ path: "/reports/towing", Component:  (props) => <Defaultpage subparent="Reports" title="Towing report"  {...props} /> },
	{ path: "/reports/Trip", Component:  (props) => <Defaultpage subparent="Reports" title="Trip report"  {...props} /> },
];
