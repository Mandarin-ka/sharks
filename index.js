document.querySelector('.ticket__button').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('.ticket').classList.add('active')
  document.querySelector('html').classList.add('active')
  document.querySelector('.backgr').classList.add('active')
})

document.querySelector('.cross').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('.ticket').classList.remove('active')
  document.querySelector('html').classList.remove('active')
  document.querySelector('.backgr').classList.remove('active')
})

document.querySelector('.ticket__button__t').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('.ticket').classList.remove('active')
  document.querySelector('html').classList.remove('active')
  document.querySelector('.backgr').classList.remove('active')
})

document.querySelector('.slider__right').addEventListener('click', (e)=>{
  e.preventDefault();
  points = document.querySelectorAll('.slider__controller__point')
  let cur;
  for(let i=0;i<points.length; i++){
    if(points[i].classList.contains('active')){
      points[i].classList.remove('active');
      if(i === 3){
        cur=i+1;
        points[i].classList.add('active');
        break;
      }
      points[i+1].classList.add('active');
      cur=i+1;
      break;
    }
  }

  if(cur<4)
  document.querySelectorAll('.slider__img').forEach(e =>{
    e.style.transform = `translate(${-(cur)*360}px)`;
  })
})

document.querySelector('.slider__left').addEventListener('click', (e)=>{
  e.preventDefault();
  points = document.querySelectorAll('.slider__controller__point')
  for(let i=0;i<points.length; i++){
    if(points[i].classList.contains('active')){
      points[i].classList.remove('active');
      if(i === 0){
        cur=0;
        points[i].classList.add('active');
        break;
      }
      if(i > 0){
        points[i-1].classList.add('active');
        cur=i-1;
      }
      break;
    }
  }

  if(cur>=0)
  document.querySelectorAll('.slider__img').forEach(e =>{
    e.style.transform = `translate(${-cur*360}px)`;
  })
})