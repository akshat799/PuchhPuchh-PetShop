import React from "react";
import "./dropdown.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function AppointmentDropdown() {
  return (
    <div className="dropdown-container">
      <div className="option-1">
        <button style={{ color: "aliceblue" }}>Appointments</button>
        <div className="list">
          <Button
            className="button"
            component={Link}
            to="/newAppointment"
            variant="contained"
            style={{
              display: "flex",
              fontSize: "1rem",
              backgroundColor : 'green',
              margin : '1rem',
              color : 'aliceblue'
            }}
          >
            Book a new Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDropdown;
