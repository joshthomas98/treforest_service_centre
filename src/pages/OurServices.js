import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const tiers = [
  {
    title: "Brake Pad / Disc Replacement",
    subheader: "Replace brake pads / rotors / discs and or adjust brakes.",
    price: "Price varies",
    duration: "1 hr",
    buttonText: "Learn More",
    buttonVariant: "outlined",
  },
  {
    title: "General Mechanical Work",
    subheader: "General Mechanical Work",
    price: "Price varies",
    duration: "1 hr",
    buttonText: "Learn More",
    buttonVariant: "outlined",
  },
  {
    title: "Car MOT (Class 4)",
    subheader: "Class 4 MOTs (for cars and light vans)",
    price: "£40.00",
    duration: "35 mins",
    buttonText: "Learn More",
    buttonVariant: "outlined",
  },
  {
    title: "Van MOT (Class 7)",
    subheader:
      "Class 7 MOTs (for 3 to 3.5 tonne design gross weight commercial vans)",
    price: "£50.00",
    duration: "35 mins",
    buttonText: "Learn More",
    buttonVariant: "outlined",
  },
  {
    title: "Passenger Vehicle MOT (13+ seats) (Class 5)",
    subheader:
      "Class 5 MOTs (Private passenger vehicles, ambulances, and motor caravans with 13 or more passenger seats)",
    price: "£65.00",
    duration: "35 mins",
    buttonText: "Learn More",
    buttonVariant: "outlined",
  },
  {
    title: "Full Service",
    subheader:
      "Full Service: Oil and Oil filter replacement, Air filter and fuel filter replacement. Fluid checks and top ups if required. Mechanical inspection of visible components, i.e. braking, tyres, steering exhaust etc.",
    price: "Price varies",
    duration: "2 hrs",
    buttonText: "Learn More",
    buttonVariant: "outlined",
  },
  {
    title: "Partial (intermediate) Service",
    subheader: "Partial Service: Oil and Oil filter replacement.",
    price: "Price varies",
    duration: "1 hr",
    buttonText: "Learn More",
    buttonVariant: "outlined",
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function OurServices() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Our Services
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default MUI components with
          little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={5}
          alignItems="flex-end"
          sx={{ display: "flex" }}
        >
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={12} md={4} sx={{ flex: 1 }}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End footer */}
    </ThemeProvider>
  );
}
