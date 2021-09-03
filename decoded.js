(async function() {
	while(document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	};
    try {
        window.paths = {wasm: 'https://raw.githack.com/ethanaobrien/flash-button/main/d0109ad57d5486eb7e0e.wasm'};
        var a = await fetch('https://raw.githack.com/ethanaobrien/flash-button/main/ruffle.js');
        var blob = await a.blob();
        var url = URL.createObjectURL(blob);
        var b = document.createElement('script');
        b.src = url;
        document.body.appendChild(b);
    } catch(e) {
        alert(e.message);
        return;
    };
    var file = document.createElement('input');
    file.type = 'file';
    file.accept = '.swf,application/x-shockwave-flash';
    file.onchange = async function(e) {
        var Je = window.RufflePlayer.newest();
        var Ye = Je.createPlayer();
        Ye.id="player";
        document.body.appendChild(Ye);
        Ye.load({data: await new Response(e.target.files[0]).arrayBuffer(), letterbox:"on", logLevel:"warn"});
    };
    file.click();
})();
