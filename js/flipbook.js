$(function() {
    // Get the total number of images
    const imageCount = 12; // CHANGE THIS to match your page count!
    
    // Build the flipbook HTML
    let flipbookHTML = '';
    for (let i = 1; i <= imageCount; i++) {
        flipbookHTML += `<div class="page"><img src="pages/page-${i}.jpg" alt="Page ${i}"></div>`;
    }
    
    $('#flipbook').html(flipbookHTML);
    
    // Initialize the flipbook
    $('#flipbook').turn({
        width: 900,
        height: 600,
        autoCenter: true,
        display: 'double',
        acceleration: true,
        gradients: true,
        elevation: 50,
        when: {
            turned: function(e, page) {
                updatePageNumber(page);
            }
        }
    });
    
    // Update page counter
    function updatePageNumber(page) {
        $('#pageNumber').html(`Pages ${page}-${page + 1} of <span id="totalPages">${imageCount}</span>`);
    }
    
    updatePageNumber(1);
    
    // Button controls
    $('#prevBtn').click(function() {
        $('#flipbook').turn('previous');
    });