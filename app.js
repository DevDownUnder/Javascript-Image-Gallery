const panels = document.querySelectorAll(".panel");

//Open up the panel to 5 times it's width when clicked
function toggleOpen() {
    //This function will initialize the css property .panel-open in the element that is clicked
    this.classList.toggle('open');
};

//Toggle the transition the text that is hidden to show / close
function toggleActive(e) {
    debugger;
    //if  event contains a class that includes flex 
    if (e.propertyName.includes('flex')) {
        //toggle this (element clicked on) which contains class open active
        this.classList.toggle('open-active')
    }
}

//loop over each panel and listen for a click. Initialize function when event takes place
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

//loop over each panel and listen for the  transition to end. Initialize function when event takes place
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
