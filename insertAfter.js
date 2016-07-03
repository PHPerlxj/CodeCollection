//Insert element after target element
function insertAfter(newElement,targetElement){ 
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);

	}
}
