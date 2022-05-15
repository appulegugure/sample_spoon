// register Element

const nav_menu = document.getElementsByClassName('mobile')[0]




document.getElementsByClassName('header-right-menu')[0].addEventListener('click',()=>{
  console.log('button clik')
  console.log(nav_menu.style['background'])
  if(getComputedStyle(nav_menu).getPropertyValue('transform') === `matrix(1, 0, 0, 1, ${window.innerWidth}, 0)` || 
    getComputedStyle(nav_menu).getPropertyValue('-webkit-transform') === `matrix(1, 0, 0, 1, ${window.innerWidth}, 0)`){
    console.log('hi')
    nav_menu.style['transform'] = 'translateX(0%)'
    four.style['transform'] = 'rotate(-45deg)'
    three.style['transform'] = 'rotate(45deg)'
    two.style['width'] = '0px'
    one.style['width'] = '0px'
  }else if (getComputedStyle(nav_menu).getPropertyValue('transform') === 'matrix(1, 0, 0, 1, 0, 0)' ||
            getComputedStyle(nav_menu).getPropertyValue('-webkit-transform') === 'matrix(1, 0, 0, 1, 0, 0)'){
    console.log('hoi')
    nav_menu.style['transform'] = 'translateX(100%)'
    four.style['transform'] = 'rotate(0deg)'
    three.style['transform'] = 'rotate(0deg)'
    two.style['width'] = '25px'
    one.style['width'] = '25px'
  } else {
    console.log('else')
  }
}
)

// document.getElementsByClassName('header-right-menu')[0].addEventListener('click',function(){
//   console.log('click')
//   nav_menu.classList.toggle('menu-open')
//   nav_menu.classList.toggle('menu-close')
// })


// test
const one = document.querySelectorAll('.menu-btn span#one')[0]
const two = document.querySelectorAll('.menu-btn span#two')[0]
const three = document.querySelectorAll('.menu-btn span#three')[0]
const four = document.querySelectorAll('.menu-btn span#four')[0]

// document.querySelectorAll('.header-right-menu')[0].addEventListener('click',()=>{
//   console.log('click')
//   if (nav_menu.style['transform'] == 'translateX(100%)'){
//     console.log('100%')
//   }else if(nav_menu.style['transform'] == 'translateX(0%)'){
//     console.log('0%')
//   }else{

//   }
  
  
// })


//scroll-animation

// regist target

const scroll_trigger = window.addEventListener('scroll',function(){

  const item1_y_point = document.getElementsByClassName('menu')[0];
  const item1_y_point_niku = document.getElementsByClassName('niku')[0];
  const item2_y_point = document.getElementsByClassName('menu')[1];
  const item2_y_point_niku = document.getElementsByClassName('niku')[1];
  const item3_y_point = document.getElementsByClassName('menu')[2];
  const item3_y_point_niku = document.getElementsByClassName('niku')[2];
  const item4_y_point = document.getElementsByClassName('menu')[3];
  const item4_y_point_niku = document.getElementsByClassName('niku')[3];

  // LOG

  // console.log('window.scrollY',Yy)
  // console.log('window.pageYOddset',window.pageYOffset)
  // console.log('window.innerHeight',window.innerHeight)
  // console.log('item1',item1_y_point.getBoundingClientRect().top)
  // console.log('item2',item2_y_point)
  // console.log('item3',item3_y_point)
  // console.log('item4',item4_y_point)
  // console.log('windows Screen',window.scrollY)

  if (item1_y_point.getBoundingClientRect().top < 100){
    item1_y_point_niku.classList.add('stanpanime')
    console.log('line')
  }
    if (item2_y_point.getBoundingClientRect().top < 100){
    item2_y_point_niku.classList.add('stanpanime')
    console.log('line')
  }
    if (item3_y_point.getBoundingClientRect().top < 100){
    item3_y_point_niku.classList.add('stanpanime')
    console.log('line')
  }
    if (item4_y_point.getBoundingClientRect().top < 100){
    item4_y_point_niku.classList.add('stanpanime')
    console.log('line')
  }

  // if(!eventFlag){
  //   if (Yy > 300) {
  //     item1_y_point.classList.add('stanpanime')
  //     eventFlag = true
  //   }
  // }
  
})


// initial

// window.onbeforeunload = function () { window.scrollTo(0,0);}