import React from "react";
import { Container, Typography, Button, Paper, Grid } from "@mui/material";

const Homepage = () => {
  return (
    <Container maxWidth="lg">
      <section>
        {/* <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}> */}
        <Typography className="text-center pt-4" variant="h4" gutterBottom>
          Welcome to Treforest Service Centre
        </Typography>

        <Typography className="text-center pb-5" variant="body1">
          Welcome to Treforest Service Centre, your trusted local car garage for
          all your automotive needs. Located in the heart of Treforest, we've
          been serving the community for many years with a commitment to
          top-quality automotive services and repairs. Our MOT Testing Station,
          conveniently situated at Unit 27 Business Development Centre on Main
          Avenue in Treforest Industrial Estate, Pontypridd, CF37 5UR, ensures
          your vehicle's safety and compliance with the highest standards.
        </Typography>

        <div className="container d-flex flex-row justify-content-between align-items-center">
          <div className="text-container d-flex col-md-6 px-5">
            <Typography className="pt-3">
              We offer a range of services, including brake pad/disc
              replacement, general mechanical work, car MOT (Class 4), van MOT
              (Class 7), and passenger vehicle MOT (Class 5). Our team of
              experienced mechanics is dedicated to keeping your vehicles
              running smoothly and ensuring your safety on the road.
              <br />
              <br />
              Whether you need a full service, partial service, or specific
              repairs, we've got you covered. Contact us today to schedule an
              appointment or an MOT test to keep your vehicle in excellent
              condition.
              <br />
              <br />
              Our team of experienced mechanics are dedicated to keeping your
              vehicles running smoothly. From routine maintenance to complex
              repairs, we've got you covered. Your safety and satisfaction are
              our top priorities.
            </Typography>
          </div>
          <div className="image-container">
            <img
              className="img-fluid w-75"
              src="../../images/tsc1.jpeg"
              alt="LOGO"
            />
          </div>
        </div>
        {/* </Paper> */}
      </section>

      <section>
        <Typography className="text-center pt-5" variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center", height: "250px" }}
            >
              <Typography variant="h6">Brake Pad / Disc Replacement</Typography>
              <Typography>
                Replace brake pads / rotors / discs and or adjust brakes.
              </Typography>
              <Typography>Price varies</Typography>
              <Typography>1 hr</Typography>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center", height: "250px" }}
            >
              <Typography variant="h6">General Mechanical Work</Typography>
              <Typography>General Mechanical Work</Typography>
              <Typography>Price varies</Typography>
              <Typography>1 hr</Typography>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center", height: "250px" }}
            >
              <Typography variant="h6">Car MOT (Class 4)</Typography>
              <Typography>Class 4 MOTs (for cars and light vans)</Typography>
              <Typography>£40.00</Typography>
              <Typography>35 mins</Typography>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center", height: "250px" }}
            >
              <Typography variant="h6">Van MOT (Class 7)</Typography>
              <Typography>
                Class 7 MOTs (for 3 to 3.5 tonne design gross weight commercial
                vans)
              </Typography>
              <Typography>£50.00</Typography>
              <Typography>35 mins</Typography>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center", height: "250px" }}
            >
              <Typography variant="h6">
                Passenger Vehicle MOT (13+ seats) (Class 5)
              </Typography>
              <Typography>
                Class 5 MOTs (Private passenger vehicles, ambulances and motor
                caravans with 13 or more passenger seats)
              </Typography>
              <Typography>£65.00</Typography>
              <Typography>35 mins</Typography>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center", height: "250px" }}
            >
              <Typography variant="h6">Full Service</Typography>
              <Typography>
                Full Service: Oil and Oil filter replacement, Air filter and
                fuel filter replacement. Fluid checks and top ups if required.
                Mechanical inspection of visible components, i.e. braking,
                tyres, steering exhaust etc.
              </Typography>
              <Typography>Price varies</Typography>
              <Typography>2 hrs</Typography>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center", height: "250px" }}
            >
              <Typography variant="h6">
                Partial (intermediate) Service
              </Typography>
              <Typography>
                Partial Service : Oil and Oil filter replacement.
              </Typography>
              <Typography>Price varies</Typography>
              <Typography>1 hr</Typography>
            </Paper>
          </Grid>
        </Grid>

        <div className="text-center pt-4">
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Schedule an Appointment
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default Homepage;
