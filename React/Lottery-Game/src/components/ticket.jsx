export default function Ticket({ ticketNum , slNo}) {
    let ticketStyle = {
        border: '2px',
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        innerWidth: 'max-content',
        backgroundColor: 'yellow',
        color: 'black',
    }
    return (
        <div style={ticketStyle}>
            <p>Ticket Slno: {slNo}</p>
            <h2>All the best</h2>
            <h3>Luck can only get you so far</h3>
            <h4>Your ticket number is:</h4>
            <h1>{ticketNum}</h1>
        </div>
    )
}