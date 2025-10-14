// This function contains all the logic for our page.
const initializePiStarPage = () => {
    const nInput = document.getElementById('n-input');
    const kInput = document.getElementById('k-input');
    const resultsContainer = document.getElementById('results-container');
    const errorPopup = document.getElementById('error-popup');

    const calculateGroup = () => {
        resultsContainer.innerHTML = ''; // Clear previous results
        
        const n = parseInt(nInput.value, 10);
        const k = parseInt(kInput.value, 10);

        const isInvalid = isNaN(n) || isNaN(k) || n < 0 || k < 0 || nInput.value.includes('.') || kInput.value.includes('.');

        if (isInvalid) {
            errorPopup.classList.add('visible');
            return;
        }

        errorPopup.classList.remove('visible');
        let resultsFound = false;

        piStarRules.forEach(rule => {
            if (rule.condition(n, k)) {
                resultsFound = true;
                const card = document.createElement('div');
                card.className = 'result-card';
                card.innerHTML = `
                    <p class="result-text">${rule.result}</p>
                    <p class="reference"><strong>Reference:</strong> ${rule.reference}</p>
                `;
                resultsContainer.appendChild(card);
            }
        });

        if (!resultsFound) {
            resultsContainer.innerHTML = '<p class="no-results">No specific results found for these values in the database.</p>';
        }

        // Now that new content is on the page, we ask MathJax to typeset it.
        // We know MathJax is ready because it is the one calling this entire function.
        MathJax.typesetPromise([resultsContainer]);
    };

    // Attach the event listeners
    nInput.addEventListener('input', calculateGroup);
    kInput.addEventListener('input', calculateGroup);
    
    // Run the initial calculation to show the default card
    calculateGroup();
};

// --- THIS IS THE FINAL, CORRECT METHOD ---
// We tell MathJax: "When you are ready, please run our initializePiStarPage function."
// This completely avoids any race conditions.
MathJax.startup = {
    ready: () => {
        console.log('MathJax is ready, executing page logic.');
        MathJax.startup.defaultReady();
        initializePiStarPage();
    }
};