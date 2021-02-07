const MAIN = document.getElementById('main');

function getTime() {

	let timeNow = new Date();
	const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
	const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return {
		minutes: timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes(),
		hours: timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours(),
		day: DAYS[timeNow.getDay()],
		date: timeNow.getDate(),
		month: MONTHS[timeNow.getMonth()],
		year: timeNow.getFullYear(),
	}
}

function printData() {

	const DATA = getTime();

	MAIN.innerHTML = `
	<h1>${DATA.day}</h1>
	<h2>${DATA.date} ${DATA.month}, ${DATA.year}</h2>
	<p>- ${DATA.hours}:${DATA.minutes} -</p>
	`;
}

let intervalo = setInterval(printData(), 10000);