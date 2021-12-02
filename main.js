document.addEventListener("DOMContentLoaded", () =>
{
function counter(id, start, end, duration)
{
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = math.abs(math.floor(duration/ range)),
    timer = setInterval( () =>
    {
        current += increment;
        obj.textContent = current;
        if (current == end)
        {
            clearInterval(timer);
        }
    }, step);
}
counter("count1", 0, 1287, 3000);
counter("count2", 100, 4000, 2500);
counter("count3", 50, 3007, 3000);
counter("count4", 0, 4507, 2530);
});

let nav = document.querySelector(".wrap");
window.onscroll = function () 
{
    if (document.documentElement.scrollTop > 15) 
    {
        nav.classList.add("scroll-on");
    }
    else 
    {
        nav.classList.remove("scroll-on");
    }
}

//nav-scroll

let navBar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a)
{
    a.addEventListener("click", function()
    {
        navcollapse.classList.remove("show");
    })
})