import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function Description() {
    const nav = useNavigate();
    const navigateToBook=()=>{
        nav('/user/booking')
    }
  return (
    <div>
      
      <p>
      An annual meeting is a scheduled gathering that occurs once a year, bringing together members, stakeholders, or participants associated with a particular organization, company, association, or community. These meetings serve as a crucial platform for various purposes, including reviewing the past year's achievements, discussing future goals, making important decisions, and fostering communication among attendees.

Key elements of an annual meeting often include presentations, reports, and discussions on the organization's financial performance, strategic plans, and overall progress. Shareholders, members, or representatives may have the opportunity to ask questions, provide feedback, and vote on important matters, such as electing board members or approving budgets.

Annual meetings are not limited to corporate entities; they are also common in nonprofit organizations, professional associations, and other groups. These gatherings play a vital role in maintaining transparency, accountability, and engagement within an organization, fostering a sense of community and shared purpose among participants.
    </p>
      <Button varient="contained"onClick={navigateToBook}>Book</Button>
    </div>
  )
}

export default Description
