import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Container,
} from "@mui/material";

const cardData = [
  {
    title: "Revenue",
    description: "₹ 96.82 Cr",
    percentage: "+16.24",
    period: "Vs.Last week",
  },
  {
    title: "EBITDA",
    description: "₹ 11.45 Cr",
    percentage: "+6.74",
    period: "Vs.Last week",
  },
  {
    title: "Net ProfitMargin",
    description: "₹ 6.5 Cr",
    percentage: "+6.74",
    period: "Vs.Last week",
  },
  {
    title: "Net Profit",
    description: "₹ 6.29 Cr",
    percentage: "+6.74",
    period: "Vs.Last week",
  },
  {
    title: "Operating Cost",
    description: "₹ 85.36 Cr",
    percentage: "+6.74",
    period: "Vs.Last week",
  },
];

function TopCardRow() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ maxWidth: 345, padding: 1 }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text-secondary"
                  component="div"
                >
                  {card.title}
                </Typography>
                <Typography variant="h4" color="black" fontWeight={40}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  size="small"
                  sx={{ backgroundColor: "lightgray", color: "#00c853" }}
                >
                  {card.percentage}%
                </Typography>
                <Typography size="small" color="gray">
                  {card.period}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TopCardRow;
