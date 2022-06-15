import React, { useContext } from "react";
import {
  Container,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { KvizContext } from "./context";

const WelcomePage = () => {
  const {
    setupQuiz,
    category,
    setupCategory,
    amount,
    setupAmount,
    dificulty,
    setupDificulty,
  } = useContext(KvizContext);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        justifyContent: " center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <form onSubmit={setupQuiz} className="form">
          <FormControl sx={{ width: "10rem" }}>
            <FormLabel>Select Category</FormLabel>
            <Select
              value={category}
              onChange={(e) => setupCategory(e.target.value)}
            >
              <MenuItem value={21}>Sport</MenuItem>
              <MenuItem value={22}>Geography</MenuItem>
              <MenuItem value={23}>History</MenuItem>
              <MenuItem value={27}>Animals</MenuItem>
              <MenuItem value={9}>General Knowledge</MenuItem>
              <MenuItem value={10}>Books</MenuItem>
              <MenuItem value={0}>Any Category</MenuItem>
            </Select>
          </FormControl>
          <FormLabel>Number of Questions</FormLabel>
          <Select value={amount} onChange={(e) => setupAmount(e.target.value)}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>

          <FormLabel>Choose Difficulty</FormLabel>
          <RadioGroup
            value={dificulty}
            onChange={(e) => setupDificulty(e.target.value)}
          >
            <FormControlLabel value="easy" control={<Radio />} label="Easy" />
            <FormControlLabel
              value="medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="hard" control={<Radio />} label="Hard" />
          </RadioGroup>

          <Button variant="contained" type="submit">
            START
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default WelcomePage;
