import { Box, Container, Typography } from "@mui/material";
import footerLogo from "../../images/footerlogo.png";

const Footer = () => {
  return (
    <Box bgcolor="rgba(99, 43, 144, 1)" py={4} mt="auto">
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              flex: "1 1 30%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <img src={footerLogo} alt="footerLogo" width={256} height={116} />
            <Typography
              fontSize={14}
              color="customGray.main"
              pr={10}
              lineHeight={1.5}
              letterSpacing={1}
            >
              Welcome to groMind Academy, your gateway to a successful career.
              We are a passionate team of HR and Technology professionals
            </Typography>
          </Box>

          {/* Center Section */}
          <Box
            sx={{
              flex: "1 1 30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pr: 10,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography fontSize={14} color="customGray.main">
                About Us
              </Typography>
              <Typography fontSize={14} color="customGray.main">
                Our Services
              </Typography>
              <Typography fontSize={14} color="customGray.main">
                Contact
              </Typography>
            </Box>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              flex: "1 1 30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography fontSize={14} color="customGray.main">
                Disclaimer
              </Typography>
              <Typography fontSize={14} color="customGray.main">
                Testimonials
              </Typography>
              <Typography fontSize={14} color="customGray.main">
                Private Policy
              </Typography>
              <Typography fontSize={14} color="customGray.main">
                Terms of Service
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
