import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid2,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Stack,
} from "@mui/material";

const RegistrationBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "rgba(52, 171, 252, 0.6)",
        display: "flex",
        alignItems: "center", // Vertically centers the items
        justifyContent: "center", // Horizontally centers the items
        padding: "20px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Spreads the sections apart
            flexDirection: { xs: "column", md: "row" }, // Stacks on mobile, side by side on desktop
            alignItems: "center",
            gap: 4, // Adds space between the sections
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              textAlign: "left",
              color: "white",
              flex: 1, // Takes up available space
            }}
          >
            <Typography variant="p">
              GET 100s OF ONLINE COURSES FOR FREE
            </Typography>
            <Typography variant="h6">REGISTER NOW</Typography>
            <Box
              display="flex"
              justifyContent="left"
              alignItems="center"
              marginTop={4}
            >
              <Box
                margin="0 10px"
                textAlign="center"
                border="2px solid #fff"
                borderRadius="50%"
                height="100px"
                width="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="h3">00</Typography>
                <Typography>Days</Typography>
              </Box>
              <Box
                margin="0 10px"
                textAlign="center"
                border="2px solid #fff"
                borderRadius="50%"
                height="100px"
                width="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="h3">00</Typography>
                <Typography>Hours</Typography>
              </Box>
              <Box
                margin="0 10px"
                textAlign="center"
                border="2px solid #fff"
                borderRadius="50%"
                height="100px"
                width="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="h3">00</Typography>
                <Typography>Minutes</Typography>
              </Box>
              <Box
                margin="0 10px"
                textAlign="center"
                border="2px solid #fff"
                borderRadius="50%"
                height="100px"
                width="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="h3">00</Typography>
                <Typography>Seconds</Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "4px",
              border: "1px solid grey",
              flex: 1, // Takes up available space
            }}
          >
            <Box
              sx={{
                backgroundColor: "#632b90",
                flex: 1, // Takes up available space
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                sx={{ margin: "0px 0 0 10px", color: "#fff", padding: "10px" }}
              >
                Create Your Free Account Now!
              </Typography>
            </Box>

            <form>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap", // Allow items to wrap to the next line
                  padding: "10px",
                  gap: 2, // Space between items
                }}
              >
                <TextField
                  label="Full Name"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ flex: "0 0 48%" }} // First field takes 48% width
                />
                <TextField
                  label="Email ID"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ flex: "0 0 48%" }} // Second field takes 48% width
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ flex: "0 0 48%" }} // Third field takes 48% width
                />
              </Box>

              <FormControl component="fieldset" margin="normal">
                <FormLabel
                  component="legend"
                  sx={{
                    padding: "10px 0 0 20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{
                      color: "#000",
                    }}
                  >
                    Which Course are you interested in?
                  </Typography>
                </FormLabel>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%", // Ensures the Box takes full width of its parent
                    paddingTop: "10px", // Optional, adds spacing above the button
                    paddingBottom: "10px",
                  }}
                >
                  {/* Left Part */}
                  <Box
                    sx={{
                      flex: "0 0 42%", // Left part occupies 43% of the width
                      backgroundColor: "rgba(187, 187, 187, 1)", // Light grey background
                      padding: "10px",
                      borderRadius: "8px",
                      color: "#000",
                      fontSize: "14px", // Apply font-size
                      lineHeight: "20px", // Apply line-height
                    }}
                  >
                    <Stack>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                          color: "#000",
                          padding: "10px",
                        }}
                      >
                        Online
                      </Typography>
                    </Stack>
                    <FormControlLabel
                      value="Tableau and Advanced Excel"
                      control={<Radio />}
                      label="Tableau and Advanced Excel"
                    />
                    <FormControlLabel
                      value="Power BI and Advanced Excel"
                      control={<Radio />}
                      label="Power BI and Advanced Excel"
                    />
                    <FormControlLabel
                      value="Salesforce Developer"
                      control={<Radio />}
                      label="Salesforce Developer"
                    />
                    <FormControlLabel
                      value="Python and SQL"
                      control={<Radio />}
                      label="Python and SQL"
                    />
                    <FormControlLabel
                      value="Java Developer"
                      control={<Radio />}
                      label="Java Developer"
                    />
                  </Box>

                  {/* Right Part */}
                  <Box
                    sx={{
                      flex: "0 0 42%", // Right part occupies 43% of the width
                      backgroundColor: "rgba(187, 187, 187, 1)", // Light grey background
                      padding: "10px",
                      borderRadius: "8px",
                      color: "#000",
                      fontSize: "14px", // Apply font-size
                      lineHeight: "20px", // Apply line-height
                    }}
                  >
                    <Stack>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                          color: "#000",
                          padding: "10px",
                        }}
                      >
                        Offline
                      </Typography>
                    </Stack>
                    <FormControlLabel
                      value="Database Administrator"
                      control={<Radio />}
                      label="Database Administrator"
                    />
                    <FormControlLabel
                      value="HR Development Program"
                      control={<Radio />}
                      label="HR Development Program"
                    />
                    <FormControlLabel
                      value="HR Business Partnering"
                      control={<Radio />}
                      label="HR Business Partnering"
                    />
                    <FormControlLabel
                      value="Technical Recruiting"
                      control={<Radio />}
                      label="Technical Recruiting"
                    />
                    <FormControlLabel
                      value="Digital Marketing & Gen AI"
                      control={<Radio />}
                      label="Digital Marketing & Gen AI"
                    />
                  </Box>
                </Box>
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%", // Ensures the Box takes full width of its parent
                  paddingTop: "10px", // Optional, adds spacing above the button
                  paddingBottom: "10px",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(0, 86, 145, 1)",
                    color: "white",
                    padding: "10px 20px", // Adjust padding for button size
                    maxWidth: "180px", // Set a max width for the button
                    width: "100%", // Make the button take up full width of its container
                  }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RegistrationBanner;
