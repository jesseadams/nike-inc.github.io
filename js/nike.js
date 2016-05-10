function setupSideBar() {
    // loop through category titles
    for (var i = 0; i < data.length; i++) {
        var html = '<div class="sbcategory">';
        html += '<div class="sbtitle">' + data[i].title + '</div>';
        // loop through repositories
        for (var x = 0; x < data[i].items.length; x++) {
            html += '<div class="sbname"><a href="' + data[i].items[x].repo + '">' + data[i].items[x].name + '</a></div>';
        }
        html += '</div>';
        $('#side-bar').append(html);
    }
}

function setupLongScroll() {
    // loop through category titles
    for (var i = 0; i < data.length; i++) {
        var html = '<div class="category">';
        if (data[i].items.length === 0) {
            html += '<div class="title">' + data[i].title + '</div>'; /* IF DATA.JS HAS NO CONTENT */
        } else {
            html += '<div class="title">' + data[i].title + '&nbsp;<span class="count">(' + data[i].items.length + ')</span></div>'; /* IF DATA.JS HAS CONTENT */
        }
        html += '<div class="wrapper">';
        // loop through repositories
        for (var x = 0; x < data[i].items.length; x++) {
            html += '<div class="item"><a href="' + data[i].items[x].repo + '"><img src="' + data[i].items[x].image + '"></a>';
            html += '<div class="name">';
            html += '' + data[i].items[x].name + '</div>';
            html += '<div class="description">' + data[i].items[x].description + '<br><br>Released:&nbsp;<span class="released">' + data[i].items[x].releaseDate + '</span></div>';
            html += '<div class="social">';
            html += '<a href=https://facebook.com/dialog/feed?link=' + data[i].items[x].repo + '&app_id=' + data[i].items[x].facebookAppId + '&name=' + data[i].items[x].facebookName + '&description=' + data[i].items[x].facebookDescription + '&picture=' + data[i].items[x].facebookPicture + '&redirect_uri=' + window.location.href + '"><img id="facebook" src="' + data[i].items[x].imageFacebook + '"></a>';
            html += '<a href=https://twitter.com/intent/tweet?url=' + data[i].items[x].repo + '&text=' + data[i].items[x].textTwitter + '&original_referrer=' + window.location.href + '"><img id="twitter" src="' + data[i].items[x].imageTwitter + '"></a>';
            html += '</div>';
            html += '<div class="subhline"></div>';
            html += '</div>';
        }
        html += '</div></div>';
        $('#long-scroll').append(html);
    }
}

(function() {
    /* setupSideBar();         /* IF SIDEBAR */
    // setupLongScroll();
})();
