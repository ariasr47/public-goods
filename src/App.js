import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import cat_image1_mobile from "./images/cat_image1_mobile.png";
import cat_image2_mobile from "./images/cat_image2_mobile.png";
import cat_treat_minnows from "./images/cat_treat_minnows.png";
import cat_image1_desktop from "./images/cat_image1_desktop.png";
import cat_image2_desktop from "./images/cat_image2_desktop.png";

const CustomList2 = styled("ul")`
  list-style: none;

  li {
    position: relative;
    padding-left: 3rem;
    &:not(:last-child) {
      padding-bottom: 2rem;
    }
  }

  li::before {
    content: "✓";
    font-size: 3rem;
    position: absolute;
    left: 0;
    line-height: 1;
  }
`;

const CustomList1 = styled("ul")`
  list-style: none;

  li {
    position: relative;
    padding-left: 3rem;
    &:not(:last-child) {
      padding-bottom: 2rem;
    }
  }

  li::before {
    content: "●";
    font-size: 3rem;
    position: absolute;
    left: 0;
    line-height: 1;
  }
`;

function App() {
  return (
    <Box className="App">
      <Grid container>
        <Grid item xs={12} lg={7} sx={{ order: { lg: 2 } }}>
          <picture>
            <source media="(min-width: 800px)" srcset={cat_image1_desktop} />
            <img alt="" src={cat_image1_mobile} style={{ width: "100%" }} />
          </picture>
        </Grid>
        <Grid
          item
          container
          xs={12}
          lg={5}
          rowSpacing={3}
          sx={{ px: "3rem", py: "4rem", order: { lg: 1 } }}
          direction="column"
        >
          <Grid item xs="auto">
            <Typography variant="h3" fontWeight={700}>
              Treat your pet (and you). It's on us!
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="h4">
              Treat your pet to a healthy treat for free to kick off your Public Goods trial membership.
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="h3" fontWeight={700}>
              See what it's like to be a Public Goods member.
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="h4" paddingLeft="1rem">
              <CustomList1>
                <li>
                  Included in your bundle is a free 2-week membership that gives you unlimited access to our entire
                  collection of sustainable essentials.
                </li>
                <li>
                  Take a load off. We make it easy for you to make better choices. Always included: eco-friendly
                  products you can trust
                </li>
              </CustomList1>
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              fullWidth
              size="large"
              color="warning"
              sx={{
                display: { xs: "none", lg: "block" },
                p: "1rem",
                opacity: 0.8,
                textTransform: "unset",
                borderRadius: "0px",
              }}
            >
              <Typography variant="h5" fontWeight={700}>
                Claim your free offer
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          lg={12}
          sx={{ px: "3rem", py: "4rem", backgroundColor: "rgb(226, 227, 228)", order: { lg: 3 } }}
        >
          <Grid item xs={12}>
            <Typography variant="h3" fontWeight={700} textAlign="center">
              OUR TREAT
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" columnSpacing={5}>
            <Grid item lg={5}>
              <img alt="" src={cat_treat_minnows} width="90%" />
              <Typography variant="h4" fontWeight={700} textAlign="center" paddingBottom="1.5rem">
                Freeze Dried Minnows
              </Typography>
              <Typography variant="h4" textAlign="center">
                Healthy ingredients with nothing to hide.
              </Typography>
            </Grid>
            <Grid item lg={5} sx={{ display: { xs: "none", lg: "block" } }}>
              <img alt="" src={cat_treat_minnows} width="90%" />
              <Typography variant="h4" fontWeight={700} textAlign="center" paddingBottom="1.5rem">
                Freeze Dried Minnows
              </Typography>
              <Typography variant="h4" textAlign="center">
                Healthy ingredients with nothing to hide.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ order: { lg: 4 } }}>
          <picture>
            <source media="(min-width: 800px)" srcset={cat_image2_desktop} />
            <img alt="" src={cat_image2_mobile} style={{ width: "100%" }} />
          </picture>
        </Grid>
        <Grid
          item
          container
          xs={12}
          lg={6}
          sx={{ px: "3rem", py: "4rem", order: { lg: 5 } }}
          spacing={5}
          direction="column"
        >
          <Grid item xs="auto">
            <Typography variant="h3" fontWeight={700}>
              PET-APPROVED
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="h3" fontWeight={700}>
              It feels good to be a member.
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="h3">
              After your free trial, become a full-time member with benefits for $59 a year.
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Typography variant="h4">
              <CustomList2>
                <li>Cancel anytime during your free trial.</li>
                <li>Free shipping on orders over $45.</li>
                <li>Direct-to-consumer prices on hundreds of premium products.</li>
              </CustomList2>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Paper sx={{ display: { lg: "none" }, position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          color="warning"
          sx={{ p: "1rem", opacity: 0.8, textTransform: "unset", borderRadius: "0px" }}
        >
          <Typography variant="h5" fontWeight={700}>
            Claim your free offer
          </Typography>
        </Button>
      </Paper>
    </Box>
  );
}

export default App;
