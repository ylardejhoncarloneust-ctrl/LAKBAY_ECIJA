const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("close-btn");
const logo = document.querySelector(".logo");



// Navigation
hamburger.addEventListener("click", () => {
  sideMenu.classList.add("show");
  logo.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("show");
  logo.classList.remove("hide");
});


//POP up
const feed = document.getElementById("feed")
const feedbox = document.getElementById("feedbox")
const reservebox = document.getElementById("reservebox")
const reserve = document.getElementById("reserve")
const Booknow = document.getElementById("Booknow")
const PackageBooking = document.getElementById("PackageBooking")
const closefeed = document.getElementById("closefeed");
const closereserve = document.getElementById("closereserve");
const closePackageBooking= document.getElementById("closePackageBooking");
const type = document.getElementById("type");


feed.addEventListener("click", () => {
	feedbox.classList.add("labas");
	type.classList.add("labas");
});

reserve.addEventListener("click", () => {
	reservebox.classList.add("labas");
});

Booknow.addEventListener("click", () => {
	PackageBooking.classList.add("labas");
});

closefeed.addEventListener("click", () => {
    feedbox.classList.remove("labas");
	type.classList.remove("labas");
});

closereserve.addEventListener("click", () => {
    reservebox.classList.remove("labas");
});

closePackageBooking.addEventListener("click", () => {
    PackageBooking.classList.remove("labas");
});


//Comment
const commentForm = document.getElementById("commentform");
const commentText = document.getElementById ("commenttext");
commentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const comment = commentText.value.trim();
    if (comment === "") return;

    addComment(comment);
    commentText.value = "";
});


//Logout
function logoutBut () {
	let confout = confirm("Are you sure you want to logout ?");
	
	if (confout){
		window.location.href = "Login.html";
	}
	else {
		return;
	}
}

//Comment Feedback
function addComment(comment) {
    const commentBox = document.createElement("div");
    commentBox.classList.add("commentbox");

    const header = document.createElement("div");
    header.classList.add("commentHeader");

    const pfp = document.createElement("img");
    pfp.src = "pfpkineth.jpg";
    pfp.classList.add("pfp");

    const username = document.createElement("p");
    username.textContent = "Kenneth Angles"; // Can also be dynamic
    username.classList.add("username");

    header.appendChild(pfp);
    header.appendChild(username);

    const commentTextEl = document.createElement("p");
    commentTextEl.classList.add("comment");
    commentTextEl.textContent = comment;

    commentBox.appendChild(header);
    commentBox.appendChild(commentTextEl);

    newcomment.appendChild(commentBox);
}

 // Get references
document.addEventListener("DOMContentLoaded", function() {
  const fileInput = document.getElementById("imageInput");
  const previewImg = document.getElementById("preview");
  const label = document.querySelector(".prop");

  // When the user selects an image
  fileInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function(e) {
        previewImg.src = e.target.result;
        previewImg.style.display = "block";
        label.style.display = "none"; // hide the + sign
      };

      reader.readAsDataURL(file); // Convert file to base64
    }
  });
});


// Food package

function foodchoice(selectElement) {
	let choice = selectElement.value;
	console.log(selectElement.value);
	
	if (choice == "Budget")
	{
			document.getElementById("MealPackage").innerHTML = "Budget Meal Package";
			document.getElementById("FoodDesc").innerHTML = `
			2 breakfasts (Day 2 & Day 3) – continental/hot items at resort’s restaurant. <br/><br/>
			picnic-style lunch (Day 2) – rice or bread + local main + bottled water. <br/><br/>
			dinners (Day 1 & Day 2) – set meals: local/Asian-fusion main, vegetable side, dessert. <br/><br/>
			Excludes specialty drinks, alcoholic beverages and optional snacks. <br/>
			<h2>₱2,000 per person.</h2> 
			`;		
	}	
	else if (choice == "Standard")
	{
			document.getElementById("MealPackage").innerHTML = "Standard Meal Package";
			document.getElementById("FoodDesc").innerHTML = `
			2 breakfasts (Day 2 & Day 3) – full buffet/hot plated items including fruit, eggs, rice/bread, coffee/tea.<br/><br/>
			1 picnic-style lunch (Day 2) – upgraded box lunch: grilled or adobo-style main, salad/veg side, bottled drink.<br/><br/>
			2 dinners (Day 1 & Day 2) – à la carte or resort restaurant main course, appetizer & dessert, non-alcoholic drinks included.<br/><br/>
			Includes standard dietary requests (vegetarian/ allergy) if notified in advance. <br/>
			<h2>₱3,500 per person.</h2>
			`;
	}
	else if (choice == "Premium")
	{
			document.getElementById("MealPackage").innerHTML = "Premium Meal Package";
			document.getElementById("FoodDesc").innerHTML = `
			2 breakfasts (Day 2 & Day 3) – premium buffet + hot à la carte options (e.g., smoked salmon, specialty breads, artisan coffee). <br/><br/>
			1 picnic-style lunch (Day 2) – deluxe picnic with premium grilled proteins (fish/beef), gourmet side dishes, premium bottled beverages. <br/><br/>
			2 dinners (Day 1 & Day 2) – fine dining menu at resort: signature grilled seafood or premium meat, gourmet sides, dessert platter, non-alcoholic drinks + 1 selected alcoholic drink. <br/><br/>
			Includes full dietary customization, priority reservation at resort restaurant.
			<h2 style="margin-top: 5px;">₱5,000 per person.</h2>
			`;
	}	
	else
	{
			document.getElementById("MealPackage").innerHTML = "Food Package";
			document.getElementById("FoodDesc").innerHTML = `
			Two breakfasts (Day 2 & Day 3) at the resort’s restaurant — likely including continental breakfast items plus hot dishes (eggs, rice or bread, fresh fruit, coffee/tea) in an Asian-fusion setting. <br/><br/>
			One picnic-style lunch (Day 2) at the falls location — packed lunch format: rice or bread, local main dish (grilled or adobo-style), salad or vegetable side, bottled water or soft drink. <br/><br/>
			Two dinners (Day 1 & Day 2) at the resort’s dining venue — menus feature Asian-fusion cuisine: e.g., grilled fish or meat, vegetable sides, rice or pasta, dessert and non-alcoholic drinks.  <br/><br/>
			Dining venue also offers international buffet on weekends and à la carte menus weekdays, so if one of the dinners happens on a weekend the buffet might apply.  <br/><br/>
			Meals included do not (usually) cover specialty drinks, alcoholic beverages, extra snacks outside meal times, or third-party food outside the resort/picnic setting. <br/><br/>
			The resort accepts advance request for dietary preferences/allergies (worth confirming).
			<h2 style="margin-top: 5px;">₱5,000 per person.</h2>
			`;
	}	
}