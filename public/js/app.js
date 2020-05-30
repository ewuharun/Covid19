var form = document.querySelector('form')
var search = document.querySelector('input')
var error_message = document.querySelector('#error_message')
var corona_data = document.getElementById('#corona_data')

form.addEventListener(('submit'), (e) => {
    e.preventDefault()
    var country = search.value
        // error_message.textContent = "Loading..."
        //corona_data.textContent = ""
    if (country == "") {
        // error_message.textContent = "You must provide a country name"
    } else {
        fetch("http://localhost:3000/news?country=" + country).then((response) => {
            response.json().then((data) => {

                if (data.error) {
                    //error_message.textContent = data.error
                } else {
                    //console.log(data.all_data)

                    if (data.all_data.length > 0) {
                        var temp = ""

                        data.all_data.forEach(element => {
                            temp += "<tr>"
                            temp += "<th>" + element.Date.substring(0, 10) + "</th>"
                            temp += "<th>" + element.City + "</th>"
                            temp += "<th>" + element.Confirmed + "</th>"
                            temp += "<th>" + element.Deaths + "</th>"
                            temp += "<th>" + element.Recovered + "</th>"
                            temp += "<th>" + element.Active + "</th></tr>"
                        });

                        document.getElementById("corona_data").innerHTML = temp
                    }



                }
            })
        })


    }
})