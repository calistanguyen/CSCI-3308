var cardNum = 0; 
function addCard(id)
{
    var tweet = $('<div class = "card" id = card'+cardNum+'> <img class="card-img-top" src="twitter.png" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">Tweet</h5> <p class="card-text">Sample tweet will go here.</p>  <button class="btn btn-danger addButton" onclick = "deleteCard(card'+cardNum+')">-</button></div> </div>');
    tweet.appendTo(id);
    cardNum++; 
}

function deleteCard(id)
{
    $(id).remove();  
}