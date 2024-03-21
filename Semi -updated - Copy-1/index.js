function showContent(contentId){
    //hide all content sections
    var allContent=document.getElementsByClassName('content')
    for(var i=0;i<allContent.length;i++){
        allContent[i].style.display='none'
    }
    var element = document.getElementById("open");
    element.classList.remove("display");
    //show the selected content section
    document.getElementById(contentId).style.display='block'
    var emailAddress = 'info@semicondynamics.org';
        var encodedEmail = '';
        for (var i = 0; i < emailAddress.length; i++) {
            encodedEmail += '&#' + emailAddress.charCodeAt(i) + ';';
        }

        // Set the encoded email as the innerHTML of the span
        document.getElementById('email').innerHTML = '<a href="mailto:' + emailAddress + '">' + encodedEmail + '</a>';
        document.getElementById('aboutLink').addEventListener('click', function (event) {
            // Prevent the default behavior of the link click 
            event.preventDefault();

            // Scroll up to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Optional: Add smooth scrolling effect
            });
        });
       

        
}
function myFunction() {
    var element = document.getElementById("open");
    element.classList.toggle("display");
 }
 document.addEventListener('DOMContentLoaded', function () {
    // Function to hide all content sections
    function hideAllContent() {
        var allContent = document.getElementsByClassName('content');
        for (var i = 0; i < allContent.length; i++) {
            allContent[i].style.display = 'none';
        }
    }

    // Function to show the selected content section
    function showContent(contentId) {
        // Hide all content sections
        hideAllContent();

        // Show the selected content section
        var element = document.getElementById("open");
        element.classList.remove("display");
        document.getElementById(contentId).style.display = 'block';

        // Update the current section in session storage
        sessionStorage.setItem('currentSection', contentId);
    }

    // Function to handle popstate event
    function handlePopState(event) {
        const state = event.state;

        if (state && state.section) {
            // Show the content for the popped state
            showContent(state.section);
        }
    }

    // Add popstate event listener
    window.addEventListener('popstate', handlePopState);

    // Retrieve the last visited section from session storage
    const lastVisitedSection = sessionStorage.getItem('currentSection');

    // Initial content display based on the last visited section or default to 'about'
    showContent(lastVisitedSection || 'about');

    // Add click event listeners for navigation links
    var navigationLinks = document.querySelectorAll('nav a');
    navigationLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
              // Check if the link is for the "Events" section
              if (link.id === 'eventsLink') {
                return; // Let the default behavior take place (navigate to events.html)
            }
            event.preventDefault();

            // Get the section from the href attribute
            var section = this.getAttribute('href').substring(1);

            // Update the URL without triggering a page reload
            history.pushState({ section: section }, null, `#${section}`);

            // Show the content for the selected section
            showContent(section);
        });
    });
});


