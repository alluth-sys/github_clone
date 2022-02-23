import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Spacer from "react-spacer";

// Icon
import StarIcon from "@mui/icons-material/Star";

export default function RepoCard({ item, id }) {
  const card = (
    <div key={id}>
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
        <div style={{ display: "flex" }}>
          <StarIcon
            style={{
              color: "#FFCA28",
            }}
          />
          <Typography>{item.stargazers_count}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">View Detail</Button>
      </CardActions>
      <Spacer height={"20px"} />
    </div>
  );

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 5,
        width: 400,
        border: "1px solid #AAAAAA",
        overflow: "hidden",
      }}
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
