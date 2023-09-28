import { Home, Headphones, Anchor, Clipboard } from "react-feather";

export const MENUITEMS = [
	{
		title: "Dashboard",
		icon: Home,
		type: "sub",
		active: false,
		children: [
			{
				path: `${process.env.PUBLIC_URL}/dashbaord/default`,
				title: "Default",
				type: "link",
			},
		],
	},
	{
		title: "Starter kit",
		icon: Anchor,
		type: "sub",
		active: false,
		children: [
			{
				path: `${process.env.PUBLIC_URL}/starter-kit/sample-page`,
				title: "Sample Page",
				type: "link",
			},
		],
	},
	{
		title: "Support",
		icon: Headphones,
		type: "sub",
		active: false,
		children: [
			{
				path: "http://support.pixelstrap.com/help-center",
				title: "Raise Ticket",
				type: "exteral_link",
			},
		],
	},
	{
		title: "Reports",
		icon: Clipboard,
		type: "sub",
		active: false,
		children: [
			{
				path: `${process.env.PUBLIC_URL}/reports/telemetry`,
				title: "Telemetry report",
				type: "link",
				icon: Clipboard,
			},
			{
				path: `${process.env.PUBLIC_URL}/reports/speed`,
				title: "Speed report",
				type: "link",
				icon: Clipboard,
			},
			{
				path: `${process.env.PUBLIC_URL}/reports/geofence`,
				title: "Geofence report",
				type: "link",
				icon: Clipboard,
			},
			{
				path: `${process.env.PUBLIC_URL}/reports/temperature`,
				title: "Temperature report",
				type: "link",
				icon: Clipboard,
			},
			{
				path: `${process.env.PUBLIC_URL}/reports/driving`,
				title: "Driving report",
				type: "link",
				icon: Clipboard,
			},
			{
				path: `${process.env.PUBLIC_URL}/reports/mileage`,
				title: "Mileage report",
				type: "link",
				icon: Clipboard,
			},
			{
				path: `${process.env.PUBLIC_URL}/reports/fuel`,
				title: "Fuel report",
				type: "link",
				icon: Clipboard,
			},
			{
				path: `${process.env.PUBLIC_URL}/reports/towing`,
				title: "Reverse report",
				type: "link",
				icon: Clipboard,
			},
			{
				path: `${process.env.PUBLIC_URL}/reports/trip`,
				title: "Towing report",
				type: "link",
				icon: Clipboard,
			},
			{
				path: `${process.env.PUBLIC_URL}/reports/trip`,
				title: "Trip report",
				type: "link",
				icon: Clipboard,
			},
		],
	},
];
