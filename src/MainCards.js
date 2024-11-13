import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Button,
  Container,
  Box,
  CardActions,
  Menu,
  MenuItem,
} from "@mui/material";

const cardData = [
  {
    title: "Revenue and Expenses",
    image: "Revenue and Expenses.png",
  },
  {
    title: "Financial",
    image: "Revenue and Expenses.png",
  },
  {
    title: "Top Expenses",
    image: "Revenue and Expenses.png",
  },
  {
    title: "EBITDA",
    image: "Revenue and Expenses.png",
  },
  {
    title: "P&L - Management",
    image: "Revenue and Expenses.png",
  },
];

function MainCards() {
  const [dropdownEl, setDropdownEl] = useState(null);
  const [buttonText, setButtonText] = useState("Monthly");

  const handleDropdownOpen = (event) => {
    setDropdownEl(event.currentTarget);
  };

  const handleDropdownClose = (selectedOption) => {
    setButtonText(selectedOption);
    setDropdownEl(null);
  };
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {cardData.map((card, index) => (
          <Box key={index} sx={{ width: "100%", flex: "1 0 40%", mb: 3 }}>
            <Card sx={{ MaxWidth: "100%", p: 3 }}>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 1,
                }}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {card.title}
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{ backgroundColor: "lightgray" }}
                  onClick={handleDropdownOpen}
                >
                  {buttonText}
                </Button>
                <Menu
                  anchorEl={dropdownEl}
                  open={Boolean(dropdownEl)}
                  onClose={() => setDropdownEl(null)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem onClick={() => handleDropdownClose("Weekly")}>
                    Weekly
                  </MenuItem>
                  <MenuItem onClick={() => handleDropdownClose("Day")}>
                    Day
                  </MenuItem>
                </Menu>
              </CardActions>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default MainCards;
