import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  useEffect(() => {
    axios
      .get("https://api.quotable.io/random?tags=technology,famous-quotes")
      .then((res) => {
        if (res.status === 200) {
          setQuote({ text: res.data.content, author: res.data.author });
        }
      })
      .catch((e) => {});
  }, []);
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        backgroundImage: `url(https://source.unsplash.com/random)`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src="https://source.unsplash.com/random"
          alt="https://source.unsplash.com/random"
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Posty
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {quote.text}!!!
            </Typography>
            <Typography
              sx={{ textDecoration: "underline" }}
              gutterBottom
              variant="h3"
              color="orange"
            >
              {quote.author}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
