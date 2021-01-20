const srTop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

srTop.reveal(`.banner-text,
    .title,
    .text,
    .symptoms-title,
    .symptoms-text
`,{
    interval: 100
})


const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: false
});

srBottom.reveal(`.covid-cases,
    .cards-two,
    .prevent`,{
    interval: 100
})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false
});

srLeft.reveal(`.btn-modal,
    .covid-img,
    .cards-one,
    .doctor-woman,
    .risk-image,
    .health-image,
    .fight-covid`,{
    interval: 100
})


const srRigth = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: false
});

srRigth.reveal(`.covid-info,
    .cards-three,
    .list,
    .risk-info,
    .tips,
    .what-is-corona-info`,{
    interval: 100
})
