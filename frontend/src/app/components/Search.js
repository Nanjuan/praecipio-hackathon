"use client";
import {
  Container,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getNpos } from "../../../lib/npo";
import NpoList from "../components/NpoList";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
      e.preventDefault();
      router.push(`/npo/${search}`);
    };

  return (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              className="shadow-xl border border-[#cdd1e0] bg-secondaryColor "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      ariaLabel="search for NPOs"
                      // edge="end"
                      type="submit"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
  );
}
