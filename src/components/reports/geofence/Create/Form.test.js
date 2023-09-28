import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Formulario from "./CreateForm";

test("renders the form component", () => {
	render(<Formulario />);
	const formElement = screen.getByTestId("my-form");
	expect(formElement).toBeInTheDocument();
});

test("renders form fields", () => {
	render(<Formulario />);
	const nameInput = screen.getByLabelText("Geofence*");
	const unitsInput = screen.getByLabelText("Units*");
	const unitNameInput = screen.getByLabelText("Unit name");
	const driverLicenseInput = screen.getByLabelText("Driver license");
	const emailInput = screen.getByLabelText("Email");
	expect(nameInput).toBeInTheDocument();
	expect(unitsInput).toBeInTheDocument();
	expect(unitNameInput).toBeInTheDocument();
	expect(driverLicenseInput).toBeInTheDocument();
	expect(emailInput).toBeInTheDocument();
});

test("allows user to enter data", () => {
	render(<Formulario />);
	const nameInput = screen.getByLabelText("Geofence*");
	const unitsInput = screen.getByLabelText("Units*");
	const unitNameInput = screen.getByLabelText("Unit name");
	const driverLicenseInput = screen.getByLabelText("Driver license");
	const emailInput = screen.getByLabelText("Email");
	fireEvent.change(nameInput, { target: { value: "Monterrey" } });
	fireEvent.change(unitsInput, { target: { value: "Base 1525" } });
	fireEvent.change(unitNameInput, { target: { value: "Unidad 1" } });
	fireEvent.change(driverLicenseInput, { target: { value: "1234567890" } });
	fireEvent.change(emailInput, { target: { value: "chofer@dumax.com" } });
	expect(geofenceInput.value).toBe("Monterrey");
	expect(unidadesInput.value).toBe("Base 1525");
	expect(nombreUnidadInput.value).toBe("Unidad 1");
	expect(licenciaChoferInput.value).toBe("1234567890");
	expect(emailInput.value).toBe("chofer@dumax.com");
});

test("submits the form", async () => {
	render(<Formulario />);
	const geofenceInput = screen.getByLabelText("Geofence*");
	const unidadesInput = screen.getByLabelText("Units*");
	const nombreUnidadInput = screen.getByLabelText("Unit name");
	const licenciaChoferInput = screen.getByLabelText("Driver license");
	const emailInput = screen.getByLabelText("Email");
	const submitButton = screen.getByText("Submit"); // El botón debe tener el texto "Submit"
	fireEvent.change(geofenceInput, { target: { value: "Monterrey" } });
	fireEvent.change(unidadesInput, { target: { value: "Base 1525" } });
	fireEvent.change(nombreUnidadInput, { target: { value: "Unidad 1" } });
	fireEvent.change(licenciaChoferInput, { target: { value: "1234567890" } });
	fireEvent.change(emailInput, { target: { value: "chofer@dumax.com" } });
	fireEvent.click(submitButton);
	const successAlert = await screen.findByText(
		"Geofence created successfully!"
	);
	expect(successAlert).toBeInTheDocument();
});
