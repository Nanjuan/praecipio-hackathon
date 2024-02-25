import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button,
  Rating
} from "@mui/material";
import Link from "next/link";

export default function NpoList({ npos }) {
  return (
    <Grid container spacing={4}>
      {npos.map((npo) => (
        <Grid item md={4} key={npo.privateId}>
          <Card
            elevation={10}
            className="rounded-x1 shadow-[10px_10px_15px_0]-assentColor border border-[#cdd1e0] hover:scale-105 transition-transform duration-500 ease-in-out bg-secondaryColor"
          >
            <Link href={`/npo/${npo.privateId}`}>
              
                <CardMedia
                  component="img"
                  height="100"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="mb-4 text-textColor">
                    {npo.npoName}
                  </Typography>
                  <Rating value={npo.rating} precision={0.5} readOnly />
                  <Typography variant="body2" className="text-sm text-textColor">
                    {npo.aiSummary}
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className="text-sm text-assentColor">
                      Learn More
                    </Button>
                </CardActions>
              
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
