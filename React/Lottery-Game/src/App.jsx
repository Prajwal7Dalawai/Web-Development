import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GenerateButton from './components/generate-button'
import Ticket from './components/ticket'
import WinnerButton from './components/winner-button'

function App() {
  const [tickets, setTickets] = useState([])

  const handleGenerateTicket = (newTicket) => {
    setTickets([...tickets, newTicket]);
    console.log(`Tickets: ${tickets}`);
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
    console.log("Picking the winner/s");
    let winners = [];
    tickets.forEach(ticket => {
      if(match(ticket.number)){
        winners.push(ticket.number);
      }
      if(winners.length == 0){
        console.log("No winners");
      }
      else console.log(`Winners: ${winners}`);
      tickets.filter((ticket) => !winners.includes(ticket.number));
    });
  }

  return (
    <>
      <div className="App">
        <GenerateButton onGenerate={handleGenerateTicket} />  <WinnerButton pickWinner={()=>pickWinner(tickets)}/>
        <div className="tickets-container">
          {tickets.map((ticket, index) => (
            <Ticket key={index} ticketNum={ticket.number} slNo={index + 1} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
