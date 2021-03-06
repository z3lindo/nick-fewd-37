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

// console.log(results);

  for (var i = 0; i < results.data.length; i++) {
// type for loop here for the no icon statement
// if (results["data"][i]["labels"]["icon"] == undefined) {
//   $(#labels) = "http://defaultimage.jpg";
// }

    var divContainer = document.createElement("div")

    var beerList = document.createElement("li");
    beerList.classList.add("beer");

    var nameContainer = document.createElement("div")
    var name = document.createElement("a")
    name.textContent = results["data"][i]["name"];
    name.setAttribute("href", "http://www.brewerydb.com/beer/" + results["data"][i].id);
    nameContainer.classList.add("beer-name");

    var description = document.createElement("div");
    description.textContent = results["data"][i].description;
    description.classList.add("beer-description");

    var labels = document.createElement("img");
    labels.setAttribute("src", results["data"][i]["labels"]["icon"]);
    labels.classList.add("icon");

    var abv = document.createElement("div");
    abv.textContent = "abv = " + results["data"][i]["abv"];
    abv.classList.add("abv");

    var organic = document.createElement("div")
    organic.textContent = "Organic = " + results["data"][i]["isOrganic"];
    organic.classList.add("organic");

    divContainer.appendChild(labels);
    beerList.appendChild(divContainer);
    divContainer.appendChild(nameContainer);
    nameContainer.appendChild(name);
    divContainer.appendChild(description);
    divContainer.appendChild(abv);
    divContainer.appendChild(organic);

    ul.appendChild(beerList)

 }
}
