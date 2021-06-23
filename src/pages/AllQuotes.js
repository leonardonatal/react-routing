import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Leo', text: 'Learning react is fun'},
    { id: 'q2', author: 'Natal', text: 'Learning Angular is fun'},
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuotes;