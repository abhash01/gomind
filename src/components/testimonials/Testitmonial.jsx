import { Box, Typography, Divider } from "@mui/material";
import feedBackImg from "../../images/testimonial.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testitmonial = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="#fff"
    >
      <Box textAlign="center">
        <Typography fontSize={40} fontWeight={600} color="rgba(99, 43, 144, 1)">
          Testimonials
        </Typography>
        <Typography fontSize={20} fontWeight={400} color="#000">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. L
        </Typography>

        <Divider
          sx={{
            width: 145,
            height: 4,
            bgcolor: "var(--secondary-color)",
            mx: "auto",
            mt: 4,
          }}
        />
      </Box>
      <Box
        sx={{
          mt: 4,
          width: "100%",
          height: 600,
          backgroundImage: `url(${feedBackImg})`,
          backgroundSize: "cover",
          backgroundPositionX: "10%",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel
          autoPlay={false}
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          emulateTouch
          interval={5000}
          transitionTime={500}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              py: 8,
            }}
          >
            <Box
              width={195}
              height={195}
              border={4}
              borderColor="white"
              borderRadius={50}
            ></Box>
            <Typography
              color="common.white"
              fontSize={26}
              fontWeight={500}
              lineHeight={1.5}
              mt={4}
            >
              Tarik Aziz
            </Typography>
            <Typography
              color="common.white"
              fontSize={20}
              fontWeight={500}
              lineHeight={1.5}
            >
              Web Developer
            </Typography>
            <Typography
              color="common.white"
              fontSize={20}
              fontWeight={500}
              lineHeight={1.5}
              mt={4}
            >
              Lorem Ipsum is simply dummytext of the Lorem Ipsum Lorem Ipsum is
              simply dummytext of the Lorem Ipsum
            </Typography>
            <Typography
              color="common.white"
              fontSize={20}
              fontWeight={500}
              lineHeight={1.5}
              mt={1}
            >
              Lorem Ipsum is simply dummytext of the Lorem Ipsum Lorem Ipsum is
              simply dummytext of the Lorem Ipsum \
            </Typography>
            <Typography
              color="common.white"
              fontSize={20}
              fontWeight={500}
              lineHeight={1.5}
              mt={1}
            >
              Lorem Ipsum is simply dummytext of the Lorem Ipsum Lorem Ipsum is
              simply dummytext of the Lorem Ipsum
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", textAlign: "center" }}
            >
              Testimonial 2
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", textAlign: "center" }}
            >
              Testimonial 3
            </Typography>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testitmonial;
