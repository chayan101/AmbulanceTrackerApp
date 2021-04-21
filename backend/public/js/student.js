var book = document.getElementById("bookButton");
var socket;

book.addEventListener("click", ()=>{
   socket = io.connect('http://localhost:3000');

   socket.emit("book");
   document.getElementById("ridebooked").classList.remove('d-none');
   document.getElementById("flag1").classList.add('d-none');
});

document.getElementById('home').addEventListener('click', ()=>{
	if(socket){
		socket.close();
		}
});

document.getElementById("booklater").addEventListener("click", ()=>{
	document.getElementById("bookform").classList.remove('d-none');
	document.getElementById("flag0").classList.add('d-none');
});