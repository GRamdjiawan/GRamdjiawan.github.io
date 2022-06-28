
function calcAge() {
    const birthDay = new Date('June 7 2005');
    let today = new Date();
    let age = today.getFullYear() - birthDay.getFullYear();
    const htmlAge = document.querySelector('.age');

    if (today.getMonth() >= birthDay.getMonth() && today.getDate() >= birthDay.getDate()) {
        htmlAge.textContent = age;
    } else {
        htmlAge.textContent = age - 1;
    }
}

function clickProject(projects) {
    const projectBtn = document.querySelectorAll('.project-btn')

    projectBtn.forEach((e, i) => {
        e.addEventListener('click', () => {
            window.location.replace(`./html/projects/${projects[i].html}`)
        });
    });
}

async function carousel() {
    const url = './json/projects.json';
    const getJSON = await fetch(url);
    const projects = await getJSON.json();
    const backButton = document.querySelector('.back');
    const nextButton = document.querySelector('.next');
    const projectDOM = document.querySelector('.projects-content');
    let index = 0;
    for (let i = 0; i < projects.length; i++) {
        projectDOM.innerHTML += `
        <div class="projects  justify-content-center align-items-center flex-column hide" style="
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url('./img/projects/${projects[i].img}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        background-attachment: scroll;">
            <h4>${projects[i].title}</h4>
            <button class="btn project-btn">
            <i class="bi bi-plus-circle-fill fs-4" style="color: white;"></i>
            </button>
            <i class="bi bi-arrow-up fs-4 arrow" style="color: white;"></i>
        </div>`
    };

    let project = document.querySelectorAll('.projects');
    backButton.addEventListener('click', () => {
        index--;
        project[index + 1].classList.remove('active');
        // if the index is lower than the 0, the index resets to the length of the array
        if (index < 0) {
            index = projects.length - 1;
            console.log(index);
        }
        project[index].classList.add('active');
    });

    nextButton.addEventListener('click', () => {
        index++;
        project[index - 1].classList.remove('active');
        // if the index is higher than the length of the array, the index resets to 0
        if (index >= projects.length) {
            index = 0;
        }
        project[index].classList.add('active');
    });

    project[index].classList.add('active');
    // this callback gives the html of the page that is going to be visited
    clickProject(projects);
}

calcAge();
carousel();
