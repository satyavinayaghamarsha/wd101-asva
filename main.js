
const nm = document.getElementById("name");

const mail = document.getElementById("email");

const pwrd= document.getElementById("password");

const db = document.getElementById("dob");

const trms = document.getElementById("acceptTerms");

const sbmttrms = document.getElementById("submit");

const hstry= document.getElementById("history");

const d= new Date();

let entry = []

const dv = (givenDate) => {

    const ud = givenDate.split("-").map((d) => Number(d))

    const validdYear = (ud[0] >= (d.getFullYear() - 55) && userDate[0] <= (date.getFullYear() - 18))

    let validdMonth;

    let validday;

    if (ud[0] === d.getFullYear() - 55) {

        validdMonth = ud[1] >= (d.getMonth() + 1)

        validdDay = ud[2] >= (d.getDate())

    } else if (ud[0] === d.getFullYear() - 18) {

        validdMonth = ud[1] <= (d.getMonth() + 1)

        validdDay = ud[2] <= (d.getDate())

    } else if (validdYear) {

        validdMonth = true

        validdDay = true

    } else {

        validdMonth = false

        validdDay = false

    }

    return validdYear && validdMonth && validdDay

}

const cValidity = (element) => {

    return element.validity.valid

}

const dgts = (num) => {

    if (num < 10) {

        return "0" + num

    } else {

        return num

    }

}

const ss = (name, email, password, dob, terms) => {

    const userData = {

        nm,

        mail,

        pwrd,

        db,

        trms

    }

    entry.push(userData)

    localStorage.setItem('ud', JSON.stringify(entry))

}

const gs = () => {

    entry = JSON.parse(localStorage.getItem("ud"))

    if (entry === null) {

        entry = []

    } else {

        const view = entry.map((entry) => {

            let row = ""

            const all = Object.keys(entry)

            for (let i = 0; i < all.length; i++) {

                row += `<td>${entry[all[i]]}</td>`

            }

            return `<tr>${row}</tr>`

        })

        hstry.innerHTML += view.join("\n")

    }

}

sbmt.addEventListener("click", () => {

    const userDate = db.value

    if (!dvalidity(userDate)) {

        db.setCustomValidity(`Date must be between ${d.getFullYear() - 55}-${digits(date.getMonth() + 1)}-${digits(date.getDate())} and ${date.getFullYear() - 18}-${digits(date.getMonth() + 1)}-${digits(date.getDate())}`)

    } else {

        db.setCustomValidity("")

    }

    const allValid = cv(nm) && cv(emailEl) && checkValidity(passwordEl) && checkValidity(dobEl)

    if (allValid) {

        sendStorage(nameEl.value, emailEl.value, passwordEl.value, dobEl.value, termsEl.checked)

    }

})

getStorage()

 
 

  


