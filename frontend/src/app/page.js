import { Container, TextField, InputAdornment, IconButton }  from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import { getNpos } from "../../lib/npo";
import NpoList from "./components/NpoList";


export default async function Home() {
  const npos = await getNpos();
  
  return (
    <main>
      <section className="py-16 bg-backgroundColor">
        <Container>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            className="shadow-xl border border-[#cdd1e0] bg-secondaryColor "
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
      <section className="py-10 bg-backgroundColor">
        <Container>
          <NpoList npos={npos} />
        </Container>
      </section>
    </main>
  );
}


