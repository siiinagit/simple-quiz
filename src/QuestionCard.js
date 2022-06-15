import React from "react";
import { Box, Container } from "@mui/system";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { KvizContext } from "./context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const QuestionCard = ({}) => {
  const {
    data,
    counter,
    setupCounter,
    setupShowResult,
    checkifTrue,
    buttonColor,
    setupButtonColor,
  } = useContext(KvizContext);

  let nav = useNavigate();

  const buttons = [
    <Button
      key="one"
      color={buttonColor ? "error" : "primary"}
      onClick={checkifTrue}
    >
      {data[counter].incorrect_answers[1]}
    </Button>,
    <Button
      key="two"
      color={buttonColor ? "error" : "primary"}
      onClick={checkifTrue}
    >
      {data[counter].incorrect_answers[0]}
    </Button>,
    <Button
      key="three"
      color={buttonColor ? "error" : "primary"}
      onClick={checkifTrue}
    >
      {data[counter].incorrect_answers[2]}
    </Button>,
    <Button
      key="four"
      color={buttonColor ? "success" : "primary"}
      onClick={()=>checkifTrue('crct')}
    >
      {data[counter].correct_answer}
    </Button>,
  ];
  
  return (
    <Container maxWidth="md">
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Card
          sx={{
            minWidth: 345,
            height: "30rem",
            marginTop: "4rem",
            display: " flex",
            flexFlow: " column nowrap",
            alignItems: " center",
            justifyContent: " center",
          }}
        >
          <CardContent>
            <Typography variant="h6">{data[counter].question}</Typography>
            <ButtonGroup orientation="vertical" sx={{ display: " flex" }}>
              {buttons.sort(()=> 0.5 - Math.random())}
            </ButtonGroup>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                setupCounter((counter) =>
                  counter < data.length ? counter + 1 : counter
                );
                setupButtonColor(false);
              }}
              disabled={counter === data.length - 1}
            >
              Next
            </Button>
            <Button
              disabled={counter !== data.length - 1}
              onClick={() => nav("/results")}
            >
              Results
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default QuestionCard;
