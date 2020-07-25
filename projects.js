const projects = [ { 
  title: "Cool Project", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/Jonathon22/product-cards", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
 } ];

const printToDom = (divId, textToPrint ) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint; 
}

const createProjectCards = () => {

  let domString = '';

for (let i=0; i < projects.length; i++) {
domString += `<div class="project">`
  domString += `<div class="project-title">${projects[i].title}</div>`
  domString += `<div class="project-screenshot">${projects[i].screenshot}</div>`
  domString += `<div class="project-description">${projects[i].description}</div>`
  domString += `<div class="project-technologiesUsed">${projects[i].technologiesUsed}</div>`
  domString += `<div class="project-available">${projects[i].available}</div>`
  domString += `<div class="project-url">${projects[i].url}</div>`
  domString += `<div class="project-githubUrl">${projects[i].githubUrl}</div>`
domString += `</div>`
}

printToDom('projectsPage', domString);



}

createProjectCards();