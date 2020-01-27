const panels = document.querySelectorAll(".panel");

function toggleOpen(){
    //the element + class (div + .panel + .open)
    //This function will initial the css property for .panel-open in the element that is clicked
    this.classList.toggle('open');
};

//loop over each panel and listen for a click. Initialize function when event takes place
panels.forEach(panel => panel.addEventListener('click', toggleOpen))