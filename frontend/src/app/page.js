import { Container, TextField, InputAdornment, IconButton }  from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import { getNpos } from "../../lib/npo";
import NpoList from "./components/NpoList";


export default async function Home() {
  const npos = await getNpos();
  
  return (
    <main>
      <nav className="h-20 w-full bg-black"></nav>
      <section className="py-20 bg-blue-300">
        <Container>
          <TextField
            label="Search"
            variant="filled"
            fullWidth
            className="bg-white"
            InputProps={{
               endAdornment: 
              <InputAdornment position="end">
                <IconButton
                  ariaLabel="search for NPOs"
                  // edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }}
           
          />
        </Container>
      </section>
      <section className="py-10">
        <Container>
          <NpoList npos={npos} />
        </Container>
      </section>
    </main>
  );
}


