import {
    Container,
    Typography
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';



export default async function UserProfile({user}) {

    return (
        <main>
            <nav className="h-20 w-full bg-black"></nav>
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
                            <Accordion>
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        <div className="w-full flex justify-between">
                                            <Typography>Help the Turtles</Typography>
                                            <Typography>$500</Typography>
                                        </div>
                                    </AccordionSummary>
                                <AccordionDetails>
                                    WE help tutrles!
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                                        <div className="w-full flex justify-between">
                                            <Typography>Help the Turtles</Typography>
                                            <Typography>$500</Typography>
                                        </div>
                                    </AccordionSummary>
                                <AccordionDetails>
                                    WE help tutrles!
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