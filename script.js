let facts = [];

fetch('facts.json')
    .then(response => response.json())
    .then(data => {
        facts = data;
    });

function generateFact() {
    if (facts.length > 0) {
        const randomIndex = Math.floor(Math.random() * facts.length);
        document.getElementById('fact-box').innerText = facts[randomIndex];
    }
}
