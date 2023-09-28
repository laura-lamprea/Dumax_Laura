import React, { Fragment } from "react";
import BreadCrumb from "../../../layout/Breadcrumb";
import GeofenceFilters from "./Filters/filter";
import TableBasic from "./Table/tableBasic";
import CreateForm from "./Create/CreateForm";
import { Row, Col, Card, Container } from "reactstrap";

const GeofencePage = () => {
	return (
		<Fragment>
			<BreadCrumb parent="Home" subparent="Reports" title="Geofence report" />
			<GeofenceFilters />
			<Container fluid={true}>
				<Row>
					<Col sm="5">
						<Card body>
							<CreateForm />
						</Card>
					</Col>
					<Col sm="7">
						<Card body>
							<TableBasic />
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default GeofencePage;
