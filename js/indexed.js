// const inputFile = document.getElementById('videoSrc');
// const video = document.getElementById('video');

// inputFile.addEventListener('change', function (event) {

// 	const reader = new FileReader();

// 	reader.readAsDataURL(inputFile.files[0]);

// 	reader.onload = () => {

// 		const videoURL = reader.result;
// 		video.setAttribute('src', videoURL);
// 		document.getElementById('container').style.display = "none";
// 	}
// })

const indexedDB = window.indexedDB;

if (indexedDB) {

	let db;
	const request = indexedDB.open('videosDB', 1);

	request.onupgradeneeded = () => {
		db = request.result;
		const objectStore = db.createObjectStore('videoURL', { autoIncrement: true });
	}

	request.onsuccess = () => {
		db = request.result;
		getURL();
	}

	request.onerror = (error) => {
		console.log('Error', error);
	}

	const setURL = (url) => {
		const transaction = db.transaction(['videosURL'], 'readwrite');
		const objectStore = transaction.objectStore('videosURL');
		const request = objectStore.add(url);
		// getURL()
	}

	const getURL = () => {
		const transaction = db.transaction(['videosURL'], 'readonly');
		const objectStore = transaction.objectStore('videosURL');
		const request = objectStore.openCursor();

		// request.onsuccess = (event) => {
		// 	const cursor = event.target.result;

		// }

	}
}

// newURL('''''''URL''''''');

const video = document.getElementById('video');
const inputFile = document.getElementById('videoSrc');

window.addEventListener('load', () => {

	const url = getURL();
	video.setAttribute('src', url);
});

inputFile.addEventListener('change', function (event) {

	const reader = new FileReader();

	reader.readAsDataURL(inputFile.files[0]);

	reader.onload = () => {

		const videoURL = reader.result;
		setURL(videoURL);

		// 		document.getElementById('container').style.display = "none";
	}
})