import { css } from "@emotion/react";
import { Grid } from "@mui/material";
import { RingLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    sx={{
      margin: "0",
      position: "absolute",
      top: "50%",
    }}
  >
    <div className="sweet-loading">
      <RingLoader color="#85144b" loading={true} css={override} size={100} />
    </div>
  </Grid>
);

export default Spinner;
