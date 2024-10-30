const quotes = [
    { quote: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" }
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = `"${quotes[randomIndex].quote}"`;
    document.getElementById("author").innerText = `- ${quotes[randomIndex].author}`;
}
