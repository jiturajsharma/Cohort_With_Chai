const images = [
    {
      url: 'https://imgs.search.brave.com/keY0jIk2dQp5ivPSU7bU-dcVbHDtJNAPwzgLc_lYDGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b2RpbmctbWFuXzEw/OTgtMTgwODQuanBn/P3NlbXQ9YWlzX2h5/YnJpZA',
    },
    {
      url: 'https://imgs.search.brave.com/4DE0wyFXh9fWaDPz8GysiIbgRt5tYKcY69VLyu9gPPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjEw/ODU1MzE2L3Bob3Rv/L2hhY2tlci1zcHkt/eW91ci1kYXRhLWZp/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlOcGVsY3lt/WG56R05GZFM2U1lT/TjZDcUpabDRpUFJm/a3JEcGcxbnhYZGs9',
    },
    {
      url: 'https://imgs.search.brave.com/dT57JG_GHJAfYhJEPvbyBXzg7ppuxiUSKq7dxyQIkZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NjQ1OTY0MS9waG90/by9lbGVjdHJvbmlj/LXNwcmVhZHNoZWV0/LW9uLWFuYWx5c3Qt/YXVkaXRvci1jb21w/dXRlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9U3NLNE5a/Q2xxZTdIbkZCdk5D/ekRUVnBpSHVueVJm/Q2FMS2pXcUdtYUli/ST0',
    },
    {
      url: 'https://imgs.search.brave.com/3JcNw1pU8PZZ14FI3b4eZtLOSzS4wP9WXhSPkbigB8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NjIxODY0NS9waG90/by9mZW1hbGUtcHVw/aWwtYnVpbGRpbmct/cm9ib3RpYy1jYXIt/aW4tc2NpZW5jZS1s/ZXNzb24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVMzVnQ2/N1MyelAxa3ZxQkdS/LWd2ZUdLM19BdVpf/enRWemM2cko1U2l4/bkk9',
    },
    {
    url: 'https://imgs.search.brave.com/SBExnvJrssudLZWT2QZ_A4B5ocq-KqJTHAg70RurM00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA4/OTQ4OTM5NC9waG90/by9mcmVlbGFuY2Ut/cHJvZ3JhbW1lci13/b3JraW5nLW9uLWNv/bXB1dGVyLWZyb20t/aG9tZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9R0hWWFZE/cFlRSFJFV1ZfMVBQ/T1pFZmFOT1BLcnZR/QzNtS1JzVU9la0ds/UT0'
    }
];

let counter = 0
const carouselTrack = document.getElementById('carouselTrack')
const nextButton = document.getElementById('nextButton')
const prevButton = document.getElementById('prevButton')
const carouselNav = document.getElementById('carouselNav')
const autoPlayButton = document.getElementById('autoPlayButton')
const timerDisplay = document.getElementById('timerDisplay')
let autoPlayInterval;
let updateDisplayTimer;
let time;


document.addEventListener('DOMContentLoaded', () => { 
    carouselTrack.innerHTML = `
    <img src='${images[0].url}' class="carousel-slide">
    <div class="carousel-caption">${images[0].caption}</div>
    `
    images.forEach((_, i) => {
        const carouselIndicator = document.createElement('div')
        carouselIndicator.className = 'carousel-indicator'
        carouselIndicator.setAttribute('id', `${i}`)
        carouselNav.appendChild(carouselIndicator)
        carouselIndicator.addEventListener('click', () => {
            const id = carouselIndicator.getAttribute('id')
            carouselTrack.innerHTML = `
            <img src='${images[id].url}' class="carousel-slide">
            <div class="carousel-caption">${images[id].caption}</div>
            `
            images.forEach((_, i) => {
                const ele = document.getElementById(`${i}`)
                ele.classList.remove('active')
            })
            counter = id
            carouselIndicator.classList.add('active')
        })
    })
    const firstIndicator = document.getElementById('0') 
    firstIndicator.classList.add('active')
})


function changeNextSlide() {
    const prevIndicator = document.getElementById(`${counter}`)
    prevIndicator.classList.remove('active')
    if(counter == images.length - 1){
        carouselTrack.innerHTML = `
        <img src='${images[0].url}' class="carousel-slide">
        <div class="carousel-caption">${images[0].caption}</div>
        `
        counter = 0
        const firstIndicator = document.getElementById('0')
        firstIndicator.classList.add('active')
    }
    else{
        ++counter
        carouselTrack.innerHTML = `
        <img src='${images[counter].url}' class="carousel-slide">
        <div class="carousel-caption">${images[counter].caption}</div>
        `
        const indicator = document.getElementById(`${counter}`)
        indicator.classList.add('active')
    }
}

nextButton.addEventListener('click', changeNextSlide)

prevButton.addEventListener('click', () => {
    const prevIndicator = document.getElementById(`${counter}`)
    prevIndicator.classList.remove('active')
    if(counter == 0){
        console.log(typeof images.length)
        carouselTrack.innerHTML = `
        <img src='${images[Number(images.length) - 1].url}' class="carousel-slide">
        <div class="carousel-caption">${images[Number(images.length) - 1].caption}</div>
        `
        counter = images.length - 1
        const lastIndicator = document.getElementById(`${images.length - 1}`)
        lastIndicator.classList.add('active')
    }
    else{
        --counter
        carouselTrack.innerHTML = `
        <img src='${images[counter].url}' class="carousel-slide">
        <div class="carousel-caption">${images[counter].caption}</div>
        `
        const indicator = document.getElementById(`${counter}`)
        indicator.classList.add('active')
    }
})



autoPlayButton.addEventListener('click', () => {
    time = 5
    if(autoPlayButton.innerText == 'Start Auto Play'){
        updateDisplayTimer = setInterval(() => {
            time--
            if(time === 0) {
                time = 5;
            }
            timerDisplay.innerText = `Slide will upadte in ${time}s`
            }, 1000)
       autoPlayInterval =  setInterval(changeNextSlide, 5 * 1000)
        autoPlayButton.innerText = 'Stop Auto Play'
    } else{
        clearInterval(autoPlayInterval)
        clearInterval(updateDisplayTimer)
        timerDisplay.innerText = ''
        autoPlayButton.innerText = 'Start Auto Play';
    }
})

