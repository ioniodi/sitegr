
if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
        removeVideo()
}


function removeVideo() {
	const iframes = document.getElementsByTagName('iframe');
	if (iframes && iframes.length === 1) {
		var img = document.createElement("img");
		img.src = 'assets/images/di.jpeg';
		insertAfter(iframes[0], img);
		iframes[0].remove();
	}
}


function insertAfter(currentNode, newNode) {
	currentNode.parentNode.insertBefore(newNode, currentNode.nextSibling);
}
