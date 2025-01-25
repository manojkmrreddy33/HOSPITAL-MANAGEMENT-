import React from "react";

// Define the table component
const DoctorTable = ({ doctorData }) => {
  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th} scope="col">Doctor Name</th>
            <th style={styles.th} scope="col">Date</th>
            <th style={styles.th} scope="col">Department</th>
            <th style={styles.th} scope="col">Phone No</th>
            <th style={styles.th} scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {doctorData.length > 0 ? (
            doctorData.map((doctor, index) => (
              <tr
                key={index}
                style={index % 2 === 0 ? styles.trEven : {}}
              >
                <td style={styles.thTd}>
                  {doctor?.doctor?.fullName || "N/A"}
                </td>
                <td style={styles.thTd}>{doctor?.appointment_date || "N/A"}</td>
                <td style={styles.thTd}>{doctor?.department || "N/A"}</td>
                <td style={styles.thTd}>{doctor?.phone || "N/A"}</td>
                <td style={styles.thTd}>
                  <span style={getStatusStyle(doctor?.status)}>
                    {doctor?.status || "Unknown"}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={styles.noDataText}>
                No appointments available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Function to return style based on the status
const getStatusStyle = (status) => {
  const statusStyles = {
    Pending: {
      backgroundColor: "#ffeb3b",
      color: "#000",
    },
    Completed: {
      backgroundColor: "#4caf50",
      color: "white",
    },
    Canceled: {
      backgroundColor: "#f44336",
      color: "white",
    },
  };

  return {
    ...statusStyles[status],
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
  };
};

// CSS styles for the table component
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    maxWidth: "900px",
    borderCollapse: "collapse",
    margin: "20px 0",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  thTd: {
    padding: "12px",
    textAlign: "center",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  th: {
    backgroundColor: "#6a57d1",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  },
  trEven: {
    backgroundColor: "#f2f2f2",
  },
  noDataText: {
    textAlign: "center",
    padding: "20px",
    fontStyle: "italic",
    color: "gray",
    fontSize: "16px",
  },
};

export default DoctorTable;
