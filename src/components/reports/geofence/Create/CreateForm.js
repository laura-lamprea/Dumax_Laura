import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGeofence } from "../../../../redux/common/actions";
import {
	Button,
	Label,
	Input,
	Form,
	FormGroup,
	Alert,
	FormFeedback,
} from "reactstrap";
import SelectDropDown from "../Filters/dropDown";

const CreateForm = () => {
	const dispatch = useDispatch();
	const initForm = {
		geocerca: "",
		unidades: "",
		nombreUnidad: "",
		licenciaChofer: "",
		emailChofer: "",
	};
	const [alert, setAlert] = useState(null);
	const [formData, setFormData] = useState(initForm);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validate = isValidated();
		if (validate) {
			dispatch(createGeofence(formData))
				.then(() => {
					setAlert({
						type: "success",
						message: "Geofence created successfully!",
					});
					setFormData(initForm);
					setTimeout(() => {
						setAlert(null);
					}, 2000);
				})
				.catch(() => {
					setAlert({ type: "danger", message: "Error creating geofence." });
				});
		}
	};
	const isValidated = () => {
		const errors = {};
		if (formData.geocerca === "") errors.geocerca = "Geofence cannot be empty";
		if (formData.unidades === "") errors.unidades = "Unit cannot be empty";
		if (
			formData.nombreUnidad !== "" &&
			(formData.nombreUnidad.length < 3 || formData.nombreUnidad.length > 15)
		)
			errors.nombreUnidad =
				"Unit name must be between 3 and 15 characters long.";

		if (formData.licenciaChofer !== "" && formData.licenciaChofer.length !== 10)
			errors.licenciaChofer = "Driver's License must have 10 characters";

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (formData.emailChofer !== "" && !emailRegex.test(formData.emailChofer)) {
			errors.emailChofer = "Driver's email is invalid";
		}
		for (const error in errors) {
			if (errors.hasOwnProperty(error)) {
				setAlert({
					type: "danger",
					message: errors[error],
				});
				return false;
			}
		}
		return true;
	};

	return (
		<Form onSubmit={handleSubmit} data-testid="my-form">
			<FormGroup>
				<Label for="geocerca">Geofence*</Label>
				<SelectDropDown name="geocerca" type="geo" onChange={handleChange} />
			</FormGroup>
			<FormGroup>
				<Label for="unidades">Units*</Label>
				<SelectDropDown name="unidades" type="unit" onChange={handleChange} />
			</FormGroup>
			<FormGroup>
				<Label for="nombreUnidad">Unit name</Label>
				<Input
					id="nombreUnidad"
					name="nombreUnidad"
					placeholder="Example: Unit 1"
					type="text"
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="licenciaChofer">Driver license</Label>
				<Input
					id="licenciaChofer"
					name="licenciaChofer"
					placeholder="123456789"
					type="number"
					onChange={handleChange}
				/>
				<FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label for="emailChofer">Email</Label>
				<Input
					id="emailChofer"
					name="emailChofer"
					placeholder="Example@gmail.com"
					type="email"
					onChange={handleChange}
				/>
			</FormGroup>
			<Button type="submit">Submit</Button>
			{alert && (
				<Alert color={alert.type} style={styleAlert}>
					{alert.message}
				</Alert>
			)}
		</Form>
	);
};

export default CreateForm;

const styleAlert = { marginTop: "10px" };
