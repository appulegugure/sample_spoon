// document.addEventListener('DOMContentLoaded',(e)=>{
//     console.log('DOMContentLoaded')
//     window.scrollTo(0,document.documentElement.scrollHeight);    
//     console.log('fini')
// })

window.onbeforeunload = function () { window.scrollTo(0,-document.documentElement.scrollHeight);}