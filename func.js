/*  to read and enter the text in the list area with checkbox and delete sign */

let thelist = document.getElementById('thelist')
let btextinarea = document.getElementById('textbar')

function adder() {

    let textinarea = btextinarea.value

    let task = document.createElement('li')
    var word = document.createTextNode(textinarea)



    if (textinarea == "") {
        alert("Oops its empty")
    } else {




        task.appendChild(word)
        thelist.appendChild(task)
        var checker = document.createElement('input')

        checker.type = 'checkbox';

        btextinarea.value = ''

        var span = document.createElement('span')
        var deleter = document.createElement('button')

        deleter.value = "x"

        deleter.innerHTML = 'x'
        span.prepend(checker)
        task.prepend(span)
        task.appendChild(deleter)


    }

}


/* clock in the site */
let time = document.getElementById("time")
setInterval(() => {
    let currentTime = new Date();
    let options = { timeStyle: 'short', hour12: true };
    let timeString = currentTime.toLocaleTimeString('en-US', options);


    time.innerHTML = timeString
}, 1000)


/*  the function to clear text */
function listclear() {

    var removed = document.getElementById('thelist')


    removed.innerHTML = ''
}




thelist.addEventListener('click', function(e) {

    if (e.target.tagName === 'BUTTON') {

        e.target.parentElement.remove()
    } else if (e.target.tagName === 'LI') {
        e.target.children[0]['checked'].toggle("checked")


    }
})