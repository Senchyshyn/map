(function(){
	const locations = [
		{
			text: "Hello I'm a Popup!",
			location: [21.07237740812635, 52.130439643012174],
			img: './icon.png'
		},
		{
			text: "Hello too!",
			location: [21.0262618199296, 52.23360601441786],
			img: './icon.png'
		},
		{
			text: "Hello too!",
			location: [20.998981654513305, 52.23817348927998],
			img: './icon.png'
		},
		{
			text: "Hello too!",
			location: [21.005748263537807, 52.225536296710395],
			img: './icon.png'
		},
	];
	let center = [21.02483814060049, 52.23266082524538];

	let isReady = false;
	let isMapInitialised = false;
	const mapSettings = {
		key: 'DKKtzTbpcAbpbGs47dnkVdGCl8nFH9jo',
		container: 'map',
		center,
		zoom: 13

	};

	/* Wait for container to appear */
	function isMapReady () {
		isReady = !!document.getElementById('map');
		if (!isReady) {
			return requestAnimationFrame(isMapReady);
		}
		document.dispatchEvent(new Event('ready'));
	}

	/* Listen to when container appears */
	document.addEventListener('ready', () => {
		if (!isMapInitialised) {
			const map = tt.map(mapSettings);
			const popupOffset = {
				offset: {
					bottom: [0, -36]
				}
			};
			locations.forEach(({text, location, img}) => {
				const element = document.createElement('img');
				element.classList.add('marker-img');
				element.src = img;

				const popup = new tt.Popup(popupOffset).setHTML(text);
				const marker = new tt.Marker({ element }).setLngLat(location).setPopup(popup).addTo(map);

				popup.remove = () => {};

				marker.togglePopup();
				marker.getPopup().toggleClassName('hidden');

				marker.getElement().addEventListener('click', () => {
					marker.getPopup().toggleClassName('hidden');
				});
			});
		}
	});

	requestAnimationFrame(isMapReady);
})();
