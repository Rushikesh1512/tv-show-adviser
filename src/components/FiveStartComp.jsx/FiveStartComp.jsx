import React from 'react'
import {StarFill,StarHalf,Star as Starempt} from 'react-bootstrap-icons'
export default function FiveStartComp({rating}) {
  const starList=[];

  const starfillCount=Math.floor(rating)
    
  const hasHalfstar=rating-parseInt(rating)>=0.5;

  const emptystar=5-starfillCount-(hasHalfstar?1:0);


  for(let i=1;i<=starfillCount;i++){

    starList.push(<StarFill/>);
  }
  
  if(hasHalfstar){

    starList.push(<StarHalf/>);
  }

  
  for(let i=1;i<=emptystar;i++){

    starList.push(<Starempt/>);
  }
  
  
  return (
    <div>
        {starList}
    </div>
  )
}
