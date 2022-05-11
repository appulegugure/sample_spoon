// register Element
nav_menu = document.getElementsByClassName('mobile')[0]

// event
document.getElementsByClassName('close-button')[0].addEventListener('click',()=>{
  console.log('close')
  nav_menu.style['transform'] = 'translateX(100%)'
}
)


document.getElementsByClassName('header-right-menu')[0].addEventListener('click',()=>{
  console.log('open')
  nav_menu.style['transform'] = 'translateX(0%)'
}
)


// test
const one = document.querySelectorAll('.menu-btn span#one')[0]
const two = document.querySelectorAll('.menu-btn span#two')[0]
const three = document.querySelectorAll('.menu-btn span#three')[0]

document.querySelectorAll('.header-right-menu')[0].addEventListener('click',()=>{
  console.log('click')
  if (nav_menu.style['transform'] == 'translateX(100%)'){
    console.log('100%')
  }else if(nav_menu.style['transform'] == 'translateX(0%)'){
    console.log('0%')
  }else{

  }
  
  
})