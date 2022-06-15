import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { KvizContext } from "./context";
import {useNavigate} from 'react-router-dom'

const ResultsCard = ({}) => {
  const { result, data , setupResult} = useContext(KvizContext);
  let nav = useNavigate()

  const restartgame = () => {
    
    nav('/simple-quiz')
    window.location.reload()
    setupResult(0)
  }
  return (
    <Container maxWidth='md'>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
        <Card sx={{minWidth: 345, height: '30rem', marginTop: '4rem', display: ' flex', flexFlow: ' column nowrap', alignItems: ' center', justifyContent: ' center'}}>
          <CardContent>
            <Typography variant='h4'>
              Result : {result} / {data.length}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' color='success' onClick={() => restartgame()}>Restart</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default ResultsCard;
