//------------------------------------------------------------- FUNCTION DEFINITIONS -------------------------------------------------------------

/**
 * to randomise big logo in Intro section and fav-icon from a list of fa icons
 * why? because why not?
 */
var random_logo = function() {
    var iconArray = new Array("fire", "gamepad", "futbol", "laptop", "book", "spinner", "cat", "dog", "dragon", "coffee")

    class_list = document.getElementById('logo').classList
    class_list.remove(class_list[class_list.length - 1])
    icon = iconArray[Math.floor(Math.random() * iconArray.length)]
    class_list.add("fa-" + icon)

    random_favicon(icon)
}

var random_favicon = function(icon) {
    url = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15/svgs/solid/"+ icon +".svg"
    document.getElementById('favicon').setAttribute('href', url)
}

/**
 * We no like spam bots
 * trying to safeguard email address and github link from bots
 */
var maskGithub = function(el) {
    el.setAttribute('href', el.href.replace('user_name', 'theLaw1730'))
}

var maskEmail = function(el) {
    el.setAttribute('href', el.href.replace('user_name', 'ashvinisharma1730'))
}

var maskLinkedin = function(el) {
    el.setAttribute('href', el.href.replace('user_name', 'ashvini-sharma/'))
}

/**
 * fetch and return array object using id from data.js
 */
var fetch_data = function(id) {
    return data.find(x => x.id == id)
}

/**
 * select and populate text for relevant icon click
 */
var select = function(el) {
    document.getElementsByClassName("selected")[0].classList.remove("selected")
    el.classList.add("selected")

    populate_resume(el.id)
}

/**
 * populate_intro_aboutme(): takes nothing as input and populates the Intro and About Me sections
 * populate_resume(id): takes id as input and populates the Resume section with relevant text and heading
 */

var populate_intro_aboutme = function() {

    //populate intro
            intro = fetch_data("intro")
            $('#intro_heading').append(intro.heading)
            $('#intro_text').append(intro.text)

    //populate about me
            // about_me = fetch_data("about_me")
            // $('#aboutme_heading').append(about_me.heading)
            // $('#aboutme_text').append(about_me.text)
            $('.about_me').load('./assets/templates/about_me.html')

}

var populate_resume = function(id) {
    obj = fetch_data(id)
    $('#resume_heading').replaceWith("<header id='resume_heading' class='major'><h2>"+ obj.heading + "</h2></header>")
    $('#resume_text').replaceWith("<div id='resume_text'>"+ obj.text + "</div>")
}
//----------------------------------------------------------- FUNCTION DEFINITIONS END -----------------------------------------------------------



/**
 * Randomize logo, add intro and about me text on screen, and fill resume header and text with a default value
 */
$(document).ready(function() {
    random_logo()
    populate_intro_aboutme()
    populate_resume('experience')
});