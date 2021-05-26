/* Function to get All Data */
function getAllData(url){
    $.get(url, function(data){
        let html = "";
        for(let i=0; i<(data.results).length; i++){
            html += `<li>${data.results[i].name}</li>`;
        }
        
        $("#list ul").append(html);
        if(data.next){
            getAllData(data.next);
        }
    }, 'json');
}

/* Including AJAX to a function */
function requestData(url){
    $.get(url, function(data){
        let html = "";
        for(let i=0; i<(data.results).length; i++){
            html += `<li>${data.results[i].name}</li>`;
        }
        $("#list ul").html(html);
        
        /* Pagination */
        $("#getAll").text(`Get All ${data.count} Records`);
        $("#getAll").attr('href', `https://swapi.dev/api${url}/`);
        $('#nextBtn').attr('href', data.next);
        $('#prevBtn').attr('href', data.previous);

        /* Show/Hide Next/Prev Button */
        if(!data.next){
            $('#nextBtn').hide();
        }else{
            $('#nextBtn').show();
        }

        if(!data.previous){
            $('#prevBtn').hide();
        }else{
            $('#prevBtn').show();
        }
    }, 'json');
}