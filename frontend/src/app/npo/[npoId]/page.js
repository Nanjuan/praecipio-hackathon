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
import CategoryIcon from "@mui/icons-material/Category";
import Script from "next/script";

export default async function NPO({params: {npoId}}) {
    const npo = await getNpo(decodeURIComponent(npoId)).catch(console.log) || null; 

    return (
      <main>
        <section className="py-10">
          <Container>
            {npo ? (
              <>
                <div className="flex justify-between items-center space-x-4 mb-8">
                  <div>
                    {npo.logo && <img src={npo.logo} alt={npo.name} />}
                    <Typography variant="h1" className="mt-2 mb-2">
                      {npo.name}
                    </Typography>
                    <Rating
                      size="large"
                      value={npo.score / 20}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <a
                    href={`https://www.every.org/${npo.raw.primarySlug}#/donate`}
                  >
                    <ButtonMain>Donate</ButtonMain>
                  </a>
                </div>
                <Grid container spacing={4}>
                  <Grid item md={8}>
                    <div className="bg-gray-100 rounded-xl p-8 h-full">
                      <ul className="space-y-2">
                        {npo.website && (
                          <li className="flex items-center space-x-4">
                            <div className="flex items-center space-x-4 min-w-[250px]">
                              <LanguageIcon />
                              <Typography variant="h4">
                                <strong>Website</strong>
                              </Typography>
                            </div>
                            <a
                              href={npo.website}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Typography>{npo.website}</Typography>
                            </a>
                          </li>
                        )}
                        <li className="flex items-center space-x-4">
                          <div className="flex items-center space-x-4 min-w-[250px]">
                            <PersonIcon />
                            <Typography variant="h4">
                              <strong>EIN</strong>
                            </Typography>
                          </div>
                          <Typography>{npo.ein}</Typography>
                        </li>
                        {npo.raw?.nteeCodeMeaning?.decileMeaning && (
                          <li className="flex items-center space-x-4">
                            <div className="flex items-center space-x-4 min-w-[250px]">
                              <CategoryIcon />
                              <Typography variant="h4">
                                <strong>Category</strong>
                              </Typography>
                            </div>
                            <Typography>
                              {npo.raw.nteeCodeMeaning.decileMeaning}
                            </Typography>
                          </li>
                        )}
                      </ul>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className="bg-gray-100 rounded-xl p-8 h-full">
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-4">
                          <div className="w-[250px]">
                            <Typography variant="h4">
                              <strong>Tax Revenue / Year</strong>
                            </Typography>
                          </div>
                          <Typography>
                            ${(Math.random() * 10000000).toFixed(0)}
                          </Typography>
                        </li>
                        <li className="flex items-center space-x-4">
                          <div className="w-[250px]">
                            <Typography variant="h4">
                              <strong>Asset Amount / Year</strong>
                            </Typography>
                          </div>
                          <Typography>
                            ${(Math.random() * 10000000).toFixed(0)}
                          </Typography>
                        </li>
                      </ul>
                    </div>
                  </Grid>
                </Grid>
                {(npo.description || npo.raw.description) && (
                  <div className="mt-8">
                    <Typography variant="h2" className="mb-3">
                      Description
                    </Typography>
                    <Typography>
                      {npo.description ? npo.description : npo.raw.description}
                    </Typography>
                  </div>
                )}
              </>
            ) : (
              <Typography variant="h2">
                "{decodeURIComponent(npoId)}" did not return any results
              </Typography>
            )}
          </Container>
        </section>
        <Script src="https://embeds.every.org/0.4/button.js" />
      </main>
    );
}