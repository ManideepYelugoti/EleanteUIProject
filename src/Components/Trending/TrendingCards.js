import { Box } from '@mui/material';
import React from 'react';
import { cardData } from './cardData';
import Card from './Card';


export default function TrendingCards() {
  return (
    <Box display={'flex'} flexWrap={'wrap'} gap={12}  justifyContent={'center'}>
       {
        cardData.map((card)=><Card key={card.id} title={card.title} imgSrc={card.imgSrc} subtitle={card.subtitle} />)
       }
    </Box>
  )
}
