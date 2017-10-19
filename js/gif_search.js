    //array of autocomplete terms
    autoTerms = ["about", "above", "across", "app", "apple", "appreciate", "bad", "ball", "balloon", "bell", "cat"];
    $('#search').autocomplete({source: autoTerms});

    //get the search term from the form
    getSearchTerm = (evt) => {
        evt.preventDefault();
        searchTerm = $('#search').val();
        getGIF(searchTerm);
    };

    //do a get request to the giphy api based on search term
    //extract the embed url from the results and apply to the iframe
    getGIF = (term) => {
        $.get('http://api.giphy.com/v1/gifs/search?q='+term+'&api_key=dc6zaTOxFJmzC&limit=1', function(result){
            $('#giphy-embed').attr('src', result.data[0].embed_url);
        });
    };

    $('#giphy_form').on('submit', getSearchTerm);