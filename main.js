const nav = document.getElementsByTagName('nav')[0];
const menuIcon=document.getElementsByClassName('fa-bars')[0]

menuIcon.addEventListener('click', abrirNav);

function abrirNav(){
if(nav.classList.contains('nav')){
	nav.classList.remove('nav');
	nav.classList.add('short')
}
else{
	nav.classList.remove('short')
	nav.classList.add('nav');
}
}