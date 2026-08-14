
const panels = document.querySelectorAll('.panel');

// console.log(panels);
// panels select all the divs which is made.we need to select one div and add class active in it.

panels.forEach((panel) => {
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add("active");
    })
});

function removeActiveClasses(){
    panels.forEach(pancel => {
        pancel.classList.remove("active");
    })
}