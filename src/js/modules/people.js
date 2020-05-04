export default () => {
	audiojs.events.ready(function() {
		var as = audiojs.createAll();
		$('.play').on('click', function(event){
			for (var prop in audiojs.instances) {
				audiojs.instances[prop].pause();
			}
			return true;
		});
	});
};