
document.querySelector('.slider__right').addEventListener('click', (e)=>{
  e.preventDefault();
  points = document.querySelectorAll('.slider__controller__point')
  let cur;
  for(let i=0;i<points.length; i++){
    if(points[i].classList.contains('active')){
      points[i].classList.remove('active');
      if(i + 1 === points.length){
        cur=i+1;
        points[i].classList.add('active');
        break;
      }
      points[i+1].classList.add('active');
      cur=i+1;
      break;
    }
  }

  if(cur<points.length)
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

document.querySelectorAll('.more-info').forEach(e => {
  e.addEventListener('click', t =>{
    t.preventDefault();
    e.parentNode.parentNode.children[3].classList.add('active')
  })
})

document.querySelectorAll('.info__block__item').forEach(e => {
  e.addEventListener('click', t =>{
    t.preventDefault();
    e.classList.remove('active')
  })
})

document.querySelector('.form__button').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.contact__form').classList.add('active')
  document.querySelector('html').style.overflow = 'hidden';
  document.querySelector('.backgr').classList.add('active')
})

document.querySelector('.form__button').addEventListener('click', e =>{
  location.href = './pages/form.html'
})

document.querySelector('.start-screen__button').addEventListener('click', e =>{
  location.href = './index.html#tarifs'
})

document.querySelectorAll('.tarif__button').forEach(e =>{
  e.addEventListener('click', e =>{
    location.href = './pages/form2.html'
  })
})


document.querySelector('.form__submit-button').addEventListener('click', e =>{
  location.href = './ty.html';
  alert('sad');
})

