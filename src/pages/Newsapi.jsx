import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

const News = () => {
  const [News, myNews] = useState([]);
  const [isError, setIsError] = useState("");
 

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c3bcc3939d6743a89312cad1aaaaada0")
      
      .then((response) => myNews(response.data))
      .catch((error) => setIsError(error.message));
  }, []);


  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography mt={3} align="center" variant="h4">
             Breaking News
            </Typography>
          </Grid>
        </Grid>
        {isError !== "" && <h2>{isError}</h2>}
        <Grid mt={1} container spacing={3}>
        {News.map((post) => {
          const { author, id, description, content, publishedAt } = post;
          return (
            
              <Grid item xs={4} key={id} >
                <Box>
                  <Card>
                    <CardContent>
                      <Typography
                        align="center"
                        gutterBottom
                        variant="p"
                        component="div"
                      >Auther :
                        {author.toUpperCase()}
                      </Typography>
                      <Typography
                        align="center"
                        gutterBottom
                        variant="h5"
                        component="div"
                      >content : 
                        {content}
                      </Typography>
                      <Typography
                        align="center"
                        gutterBottom
                        variant="h5"
                        component="div"
                      >description : 
                        {description}
                      </Typography>
                      <Typography
                        align="center"
                        gutterBottom
                        variant="h5"
                        component="div"
                      >Published At : 
                        {publishedAt}
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

export default News;
