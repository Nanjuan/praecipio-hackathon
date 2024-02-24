import {
    Container,
    Typography,
    Rating,
    Grid
} from "@mui/material";
import { getNpo } from "../../../../lib/npo";
import ButtonMain from "@/app/components/Button";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default async function NPO({params: {npoId}}) {
    const npo = await getNpo(npoId);
    return (
      <main>
        <section className="py-10">
          <Container>
            <div className="flex justify-between items-center space-x-4 mb-8">
              <div>
                <Typography variant="h1" className="mb-2">
                  {npo.npoName}
                </Typography>
                <Rating
                  size="large"
                  value={npo.rating}
                  precision={0.5}
                  readOnly
                />
              </div>
              <ButtonMain>Donate</ButtonMain>
            </div>
            <Grid container spacing={4}>
              <Grid item md={6}>
                <div className="bg-gray-100 rounded-xl p-8 max-w-xl h-full">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-4">
                      <div className="flex items-center space-x-4 w-[250px]">
                        <LanguageIcon />
                        <Typography variant="h4">Website</Typography>
                      </div>
                      <a href={npo.website} target="_blank" rel="noreferrer">
                        <Typography>{npo.url}</Typography>
                      </a>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex items-center space-x-4 w-[250px]">
                        <PersonIcon />
                        <Typography variant="h4">CEO</Typography>
                      </div>
                      <Typography>{npo.ceoOwnerName}</Typography>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex items-center space-x-4 w-[250px]">
                        <AccessTimeFilledIcon />
                        <Typography variant="h4">Years of Operation</Typography>
                      </div>
                      <Typography>{npo.yearsOfOperation}</Typography>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item md={6}>
                <div className="bg-gray-100 rounded-xl p-8 max-w-xl h-full">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-4">
                      <div className="w-[250px]">
                        <Typography variant="h4">
                          Tax Revenue per Year
                        </Typography>
                      </div>
                      <Typography>${npo.taxRevenuePerYear}</Typography>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="w-[250px]">
                        <Typography variant="h4">
                          Asset Amount per Year
                        </Typography>
                      </div>
                      <Typography>${npo.assetsAmountPerYear}</Typography>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    );
}