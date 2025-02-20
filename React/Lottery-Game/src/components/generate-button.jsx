import generateNum from '../controls/generateNum.jsx';

export default function GenerateButton({ onGenerate }) {
    const handleClick = () => {
        const ticketNum = generateNum();
        onGenerate({ number: ticketNum });
    }

    return (
        <button onClick={handleClick}>Generate Ticket</button>
    );
}
