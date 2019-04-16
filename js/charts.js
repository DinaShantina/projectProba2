$(function () {


	//1
	let myChart1 = document.querySelector("#myChart1").getContext('2d');
	document.querySelector('#myChart1').height = 300;
	document.querySelector('#myChart1').width = window.innerWidth;

	let chart = new Chart(myChart1, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					7,
					5.1,
					8,
					6,
					9
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//2
	let myChart2 = document.querySelector("#myChart2").getContext('2d');
	document.querySelector('#myChart2').height = 300;
	document.querySelector('#myChart2').width = window.innerWidth;

	let chart2 = new Chart(myChart2, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5,
					6,
					7,
					6,
					5.5
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {

			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//3
	let myChart3 = document.querySelector("#myChart3").getContext('2d');
	document.querySelector('#myChart3').height = 300;
	document.querySelector('#myChart3').width = window.innerWidth;

	let chart3 = new Chart(myChart3, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5,
					9,
					6,
					9.5,
					5.5
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//4
	let myChart4 = document.querySelector("#myChart4").getContext('2d');
	document.querySelector('#myChart4').height = 300;
	document.querySelector('#myChart4').width = window.innerWidth;

	let chart4 = new Chart(myChart4, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5,
					8,
					5.7,
					7,
					9
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//5
	let myChart5 = document.querySelector("#myChart5").getContext('2d');
	document.querySelector('#myChart5').height = 300;
	document.querySelector('#myChart5').width = window.innerWidth;

	let chart5 = new Chart(myChart5, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5,
					8,
					6,
					6,
					9
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//6
	let myChart6 = document.querySelector("#myChart6").getContext('2d');
	document.querySelector('#myChart6').height = 300;
	document.querySelector('#myChart6').width = window.innerWidth;

	let chart6 = new Chart(myChart6, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5.5,
					5.9,
					6,
					7,
					5.3
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//7
	let myChart7 = document.querySelector("#myChart7").getContext('2d');
	document.querySelector('#myChart7').height = 300;
	document.querySelector('#myChart7').width = window.innerWidth;

	let chart7 = new Chart(myChart7, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5.5,
					5.9,
					6,
					7,
					5.3
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//8
	let myChart8 = document.querySelector("#myChart8").getContext('2d');
	document.querySelector('#myChart8').height = 300;
	document.querySelector('#myChart8').width = window.innerWidth;

	let chart8 = new Chart(myChart8, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5.5,
					5.9,
					6,
					7,
					5.3
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//9
	let myChart9 = document.querySelector("#myChart9").getContext('2d');
	document.querySelector('#myChart9').height = 300;
	document.querySelector('#myChart9').width = window.innerWidth;

	let chart9 = new Chart(myChart9, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5.5,
					5.9,
					6,
					7,
					5.3
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//10
	let myChart10 = document.querySelector("#myChart10").getContext('2d');
	document.querySelector('#myChart10').height = 300;
	document.querySelector('#myChart10').width = window.innerWidth;

	let chart10 = new Chart(myChart10, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5.5,
					5.9,
					6,
					7,
					5.3
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//11
	let myChart11 = document.querySelector("#myChart11").getContext('2d');
	document.querySelector('#myChart11').height = 300;
	document.querySelector('#myChart11').width = window.innerWidth;

	let chart11 = new Chart(myChart11, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					5.5,
					5.9,
					6,
					7,
					5.3
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//doughnut CHART
	let myChartD = document.querySelector("#myChartD").getContext('2d');
	document.getElementById('myChartD').height = 300;
	document.getElementById('myChartD').width = window.innerWidth;

	let chartD = new Chart(myChartD, {
		type: 'doughnut',
		data: {
			labels: ['MALE', 'FEMALE', 'OTHER'],
			datasets: [{
				label: '',
				data: [
					9135,
					748,
					92
				],
				backgroundColor: [
					`#7738ff`,
					`#9be4ef`,
					`#fe6382`
				],
				borderWidth: 1,

			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});

});
