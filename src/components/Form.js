import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { DateFormatInput } from "material-ui-next-pickers";
import Button from "@material-ui/core/Button";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		margin: "10px",
		alignItems: "center",
		justifyContent: "center"
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 150
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2
	},
	dateSelect: {
		marginTop: "16px"
	},
	rightIcon: {
		marginLeft: theme.spacing.unit
	},
	button: {
		marginTop: "16px"
	}
});

class Form extends React.Component {
	state = {
		from: "",
		destination: "",
		date: "",
		name: "hai"
	};

	async componentDidMount() {
		const rawResponse = await fetch(
			"https://dev-sandbox-api.airhob.com/sandboxapi/flights/v1.3/search",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					apikey: "ce92cc91-5d43-4",
					mode: "sandbox"
				},
				body: JSON.stringify({
					TripType: "O",
					NoOfAdults: 1,
					NoOfChilds: 0,
					NoOfInfants: 0,
					ClassType: "Economy",
					OriginDestination: [
						{ Origin: "SFO", Destination: "LAX", TravelDate: "04/23/2018" }
					],
					Currency: "USD"
				})
			}
		);
		const content = await rawResponse.json();

		console.log(content);
	}

	onChangeDate = date => {
		console.log("Date: ", date);
		this.setState({ date });
	};

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	render() {
		const { classes } = this.props;
		const { date } = this.state;

		return (
			<div className={classes.root}>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="age-native-simple">From</InputLabel>
					<Select
						native
						value={this.state.from}
						onChange={this.handleChange("from")}
						inputProps={{
							from: "from",
							id: "age-native-simple"
						}}
					>
						<option value="" />
						<option value={"STO"}>San Francisco</option>
						<option value={"HOU"}>Houston</option>
						<option value={"LVI"}>Las Vegas</option>
					</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="age-native-simple">Destination</InputLabel>
					<Select
						native
						value={this.state.destination}
						onChange={this.handleChange("destination")}
						inputProps={{
							destionation: "destionation",
							id: "age-native-simple"
						}}
					>
						<option value="" />
						<option value={"STO"}>San Francisco</option>
						<option value={"HOU"}>Houston</option>
						<option value={"LVI"}>Las Vegas</option>
					</Select>
				</FormControl>

				{/* Date Component: https://github.com/chingyawhao/material-ui-next-pickers */}
				<FormControl className={classes.formControl}>
					<DateFormatInput
						name="date-input"
						value={date}
						onChange={this.onChangeDate}
						className={classes.dateSelect}
					/>
				</FormControl>
				<FormControl>
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
					>
						Send
						<FlightTakeoff className={classes.rightIcon}>send</FlightTakeoff>
					</Button>
				</FormControl>
			</div>
		);
	}
}

Form.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
