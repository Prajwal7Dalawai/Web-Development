export default function WinnerButton({pickWinner}) {
    const assist = () => {
        pickWinner();
    }
    return (
        <button onClick={assist}>Pick the Winner/s</button>
    );
}