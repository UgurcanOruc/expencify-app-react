
// OBJECT DESTRUCTURING
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Haliday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Anonymous' } = book.publisher

console.log(publisherName);


// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;
