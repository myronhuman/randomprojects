$("button").click(function() {
    $.ajax("https://bored.api.lewagon.com/api/activity/", {
        success: function(result) {
            $("section").html(`
                <p>activity: ${result.activity}</p>
                <p>type: ${result.type}</p>
                <p>price: ${result.price} $</p>
            `)
            console.log(result)
        },
        error: function(xhr) {


            console.log(xhr.statusText)
        }
    })
})
$("input").on("change", function(){
    let username = $("input").val();
        $.ajax(`https:/api.github.com/users/${username}`, {
        success: function(result) {
            console.log(result);
            $("#result").html(`
                <p>activity: ${result.login}</p>
                <p>type: ${result.avatar_url}</p>
                <p>price: ${result.html_url} linkprofile $</p>
            `)
            console.log(result)
        },
        error: function(xhr) {


            console.log(xhr.statusText)
        }
    })
}) ;