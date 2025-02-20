import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GenerateButton from './components/generate-button'
import Ticket from './components/ticket'
import WinnerButton from './components/winner-button'

function App() {
  const [tickets, setTickets] = useState([]);

  const handleGenerateTicket = (newTicket) => {
    setTickets([...tickets, newTicket]);
  }

  const match=(num)=>{
    let sum = 0;
    while(num!=0){
      sum+=num%10;
      num=Math.floor(num/10);
    }
    if(sum == 15) return true;
    else return false;
  }
  const pickWinner = (tickets) => {
    const validTickets = tickets.filter(ticket => match(ticket.number));
    if(validTickets.length === 0){
      alert('No winner found');
    }
    setTickets(validTickets);
  }

  return (
    <>
      <div className="App">
        <GenerateButton onGenerate={handleGenerateTicket} />  <WinnerButton pickWinner={()=>pickWinner(tickets)}/>
        <div className="tickets-container">
          
          {
          tickets.length == 0 ? <h1>No winners detected</h1> : ( tickets.map((ticket, index) => (
            <Ticket key={index} ticketNum={ticket.number} slNo={index + 1} />
          )
        ))
          };
        </div>
      </div>
    </>
  )
}

export default App
