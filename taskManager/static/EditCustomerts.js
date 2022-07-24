function myfunc(){

    let cselect = document.getElementById("mycustomer");
    let cvalue= cselect.value;
    console.log(cvalue)
    let cvalue1 = cselect.options[cselect.selectedIndex].text
    let clientid= document.getElementById("cid");
    let clientname= document.getElementById("name");
    let clientcity= document.getElementById("city");
    let clientadd = document.getElementById("address");
    let clientind= document.getElementById("internalDomain");
    let clientexd= document.getElementById("externalDomain");
    let clientowadd= document.getElementById("owaadd");
    // console.log(cselect.value)
    // clientname.value += custname
    // clientid.value += custid
    // clientcity.value += custcity
    // clientadd.value += custadd
    // clientind.value += custindomain
    // clientexd.value += custexdomain
    // clientowadd.value += custowaadd

};
async function cust_fetch(cvalue1) {
    // console.log("cvalue is " + cvalue)
    const response = await fetch(
        'http://127.0.0.1:8765/it',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache : 'default'}
    ).then(function (resp) {
        return resp.json();
    })
        .then(function (data) {
            console.log(data[cvalue]);
        });
}


