import React from 'react'; 
import { 
    Grid,
    GridItem,
    chakra
 } from '@chakra-ui/react';
 import {
    CalendarGrid, 
    CalendarBody
 } from "react-hook-calendar";

function Calendar(): JSX.Element {
    const today = new Date(); 
    const ChakraCalendarGrid = chakra(CalendarGrid);

  return  <Grid
    templateAreas={
        `" header header header header header header header header"
        " box date0 date1 date2 date3 date4 date5 date6"
        "timegrid day0 day1 day2 day3 day4 day5 day6"` 
    }
    gridTemplateRows={'50px 50px 3fr'}
    gridAutoColumns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr'}
    h='600px'
    gap='1'
    color='blue.500'
    flexGrow={1}
  >
    <GridItem color='gray.50' bg='blue.500' area={'header'}>
        Calender 
    </GridItem>
    <GridItem bg='gray.50' area={'date0'}>
        {new Intl.DateTimeFormat("en-US", {
            weekday: "short"
        }).format(today)}
    </GridItem>
    <GridItem bg='gray.50' area={'date1'}>
        {new Intl.DateTimeFormat("en-US", {
            weekday: "short"
        }).format(new Date().setDate(today.getDate()+1))}
    </GridItem>
    <GridItem bg='gray.50' area={'date2'}>
        {new Intl.DateTimeFormat("en-US", {
            weekday: "short"
        }).format(new Date().setDate(today.getDate()+2))}
    </GridItem>
    <GridItem bg='gray.50' area={'date3'}>
        {new Intl.DateTimeFormat("en-US", {
            weekday: "short"
        }).format(new Date().setDate(today.getDate()+3))}
    </GridItem>
    <GridItem bg='gray.50' area={'date4'}>
        {new Intl.DateTimeFormat("en-US", {
            weekday: "short"
        }).format(new Date().setDate(today.getDate()+4))}
    </GridItem>
    <GridItem bg='gray.50' area={'date5'}>
        {new Intl.DateTimeFormat("en-US", {
            weekday: "short"
        }).format(new Date().setDate(today.getDate()+5))}
    </GridItem>
    <GridItem bg='gray.50' area={'date6'}>
        {new Intl.DateTimeFormat("en-US", {
            weekday: "short"
        }).format(new Date().setDate(today.getDate()+6))}
    </GridItem>
    <GridItem area={'timegrid'} >
        <ChakraCalendarGrid     
            length='1 hour'
            borderTopWidth="1px"
            borderLeftWidth="1px"
            borderColor="gray.100"
        />
    </GridItem>
  </Grid>
}

export default Calendar; 