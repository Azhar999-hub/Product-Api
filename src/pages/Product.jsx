import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
 

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=6")
      
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);




  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography mt={3} align="center" variant="h4">
              Product Gallery
            </Typography>
          </Grid>
        </Grid>
        {isError !== "" && <h2>{isError}</h2>}
        <Grid mt={1} container spacing={3}>
        {myData.map((post) => {
          const { title, id, description, price, category, image } = post;
          return (
            
              <Grid item xs={4} key={id} >
                <Box>
                  <Card>
                    <CardMedia component="img" height="180">
                      {}
                    </CardMedia>

                    <CardContent>
                      <Typography
                        align="center"
                        gutterBottom
                        variant="p"
                        component="div"
                      >
                        {title.toUpperCase()}
                      </Typography>
                      <Typography
                        align="center"
                        gutterBottom
                        variant="h5"
                        component="div"
                      >Price : $
                        {price}
                      </Typography>
                      
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
          );
        })}
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
