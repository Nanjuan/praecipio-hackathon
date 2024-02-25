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
          <Link href={`/npo/${npo.name}`}>
            <Card
              elevation={10}
              className="rounded-x1 shadow-[10px_10px_15px_0]-assentColor border border-[#cdd1e0] hover:scale-105 transition-transform duration-500 ease-in-out bg-secondaryColor h-full flex flex-col"
            >
              <div className="bg-gray-300 flex justify-center items-center h-[180px]">
                {
                  npo.logo ? <img src={npo.logo} alt={npo.name} /> : <div className="text-3xl text-textColor">{npo.name[0]}</div>
                }
              </div>
              <CardContent className="flex-1">
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className="mb-4 text-textColor"
                >
                  {npo.name}
                </Typography>
                <Rating value={npo.score / 20} precision={0.5} readOnly />
                <Typography variant="body2" className="text-sm text-textColor">
                  {npo.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" className="text-sm text-assentColor">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
