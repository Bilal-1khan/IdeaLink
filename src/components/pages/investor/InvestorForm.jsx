import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const InvestorForm = () => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      pitch: formData.get("pitch"),
    };
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Connect with investor
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="pitch"
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default InvestorForm;
