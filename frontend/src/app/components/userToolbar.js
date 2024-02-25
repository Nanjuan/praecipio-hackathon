"use client"

import {
    Container,
    Typography
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import NpoList from "./NpoList";


export default async function UserProfile({user}) {

    return (
        <main>
            <section className="py-10">
                <Container>
                    <div  className="flex justify-between space-x-7">
                        <div className="w-full">
                            <div className="flex justify-between items-center">
                                <Typography variant="h5">
                                    Organizations
                                </Typography>
                                <Typography>
                                    Total Donated: $5000
                                </Typography>
                            </div>
                            <Accordion defaultExpanded>
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        <div className="w-full flex justify-between">
                                            <Typography>Help the Turtles</Typography>
                                            <Typography>$500</Typography>
                                        </div>
                                    </AccordionSummary>
                                <AccordionDetails>
                                    We help turtles!
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        <div className="w-full flex justify-between">
                                            <Typography>Boomers That Need Help</Typography>
                                            <Typography>$500</Typography>
                                        </div>
                                    </AccordionSummary>
                                <AccordionDetails>
                                    We help boomers who think they know everything.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        <div className="w-full flex justify-between">
                                            <Typography>Spoiled Children of America</Typography>
                                            <Typography>$600</Typography>
                                        </div>
                                    </AccordionSummary>
                                <AccordionDetails>
                                    We help children that can't help themselves
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="text-center">
                            <AccountCircleIcon style={{fontSize:100}}/>
                            <Typography variant="h5">{user.name}</Typography>
                            <Typography variant="h5">{user.email}</Typography>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}