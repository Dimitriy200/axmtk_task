function getAppl(){

//    var client_name = document.getElementById('*client_name');
//    var client_url = "client_name=";
//    var text_client_name = client_url.concat(client_name.textContent); // client_name.innerText
//
//    var passport_data = document.getElementById('*passport_data');
//    var passport_data_url = "&passport_data=";
//    var text_passport_data = passport_data_url.concat(passport_data.textContent);
//
//    var family_status = document.getElementById('*family_status');
//    var family_status_url = "&family_status=";
//    var text_family_status = family_status_url.concat(family_status.textContent);
//
//    var address = document.getElementById('*address');
//    var address_url = "&address=";
//    var text_address = address_url.concat(address.textContent);
//
//    var phone_number = document.getElementById('*phone_number');
//    var phone_number_url = "&phone_number=";
//    var text_phone_number = phone_number_url.concat(phone_number.textContent);
//
//    var employment_information = document.getElementById('*employment_information');
//    var employment_information_url = "&employment_information=";
//    var text_employment_information = employment_information_url.concat(employment_information.textContent);
//
//    var credit_amount = document.getElementById('*credit_amount');
//    var credit_amount_url = "&credit_amount=";
//    var text_credit_amount = credit_amount_url.concat(credit_amount.textContent);
//
//    const the_Url = "http://localhost:8080/application?";
//    var res_Url = the_Url.concat(text_client_name, text_passport_data, text_family_status, text_address, text_phone_number, text_employment_information, text_credit_amount)


    var client_name = document.getElementById('client_name').value;
    var client_url = "client_name=";
    var text_client_name = client_url.concat(client_name.textContent); // client_name.innerText

    var test_str = "&passport_data=12345&family_status=ststusF&address=someAddress&phone_number=888888888&employment_information=someEmplInfo&credit_amount=9999";
    var test_Url = "http://localhost:8080/application?";

//    var test1_str = text_client_name.concat(test_str);
    var res_Url = test_Url.concat(text_client_name, test_str);


    var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("PUT", res_Url);
//        xhr.responseType = "document";
        xmlHttp.send();

//        xhr.onload = function() {
//          let responseObj = xhr.response;
//          alert(responseObj.message);
//        };


    return xmlHttp.responseText;
}