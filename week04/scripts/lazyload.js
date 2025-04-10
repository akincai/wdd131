const year = document.querySelector("#currentYear")
const modified = document.querySelector("#lastModified")

//initialize Date object
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
modified.innerHTML = `Last Modification: ${document.lastModified}`;
