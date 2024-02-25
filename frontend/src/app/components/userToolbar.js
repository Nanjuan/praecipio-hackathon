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
                            <div className="flex justify-between items-center rounded-x1 shadow-[10px_10px_15px_0]-assentColor border border-[#cdd1e0] hover:scale-105 transition-transform duration-500 ease-in-out bg-secondaryColor">
                                <Typography variant="h5">
                                    Organizations
                                </Typography>
                                <Typography>
                                    Total Donated: $1500
                                </Typography>
                            </div>
                            <Accordion className="justify-between items-center rounded-x1 shadow-[10px_10px_15px_0]-assentColor border border-[#cdd1e0] hover:scale-105 transition-transform duration-500 ease-in-out bg-secondaryColor">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        <div className="w-full flex justify-between">
                                            <Typography>THe Trevor Project</Typography>
                                        </div>
                                    </AccordionSummary>
                                <AccordionDetails>
                                        <Typography className="text-left text-textColor">Donated = $500</Typography>
                                        <Typography>The Trevor Project is the leading suicide prevention and crisis intervention nonprofit organization for LGBTQ young people. We provide information & support to LGBTQ young people 24/7, all year round.</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="justify-between items-center rounded-x1 shadow-[10px_10px_15px_0]-assentColor border border-[#cdd1e0] hover:scale-105 transition-transform duration-500 ease-in-out bg-secondaryColor">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        <div className="w-full flex justify-between">
                                            <Typography>St Jude</Typography>
                                        </div>
                                    </AccordionSummary>
                                <AccordionDetails>
                                        <Typography className="text-left text-textColor">Donated = $600</Typography>
                                        <Typography>St. Jude is leading the way the world understands, treats and defeats childhood cancer and other life-threatening diseases.</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="justify-between items-center rounded-x1 shadow-[10px_10px_15px_0]-assentColor border border-[#cdd1e0] hover:scale-105 transition-transform duration-500 ease-in-out bg-secondaryColor">
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        <div className="w-full flex justify-between">
                                            <Typography>Innocent Lives Foundation</Typography>
                                        </div>
                                    </AccordionSummary>
                                <AccordionDetails>
                                        <Typography className="text-left text-textColor">Donated = $500</Typography>
                                        <Typography>Identify anonymous child predators and help bring them to justice.</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="text-center">
                            <AccountCircleIcon style={{fontSize:100}}/>
                            <div className="flex justify-between items-center rounded-x1 border border-[#cdd1e0] bg-secondaryColor">
                                <Typography className="bg-secondaryColor rounded-md text-center text-textColor">
                                    {user.name}
                                </Typography>
                            </div>
                            <div className="flex justify-between items-center rounded-x1 border border-[#cdd1e0] hover:scale-105 transition-transform duration-500 ease-in-out bg-secondaryColor">
                                <Typography className="bg-secondaryColor rounded-md text-center text-textColor">
                                    {user.email}
                                </Typography>
                            </div>
                            <div className="flex justify-between items-center rounded-x1 border border-[#cdd1e0] bg-secondaryColor">
                            <Typography className="bg-secondaryColor rounded-md text-center text-textColor">Tax Return</Typography>
                            </div>
                            <div className="flex justify-between items-center rounded-x1 border border-[#cdd1e0] hover:scale-105 transition-transform duration-500 ease-in-out bg-secondaryColor">
                            <a href="/workspaces/javascript-node/praecipio-hackathon/frontend/tempsFiles/Tax-return.pdf" download className="bg-secondaryColor rounded-md text-center text-textColor">
                                2024
                            </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}