const nextBtn = document.getElementById('nextPicture');
const prevBtn = document.getElementById('prevPicture');
const liArray = document.querySelectorAll('.slider-item');

let currentIndex = 0;
liArray[currentIndex].style.display = 'block';


nextBtn.addEventListener('click', function () {
    if (currentIndex === liArray.length - 1){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    for (let i = 0; i < liArray.length; i++) {
        liArray[i].style.display = 'none';
    }
    liArray[currentIndex].style.display = 'block';
    liArray[currentIndex].style.transition = "transform .5s ease-in-out";
});
prevBtn.addEventListener('click', function () {
    if (currentIndex === 0){
        currentIndex = liArray.length -1;
    } else {
        currentIndex--;
    }
    for (let i = 0; i < liArray.length; i++) {
        liArray[i].style.display = 'none';
    }
    liArray[currentIndex].style.display = 'block';
});
