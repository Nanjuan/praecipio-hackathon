import { Container, TextField, InputAdornment, IconButton }  from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import { getNpos } from "../../lib/npo";
import NpoList from "./components/NpoList";
import Search from "./components/Search";


const npos = [
  {
    ein: "841768076",
    name: "Save The Kids",
    logo: null,
    website: null,
    creationDate: "2019-10-15",
    location: "SANDY, UT",
    score: 108.315994,
    description:
      "Save The Kids is a nonprofit organization focused on youth development. It is based in Sandy, UT. It received its nonprofit status in 2019.",
  },

  {
    ein: "530196605",
    name: "American Red Cross",
    logo: "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/redcross_bbehnv",
    website: "http://www.redcross.org/",
    creationDate: "2019-08-27",
    location: "Washington, District of Columbia, 20006 United States",
    score: 92.929214,
    description:
      "Save The Kids is a nonprofit organization focused on youth development. It is based in Sandy, UT. It received its nonprofit status in 2019.",
  },

  {
    ein: "202370934",
    name: "Wounded Warrior Project",
    logo: "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive/faja_profile/vxxlwwq6yiuqvtocmb7r",
    website: "http://www.woundedwarriorproject.org",
    creationDate: "2019-08-12",
    location: "JACKSONVILLE, Florida, 32256 United States",
    score: 131.75624,
    description: "Our mission is to honor and empower Wounded Warriors.",
  },

  {
    ein: "464641830",
    name: "Vetpaw",
    logo: null,
    website: null,
    creationDate: "2019-10-15",
    location: "NEW YORK, NY",
    score: 95.53284,
    description:
      "Vetpaw is a nonprofit organization focused on advocating or providing services for animals. It is based in New York, NY. It received its nonprofit status in 2014.",
  },

  {
    ein: "821110116",
    name: "The Innocent Lives Foundation",
    logo: null,
    website: "http://innocentlivesfoundation.org",
    creationDate: "2019-10-15",
    location: "ORLANDO, FL",
    score: 135.53342,
    description:
      "The Innocent Lives Foundation is a nonprofit organization focused on crime and laws. It is based in Orlando, FL. It received its nonprofit status in 2017.",
  },
];


export default async function Home() {


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


