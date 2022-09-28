var  generalBtn = document.getElementById('general-btn');
var  totalBtn = document.getElementById('total-btn');

generalBtn.addEventListener("click", function(evt) {
    console.log(evt.target);
    generalBtn.classList.toggle('inbox__switcher--button--activ');
    totalBtn.classList.toggle('inbox__switcher--button--activ');
});

totalBtn.addEventListener("click", function(evt) {
    console.log(evt.target);
    generalBtn.classList.toggle('inbox__switcher--button--activ');
    totalBtn.classList.toggle('inbox__switcher--button--activ');
});