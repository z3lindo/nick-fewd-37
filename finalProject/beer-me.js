// Attach an event listener to the form submitted
$("#beer-data-form").submit(formSubmitted);

// Handle said form
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://api.brewerydb.com/v2/search?q=" + $("#query").val() + "&type=beer" + "&key=331a9fdb8b722df7cd1499bc486cb5ff";
  var proxy = "http://proxy.avandamiri.com/get?url=" + escape(url);
  $.get(proxy, resultsReceived);
  $('li').remove();
  document.getElementById("beer-data-form").reset();
}

var ul = document.querySelector("#beers");

function resultsReceived(results) {
  // body...

  for (var i = 0; i < results.data.length; i++) {
    var divContainer = document.createElement("div")

    var beerList = document.createElement("li");
    beerList.classList.add("beer");

    var labels = document.createElement("labels");
    labels.setAttribute("src", "https://s3.amazonaws.com/brewerydbapi/beer/" + results["data"][i][labels]);

    var nameContainer = document.createElement("div")
    var name = document.createElement("a")
    name.textContent = results["data"][i]["name"];
    name.setAttribute("href", "http://www.brewerydb.com/beer/" + results["data"][i].id)
    nameContainer.classList.add("beer-name");



    beerList.appendChild(divContainer);
    divContainer.appendChild(nameContainer);
    divContainer.appendChild(labels);
    nameContainer.appendChild(name);

    ul.appendChild(beerList)

 }
}
