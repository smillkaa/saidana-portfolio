const date = new Date()
const copyright = document.getElementById('copyright')

function displayCopyright() {

    copyright.innerHTML = "&copy; " + date.getFullYear() + " Sellestiall Design. All Rights Reserved"
}

displayCopyright()