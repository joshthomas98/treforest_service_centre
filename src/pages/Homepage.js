import React from "react";
import { Typography, Button, Paper, Grid } from "@mui/material";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  return (
    <div>
      <section>
        <div style={{ position: "relative", textAlign: "center" }}>
          <img
            className="pt-3"
            style={{ width: "100%" }}
            src="../../images/van1.jpg"
            alt="banner"
          />
          <Typography
            style={{
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "black",
            }}
            variant="h1"
            gutterBottom
          >
            Treforest Service Centre
          </Typography>
        </div>
      </section>

      <section className="container text-center pb-5">
        <div className="col-md-9 mx-auto pt-5 lead">
          Welcome to Treforest Service Centre, your local one-stop-shop for all
          your van-related automotive needs. Located in the heart of Treforest,
          we've been serving the community for many years with a commitment to
          top-quality van services and repairs. Our MOT Testing Station,
          conveniently situated at Unit 27 Business Development Centre on Main
          Avenue in Treforest Industrial Estate, Pontypridd, CF37 5UR, ensures
          your van's safety and compliance with the highest standards.
        </div>
      </section>

      <section
        className="text-center pb-4"
        style={{ backgroundColor: "#f0f0f0", width: "100%" }}
      >
        <Typography className="text-center pb-4 pt-4" variant="h4">
          Who We Are
        </Typography>

        <div className="container d-flex flex-row justify-content-between align-items-center">
          <div className="text-container d-flex col-md-6 px-5">
            <p className="pt-3 lead">
              We specialise in a range of van services, including brake pad/disc
              replacement, general mechanical work, and van MOT (Class 7). Our
              team of experienced mechanics is dedicated to keeping your vans
              running smoothly and ensuring your safety on the road.
              <br />
              <br />
              Whether you need a full van service, partial service, or specific
              van repairs, we've got you covered. Contact us today to schedule
              an appointment or a van MOT test to keep your vehicle in excellent
              condition.
              <br />
              <br />
              Our team of experienced mechanics is devoted to keeping your vans
              running smoothly. From routine maintenance to complex van repairs,
              we prioritise your safety and satisfaction.
            </p>
          </div>
          <div className="image-container">
            <img
              className="img-fluid w-75"
              src="../../images/tsc1.jpeg"
              alt="LOGO"
            />
          </div>
        </div>
      </section>

      <section className="container">
        <Typography className="text-center pt-5 pb-2" variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={2}>
          {/* First 3 grid items */}
          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                textAlign: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">Brake Pad / Disc Replacement</Typography>
              <Typography>
                Replace brake pads / rotors / discs and or adjust brakes.
              </Typography>
              <Typography>Price varies</Typography>
              <Typography>1 hr</Typography>
              <Button variant="contained" color="primary" className="mt-3">
                Find Out More
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                textAlign: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">General Mechanical Work</Typography>
              <Typography>General Mechanical Work</Typography>
              <Typography>Price varies</Typography>
              <Typography>1 hr</Typography>
              <Button variant="contained" color="primary" className="mt-3">
                Find Out More
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                textAlign: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">Car MOT (Class 4)</Typography>
              <Typography>Class 4 MOTs (for cars and light vans)</Typography>
              <Typography>£40.00</Typography>
              <Typography>35 mins</Typography>
              <Button variant="contained" color="primary" className="mt-3">
                Find Out More
              </Button>
            </Paper>
          </Grid>

          {/* Second 3 grid items */}
          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                textAlign: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">Van MOT (Class 7)</Typography>
              <Typography>
                Class 7 MOTs (for 3 to 3.5 tonne design gross weight commercial
                vans)
              </Typography>
              <Typography>£50.00</Typography>
              <Typography>35 mins</Typography>
              <Button variant="contained" color="primary" className="mt-3">
                Find Out More
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                textAlign: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
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
              <Button variant="contained" color="primary" className="mt-3">
                Find Out More
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                textAlign: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">Full Service</Typography>
              <Typography>
                Full Service: Oil and Oil filter replacement, Air filter and
                fuel filter replacement. Fluid checks and top ups if required.
                Mechanical inspection of visible components, i.e. braking,
                tyres, steering exhaust etc.
              </Typography>
              <Typography>Price varies</Typography>
              <Typography>2 hr</Typography>
              <Button variant="contained" color="primary" className="mt-3">
                Find Out More
              </Button>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            className="d-flex justify-content-center align-items-center mt-3"
          >
            <Paper
              elevation={3}
              style={{
                padding: "16px",
                textAlign: "center",
                height: "300px",
                width: "420px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Typography variant="h6">
                Partial (intermediate) Service
              </Typography>
              <Typography>
                Partial Service : Oil and Oil filter replacement.
              </Typography>
              <Typography>Price varies</Typography>
              <Typography>1 hr</Typography>
              <Button variant="contained" color="primary" className="mt-3">
                Find Out More
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <div className="text-center pt-4 pb-5">
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "5px" }}
          >
            Schedule an Appointment
          </Button>
        </div>
      </section>

      <section
        className="pt-4"
        style={{ backgroundColor: "#f0f0f0", width: "100%" }}
      >
        <Testimonials />
      </section>
    </div>
  );
};

export default Homepage;
