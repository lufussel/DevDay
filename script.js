// Wait for the DOM to be fully loaded before running any code
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const factBox = document.getElementById('fact-box');
    const generateBtn = document.getElementById('generate-btn');
    
    // Store the facts array
    let facts = [];
    
    // Initialize click counter
    let clickCount = 0;
    
    // Create a counter element to display the number of clicks
    const clickCounter = document.createElement('div');
    clickCounter.id = 'click-counter';
    clickCounter.className = 'click-counter';
    clickCounter.innerText = 'Facts generated: 0';
    document.querySelector('.container').appendChild(clickCounter);
    
    // Load facts from the JSON file
    loadFacts();
    
    // Add click event listener to the button
    generateBtn.addEventListener('click', generateFact);
    
    // Function to load facts from JSON file
    function loadFacts() {
        fetch('facts.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                facts = data;
                factBox.innerText = 'Click the button to get a fact!';
                generateBtn.disabled = false;
            })
            .catch(error => {
                console.error('Error loading facts:', error);
                factBox.innerText = 'Error loading facts. Please refresh the page.';
            });
    }
    
    // Function to generate and display a random fact
    function generateFact() {
        // Increment and display the click count
        clickCount++;
        clickCounter.innerText = `Facts generated: ${clickCount}`;
        
        if (facts.length > 0) {
            const randomIndex = Math.floor(Math.random() * facts.length);
            factBox.innerText = facts[randomIndex];
        } else {
            factBox.innerText = 'No facts available. Please refresh the page.';
            // Try loading facts again
            loadFacts();
        }
    }
});