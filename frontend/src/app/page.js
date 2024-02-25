import { Container, TextField, InputAdornment, IconButton }  from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import { getNpos } from "../../lib/npo";
import NpoList from "./components/NpoList";
import Search from "./components/Search";


export default async function Home() {
  const npos = await getNpos();


  return (
    <main>
      <section className="py-16 bg-backgroundColor">
        <Container>
          <Search />
        </Container>
      </section>
      <section className="py-10 bg-backgroundColor">
        <Container>
          <NpoList npos={npos} />
        </Container>
      </section>
    </main>
  );
}


