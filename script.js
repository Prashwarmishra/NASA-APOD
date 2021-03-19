
function updateChanges(data){
    const img = $(document.createElement('img'));
    const exp = $(document.createElement('p'));

    img.attr('src', data.hdurl);
    img.css({
        width: "100%",
        height: "100%"
    });
    img.appendTo($('.img-container'));

    exp.append(data.explanation);
    exp.appendTo($('.img-description'));
}

$.ajax({
    'url': "https://api.nasa.gov/planetary/apod",
    'method': 'GET',
    'success': updateChanges, 
    'data':{
        api_key: 'henBDa1fHwN7iODeAlbVnBeJrnPO2g0ht5XN4YKD',
    }
});