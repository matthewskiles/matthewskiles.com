const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
	nav.classList.toggle('active');
	hamburger.classList.toggle('active');

	// Prevent body scroll when menu is open
	if (nav.classList.contains('active')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
	if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
		nav.classList.remove('active');
		hamburger.classList.remove('active');
		document.body.style.overflow = '';
	}
});

// Set copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Email encoded in Base64
var encodedEmail = "aGV5QG1hdHRoZXdza2lsZXMuY29t";
var email = atob(encodedEmail);
var subject = "Design Project Inquiry";

// Apply to all elements with class "email-locket"
document.addEventListener('DOMContentLoaded', function() {
	var links = document.querySelectorAll('.email-locket');
	
	links.forEach(function(link) {
		link.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);
	});
});