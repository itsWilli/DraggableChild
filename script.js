window.onload = () => 
{
  	// Initalize the non-draggable parent
	var parent = document.querySelector('.main');
	var parentRect = parent.getBoundingClientRect();
  	// Initalize the draggable child
	var draggable = document.querySelector('.draggable');
	var draggableRect = draggable.getBoundingClientRect();
  
	var dragging = false;

  	// Initalize EventListeners
	document.addEventListener('mousedown', moveStart);
	document.addEventListener('mousemove', moving);
	document.addEventListener('mouseup', moveEnd);
	
	
	function moveStart(e)
	{
    	// Recall these actions again as if the user has resized the window the rect could a different boundary since the initialization
    	parentRect = parent.getBoundingClientRect();
    	draggableRect = draggable.getBoundingClientRect();

		e.preventDefault();
		dragging = true;
	}
	
	function moveEnd(e)
	{
		e.preventDefault();
		dragging = false;
	}
	
	function moving(e)
	{
		e.preventDefault();
		if( dragging )
		{
      		// Check to see if box has gone out of boundaries 
			if( (e.clientX >= parentRect.left && (e.clientX+draggableRect.width <= parentRect.right)) && 
            	(e.clientY >= parentRect.top && (e.clientY+draggableRect.height <= parentRect.bottom)) )
      		{
				// Actually move the box accoutning for the height and width
			  	draggable.style.left = `${e.clientX}px`;
				draggable.style.top = `${e.clientY}px`;
			}
      	else
      	{
        	// If mouse went out of bounds in Horizontal direction.
        	if(e.clientX+draggableRect.width >= parentRect.right)
        	{
           		draggable.style.left = `${parentRect.right-draggableRect.width}px`;
        	}
        	// If mouse went out of bounds in Vertical direction.
        	if(e.clientY+draggableRect.height >= parentRect.bottom)
       		{
       	    	draggable.style.top = `${parentRect.bottom-draggableRect.height}px`;
        	}
      	}
		}			
	}
}