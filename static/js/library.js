document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('pdf-grid');

    const pdfIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
            <path d="M8.267 14.68c-.184 0-.308.018-.372.036v-1.65c.064-.018.188-.036.372-.036.459 0 .817.202.947.615a.86.86 0 01-.012.66c-.107.252-.336.396-.935.396zm.012 1.512c.799 0 1.364-.336 1.633-.996.27-.66.073-1.416-.588-1.872-.66-.456-1.56-.696-2.58-.696H6v5.22h2.279v-1.656zm-2.279-3.936h1.56c1.332 0 2.292.432 2.808 1.224.516.792.66 1.944.36 3.06-.288 1.116-1.008 1.728-2.148 1.728H6v-6.012zm7.14.78c.252 0 .432.126.54.378.108.252.09.558-.054.792-.144.234-.372.351-.684.351-.301 0-.52-.117-.66-.351-.144-.234-.156-.54-.054-.792.102-.252.282-.378.534-.378zm0 1.224c.48 0 .84.198 1.08.594.24.396.24.9.012 1.488-.228.588-.636.882-1.224.882-.588 0-.996-.294-1.224-.882-.228-.588-.228-1.092-.012-1.488.24-.396.6-.594 1.08-.594zm1.884 2.808c.612.564 1.008 1.332 1.164 2.292.156.96-.06 1.884-.636 2.592-.576.708-1.464 1.092-2.628 1.092-.996 0-1.812-.276-2.424-.816-.624-.54-1.02-1.32-1.188-2.34-.156-1.008.06-1.956.636-2.652.576-.696 1.452-1.08 2.616-1.08.972 0 1.764.288 2.364.816zM2 2.5A2.5 2.5 0 014.5 0h8.586a1.5 1.5 0 011.06.44l4.415 4.414A1.5 1.5 0 0119 5.914V21.5a2.5 2.5 0 01-2.5 2.5h-12A2.5 2.5 0 012 21.5v-19zM4.5 1a1.5 1.5 0 00-1.5 1.5v19a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5V6.5h-5a1.5 1.5 0 01-1.5-1.5v-5h-7z"/>
        </svg>
    `;
    
    if (grid && typeof libraryData !== 'undefined') {
        grid.innerHTML = ''; // Clear the "Loading..." message
        libraryData.forEach(paper => {
            const card = document.createElement('a');
            
            // The link is now used directly from the data file.
            card.href = paper.url;
            
            card.className = 'pdf-card';
            card.target = '_blank';

            card.innerHTML = `
                <h3>${paper.title}</h3>
                <p class="author-info">${paper.author} (${paper.year})</p>
                ${pdfIcon}
            `;
            grid.appendChild(card);
        });
    } else {
        grid.innerHTML = '<p>Could not load library data.</p>';
    }
});