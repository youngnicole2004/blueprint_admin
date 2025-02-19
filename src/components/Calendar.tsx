import React from 'react'; 
import { 
    Grid,
    GridItem
 } from '@chakra-ui/react';

function Calendar(): JSX.Element {
  return  <Grid
    templateAreas={
        `"header header header header header header header"
        "date0 date1 date2 date3 date4 date5 date6"` 
    }
    gridTemplateRows={'50px 50px 3fr'}
    gridAutoColumns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr'}
    h='600px'
    gap='1'
    color='blue.500'
  >
    <GridItem color='gray.50' bg='blue.500' area={'header'}>
        Calender 
    </GridItem>
    <GridItem bg='gray.50' area={'date0'}>
        Sunday
    </GridItem>
    <GridItem bg='gray.50' area={'date1'}>
        Monday
    </GridItem>
    <GridItem bg='gray.50' area={'date2'}>
        Tuesday
    </GridItem>
    <GridItem bg='gray.50' area={'date3'}>
        Wednesday
    </GridItem>
    <GridItem bg='gray.50' area={'date4'}>
        Thursday
    </GridItem>
    <GridItem bg='gray.50' area={'date5'}>
        Friday
    </GridItem>
    <GridItem bg='gray.50' area={'date6'}>
        Saturday
    </GridItem>
  </Grid>
}

export default Calendar; 