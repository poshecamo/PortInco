document.getElementById('external-link-button').addEventListener('click', function() {
    window.open('https://www.instagram.com/apollynary/', '_blank');
});


document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = document.querySelectorAll(".blog-post");

    blogPosts.forEach(post => {
        const summary = post.querySelector(".blog-summary");
        
        summary.addEventListener("click", () => {
            post.classList.toggle("active");
        });
    });
});
