
function calcAge() {
    const birthDay = new Date('June 7 2005');
    let today = new Date();
    let age = today.getFullYear() - birthDay.getFullYear();
    const htmlAge = document.querySelector('.age');

    console.log('birthday', birthDay.getDate(), birthDay.getMonth(), birthDay.getFullYear(),
        'today', today.getDate(), today.getMonth(), today.getFullYear());

    if (today.getMonth() >= birthDay.getMonth() && today.getDate() >= birthDay.getDate()) {
        htmlAge.textContent = age;
    } else {
        htmlAge.textContent = age - 1;
    }
}


function closeWindow() {
    const closeEl = document.querySelector('.close');

    // when you click on the element it wil redirect to the index
    closeEl.addEventListener('click', () => {
        window.location.replace("../index.html")
    })


}


closeWindow();
calcAge();