/* ======================== Typing Animation ========================== */
var typed = new Typed(".typing",{
    strings:["", "Frontend Developer", "UI/UX Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ======================== Aside ========================== */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a")
    a.addEventListener("click", function () {
        removeBackSection()
        for (let j=0; j<totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j)
                //allSection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this)
        if(window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section")
}
function showSection(element) {
    for (let i=0; i<totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1]
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for(let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1]
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active")
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function() {
    //console.log(sectionIndex);
    const sectionIndex = this.getAttribute("data-section-index")
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})
const navTogglerBtn = document.querySelector(".nav-toggler")
      aside = document.querySelector(".aside")
      navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn()
      })
function asideSectionTogglerBtn() {
    aside.classList.toggle("open")
    navTogglerBtn.classList.toggle("open")
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.toggle("open")
    }
}

// Portfolio Item to Contact Section
document.querySelector(".portfolio-contact1").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index")
    // console.log(sectionIndex);
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})

document.querySelector(".portfolio-contact2").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index")
    // console.log(sectionIndex);
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})

document.querySelector(".portfolio-contact3").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index")
    // console.log(sectionIndex);
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})

document.querySelector(".portfolio-contact4").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index")
    // console.log(sectionIndex);
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})

document.querySelector(".portfolio-contact5").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index")
    // console.log(sectionIndex);
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})

document.querySelector(".portfolio-contact6").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index")
    // console.log(sectionIndex);
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})


/*====================== Connecting Contact Form ==========================*/
// Connecting Contact Form to EmailJS
function sendMail() {
    var params = {
        from_name : document.getElementById("name_id").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message_id").value
    }
    emailjs.send("service_7afrzco", "template_g7tx4lb", params).then(function (res) {
        alert("Success! " + res.status)
    })
}

// Clearing form fields on submit
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault()
    document.getElementById("name_id").value = ""
    document.getElementById("subject_id").value = ""
    document.getElementById("email_id").value = ""
    document.getElementById("message_id").value = ""
    submitButton.setAttribute("disabled", true)
})

// Checking form validity on submit
const form = document.querySelector("#contact-form")
const submitButton = document.querySelector("#submitButton")
const errorMessage = document.querySelector("#errorMessage")

form.addEventListener("input", function(event) {
    if (form.checkValidity()) {
        submitButton.removeAttribute("disabled")
        errorMessage.style.display = "none"
    }
    else {
        submitButton.setAttribute("disabled", true)
        errorMessage.style.display = "block"
    }
})