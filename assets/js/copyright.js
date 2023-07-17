const date = new Date()
const copyright = document.getElementById('copyright')

function displayCopyright() {

    copyright.innerHTML = "&copy; " + date.getFullYear() + " Sellestiall Design. All Rights Reserved" + "<div class='mx-3'>/</div><a href='resume.html'>RESUME</a><div class='mx-3'>/</div><a href='index.html'>PROJECTS</a><div class='mx-3'>/</div><a href='resume.html#contact'>CONTACT</a><div class='mx-3'>/</div><a href='#'>BACK TO TOP</a>"
}

displayCopyright()