(async function() {
	while(document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	};
    try {
        var a = await fetch('https://rawcdn.githack.com/ethanaobrien/flash-button/main/ruffle.js');
        var blob = await a.blob();
        var url = URL.createObjectURL(blob);
        var b = document.createElement('script');
        b.src = url;
        document.body.appendChild(b);
    } catch(e) {
        alert(e.message);
    };
    var file = document.createElement('input');
    file.type = 'file';
    file.onchange = async function(e) {
        var Je = window.RufflePlayer.newest();
        var Ye = Je.createPlayer();
        Ye.id="player";
        document.body.appendChild(Ye);
        Ye.load({data: await new Response(e.target.files[0]).arrayBuffer()});
    };
    file.click();
})();
