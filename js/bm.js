var animData1 = bodymovin.loadAnimation({
	container: document.getElementById('bm-1'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'anim/header-illu-anim/data.json',
});

var animData2 = bodymovin.loadAnimation({
	container: document.getElementById('bm-2'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'anim/coffee-sub-anim/data.json',
});

var animData3 = bodymovin.loadAnimation({
	container: document.getElementById('bm-3'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'anim/pre-loader-anim/data.json',
});