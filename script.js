let currentDate=new Date;
let dateSelected=currentDate.getFullYear()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getDate();
$('#date-set').html(dateSelected);
function getDate(event){
    event.preventDefault();
    dateSelected = $('#ar-date').val();
    $('#date-set').html(dateSelected);
    fetch();
}

function updateChanges(data){
    //empty the previously stored elements
    $('.img-container').empty();
    $('.img-description').empty();

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

function fetch(){
    $.ajax({
        'url': "https://api.nasa.gov/planetary/apod",
        'method': 'GET',
        'success': updateChanges, 
        'data':{
            api_key: 'henBDa1fHwN7iODeAlbVnBeJrnPO2g0ht5XN4YKD',
            date: dateSelected,
        }
    });
}
fetch();
$('#ar-date-btn').click(getDate);

console.log("cycle-end");