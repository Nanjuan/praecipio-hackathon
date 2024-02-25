import {
    Container,
    Typography,
    Rating,
    Grid
} from "@mui/material";
import { getNpo, getNpoRating } from "../../../../lib/npo";
import ButtonMain from "@/app/components/Button";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Image from "next/image";

export default async function NPO({params: {npoId}}) {
    const npo = await getNpo(decodeURIComponent(npoId)).catch(console.log) || null;
    const rating = await getNpoRating(npoId).catch(console.log) || 4.5;

    return (
      <main>
        <section className="py-10">
          <Container>
            {
              npo ? (
                <>
            <div className="flex justify-between items-center space-x-4 mb-8">
              <div>
                <img src={npo['Logo-URL']} alt={npo.Name} />
                <Typography variant="h1" className="mt-2 mb-2">
                  {npo.Name}
                </Typography>
                <Rating size="large" value={rating} precision={0.5} readOnly />
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
                      <a href={npo["Web-URL"]} target="_blank" rel="noreferrer">
                        <Typography>{npo["Web-URL"]}</Typography>
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
            </>
              ) : (
                <Typography variant="h2">"{npoId}" did not return any results</Typography>
              )
            }
          </Container>
        </section>
      </main>
    );
}