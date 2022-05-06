import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BlogPost = ({ post }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardHeader
        // avatar={<Avatar alt={author.fullName} src={author.avatar} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={new Date(post.createdAt).toUTCString()}
      />
      <CardMedia
        component="img"
        height="194"
        image={post?.image}
        alt={post?.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post?.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          <Typography variant="body2" color="text.primary">
            200
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogPost;
