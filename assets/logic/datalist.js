var elemsToCopy = document.getElementsByTagName( 'li' );

for ( var i = 0; i < elemsToCopy.length; i++ ) {
  elemsToCopy[i].onclick = copyText;
}

// Bind Event

function copyText() {
    
  	// Create Range to select text that is normally unselectable
	  var range = document.createRange();  
	  range.selectNode(this);  
		window.getSelection().addRange(range); 
  
  try {  
    // Now that we've selected the text, execute the copy command  
    var successful = document.execCommand('copy');  
    successful ? console.log("success") : console.log("didn't work")
  } catch(err) {  
    alert('Unable to copy, update your browser');  
  }  
}
