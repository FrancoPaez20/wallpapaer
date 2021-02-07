// Notas para Franco

// Acordate de leer los comentarios para mejorar el codigo.

//
window.addEventListener('keypress', (event) => {

	if (event.key === 'A' && event.shiftKey == true) {
		document.getElementById('container').style.display = "flex";
		//aca deberia agregar recien el listener (creo)
	}

})

document.getElementById('close').addEventListener('click', () => {

	document.getElementById('container').style.display = "none";
	// aca ya deberia quitarle el listener (creo)
})