import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Stack,
  Typography,
  Chip,
  Pagination,
  PaginationItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
          sx={{ mr: 2, mt: 10, mb: 4 }}
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

        <Stack className="products-page-wrapper">
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
            <div className="cards-frame">
              {products.length !== 0 ? (
                products.map((ele, index) => {
                  return (
                    <Card key={index} className="card">
                      <Chip label="LARGE size" size="small" />

                      <CardMedia
                        component="img"
                        image={ele.imagePath}
                        alt={ele.productName}
                      />

                      <Box className="hover-overlay">
                        <Box className="hover-icons">
                          <button className="shop-button">
                            <img src="/icons/shopping-cart.svg" alt="shop" />
                          </button>
                          <Box className="eye-badge">
                            <img
                              src="/icons/eye.png"
                              alt="views"
                              className="eye-icon"
                            />
                            <span className="view-count">2</span>
                          </Box>
                        </Box>
                      </Box>

                      <Box className="card-info">
                        <h3 className="product-name">{ele.productName}</h3>
                        <Box className="price-container">
                          <img
                            src="/icons/dollar-coin.png"
                            alt="price"
                            className="dollar-icon"
                          />
                          <span className="price">15</span>
                        </Box>
                      </Box>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New products are not available!</Box>
              )}
            </div>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className="brands-logo">
        
      </div>

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
