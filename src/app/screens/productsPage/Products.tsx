import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
  return (
    <div className="products">
      <Container>
        <Stack className="title-container">
          <Typography className="products-title">Burak Restaurant</Typography>
          <Box className="search-container">
            <input
              type="text"
              placeholder="Type here"
              className="products-search-box"
            />
            <Button
              variant="contained"
              color="primary"
              className="search-button"
            >
              SEARCH <SearchIcon />
            </Button>
          </Box>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={1}
          sx={{ mr: 2, mt: 10 }}
        >
          <Button variant="contained" color="primary">
            NEW
          </Button>
          <Button variant="contained" color="secondary">
            PRICE
          </Button>
          <Button variant="contained" color="secondary">
            VIEWS
          </Button>
        </Stack>

        <Stack>
          <Stack className="category-tabs" direction="column">
            <Button variant="contained" color="primary">
              DISH
            </Button>
            <Button variant="contained" color="secondary">
              SALAD
            </Button>
            <Button variant="contained" color="secondary">
              DRINK
            </Button>
            <Button variant="contained" color="secondary">
              DESERT
            </Button>
            <Button variant="contained" color="secondary">
              OTHER
            </Button>
          </Stack>

          <Stack>
            
          </Stack>
        </Stack>
      </Container>
      <div className="brands-logo"></div>

      {/* <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div> */}
    </div>
  );
}
