'use client'
import { useQuery, gql } from '@apollo/client';
import { Grid } from '@mui/material';
import { ReactElement } from 'react';
import Character from './character';

const GET_CHARACTERS = gql`{
  characters {
    id
    name
    species
    image
  }
}`;

export default function Characters() : ReactElement {

  const {loading, data} = useQuery(GET_CHARACTERS);

  if(loading) return <div>loading...</div>

  return (
    <Grid container spacing={2} m={2}>
      {data && data.characters.map((charachter : any) => {
        return ( 
        <Grid item xs={6} md={4} lg={3} >
          <Character name={charachter.name} imageUrl={charachter.image} />
        </Grid>
        );
      })}
    </Grid>
  );
}