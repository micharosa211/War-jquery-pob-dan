$(document).ready(function () {

    // Wariant 1

/*     $('#button').click(function () {
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></P>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></P>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></P>').text(`Title: ${data.title}`);
                let pBody = $('<p></P>').text(`Body: ${data.body}`);
                let hr = $('<hr />');
                
                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);
                $('body').append(hr);
            })
            .fail( function (error) {
            (console.error(error));
            });
    }); */

    // Wariant 2

    $('#button').click(function () {
    $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></P>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></P>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></P>').text(`Title: ${data.title}`);
                let pBody = $('<p></P>').text(`Body: ${data.body}`);
                let hr = $('<hr />');
                
                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);
                $('body').append(hr);
            })
            .fail( function (error) {
            (console.error(error));
            });
    });
});



