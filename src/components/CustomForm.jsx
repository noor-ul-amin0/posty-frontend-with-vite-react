import { Box, Container, Grid, MenuItem, TextField } from "@mui/material";

const CustomForm = ({ xs, handleChange, state }) => {
  return (
    <Container
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, mt: 3 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={xs}>
              <TextField
                fullWidth
                onChange={handleChange}
                name="title"
                placeholder="Enter Title"
                type="text"
                id="title"
                label="Title"
                value={state.title}
                required
              />
            </Grid>
            <Grid item xs={xs}>
              <TextField
                fullWidth
                onChange={handleChange}
                name="body"
                placeholder="Enter Body"
                type="text"
                id="body"
                label="Body"
                value={state.body}
                required
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
};
export default CustomForm;
