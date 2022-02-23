$("#quoteButton").click(function(e) {
    e.preventDefault();
    // alert("Seems to be working")
    document.getElementsByClassName("quote")[0].style.display="none"
    document.getElementsByClassName("advice-id")[0].style.display="none"

    document.getElementById("loader").style.display="block"
    
    $.ajax({
        type: "GET",
        url: "https://api.adviceslip.com/advice",
        success: function(result) {
            var jsonRes = JSON.parse(result)
            console.log("stuff: ", JSON.parse(result));
            
            document.getElementById("quoteContent").innerHTML= jsonRes.slip.advice
            document.getElementById("quoteid").innerHTML= "advice #"+jsonRes.slip.id

            document.getElementById("loader").style.display="none"
            document.getElementsByClassName("advice-id")[0].style.display="block"

            document.getElementsByClassName("quote")[0].style.display="block"

        },
        error: function(result) {
            alert('error');
        }
    });
});