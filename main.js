function imgSlider(imgSrc){
  
  document.querySelector('.pepsi').src = `images/${imgSrc}.png` 
  
  let color = "#0062be"
  
  if(imgSrc === 'pepsi001'){
    color = "#0062be"
  }else if(imgSrc === 'pepsi002'){
    color = "#e60c2c"
  }else if(imgSrc === 'pepsi003'){
    color = "#1e1e1e"
  }

  changeBgColor(color)
}

function changeBgColor(color){
  const sec = document.querySelector('.sec')
  sec.style.background = color
}

function menuToggle(){
  const toggleMenu = document.querySelector('.toggleMenu')
  const navigation = document.querySelector('.navigation')
  
  toggleMenu.classList.toggle('active')
  navigation.classList.toggle('active')


}