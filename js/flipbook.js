$(function() {
    const imageCount = 12;
    let currentPage = 1;
    
    // Build the gallery
    let galleryHTML = '';
    for (let i = 1; i <= imageCount; i++) {
        const display = i === 1 ? 'block' : 'none';
        galleryHTML += `<div class="gallery-page" style="display: ${display}"><img src="pages/page-${i}.jpg" alt="Page ${i}"></div>`;
    }
    
    $('#flipbook').html(galleryHTML);
    $('#totalPages').text(imageCount);
    
    // Update page display
    function showPage(page) {
        if (page < 1) page = 1;
        if (page > imageCount) page = imageCount;
        
        $('.gallery-page').hide();
        $('.gallery-page').eq(page - 1).show();
        
        $('#pageNumber').html(`Page ${page} of <span id="totalPages">${imageCount}</span>`);
        currentPage = page;
    }
    
    // Button controls
    $('#prevBtn').click(function() {
        showPage(currentPage - 1);
    });
    
    $('#nextBtn').click(function() {
        showPage(currentPage + 1);
    });
    
    // Keyboard controls
    $(document).keydown(function(e) {
        if (e.keyCode == 37) showPage(currentPage - 1); // Left arrow
        if (e.keyCode == 39) showPage(currentPage + 1); // Right arrow
    });
});
