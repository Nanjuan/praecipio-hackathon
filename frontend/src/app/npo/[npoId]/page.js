import {
    Container,
    Typography
} from "@mui/material";
import { getNpo } from "../../../../lib/npo";

export default async function NPO({params: {npoId}}) {
    const npo = await getNpo(npoId);
    return (
      <main>
        <nav className="h-20 w-full bg-black"></nav>
        <section className="py-10">
          <Container>
            <div className="flex items-center space-x-4">
                <Typography variant="h1">{npo.npoName}</Typography>
            </div>
          </Container>
        </section>
      </main>
    );
}