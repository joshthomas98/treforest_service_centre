import { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  const iconStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <div className="text-center">
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Submit
            </Button>
          </div>
        </form>

        <div className="py-5">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper
                elevation={3}
                style={{
                  padding: "16px",
                  textAlign: "center",
                  height: "220px",
                }}
              >
                <div style={iconStyle}>
                  <Avatar className="mb-2" style={{ backgroundColor: "blue" }}>
                    <LocationOnIcon />
                  </Avatar>
                </div>
                <Typography>
                  Unit 27 Business Development Centre, Main Ave, Treforest
                  Industrial Estate, Pontypridd, CF37 5UR
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper
                elevation={3}
                style={{
                  padding: "16px",
                  textAlign: "center",
                  height: "220px",
                }}
              >
                <div style={iconStyle}>
                  <Avatar className="mb-2" style={{ backgroundColor: "green" }}>
                    <EmailIcon />
                  </Avatar>
                </div>
                <Typography variant="h6">Email</Typography>
                <Typography>hello@mui.dev</Typography>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper
                elevation={3}
                style={{
                  padding: "16px",
                  textAlign: "center",
                  height: "220px",
                }}
              >
                <div style={iconStyle}>
                  <Avatar
                    className="mb-2"
                    style={{ backgroundColor: "orange" }}
                  >
                    <PhoneIcon />
                  </Avatar>
                </div>
                <Typography variant="h6">Phone</Typography>
                <Typography>07720 253937</Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
}
