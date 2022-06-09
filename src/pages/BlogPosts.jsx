import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BlogPost from "../components/BlogPost";
import useUserPosts from "../hooks/useUserPosts";
import { Alert, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import Spinner from "../components/Spinner";
import Scroller from "../components/Scroller";
import EffectButton from "../components/EffectButton";
import DialogBox from "../components/DialogBox";
import { useMutation } from "react-query";
import { api } from "../api";
import { queryClient } from "../main";
const theme = createTheme();

export default function BlogPosts() {
  const [page, setPage] = React.useState(1);
  const limit = 10;
  const [open, setOpen] = React.useState(false);
  const { isLoading: isMutationLoading, mutateAsync } = useMutation(
    (post) => api.post("post", post),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
      onError: (error, variables, context) => {
        console.log({ error, variables, context });
      },
    }
  );
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data, isLoading, error } = useUserPosts(1, page, limit);
  if (error) {
    const { msg } = error.response.data;
    return (
      <Box>
        <Alert variant="filled" severity="error">
          {msg || error.message}
        </Alert>
      </Box>
    );
  }
  if (isLoading || isMutationLoading) {
    return <Spinner />;
  }
  const onSubmit = async (post) => {
    await mutateAsync(post);
    handleClose();
  };
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DialogBox open={open} handleClose={handleClose} onSubmit={onSubmit} />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <main>
            <Grid container justifyContent="flex-end" sx={{ mb: 2 }}>
              <EffectButton title="Create Post" handleClick={handleClickOpen} />
            </Grid>
            <Grid container spacing={2}>
              {data?.data?.posts?.map((post) => (
                <Grid key={post.id} item xs={6} md={3}>
                  <BlogPost post={post} />
                </Grid>
              ))}
            </Grid>
          </main>
          <Scroller showBelow={400} />
          <Box
            display="flex"
            width={"100%"}
            mt={2}
            alignItems="center"
            justifyContent="center"
          >
            <Pagination
              page={page}
              onChange={handleChange}
              count={50}
              variant="outlined"
              color="secondary"
            />
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
