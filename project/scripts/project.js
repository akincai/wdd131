const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const gallery =  document.querySelector("#recipe-gallery");

const homeButton = document.querySelector('#home');
const mainDishesButton = document.querySelector('#main-dishes');
const cookiesButton = document.querySelector('#cookies');
const appetizersButton = document.querySelector('#appetizers');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

homeButton.addEventListener('click', () => {
	addRecipes(recipes);
});

mainDishesButton.addEventListener('click', () => {
	filterRecipes(recipes, "Main Dish");
});

cookiesButton.addEventListener('click', () => {
	filterRecipes(recipes, "Cookie");
});

appetizersButton.addEventListener('click', () => {
	filterRecipes(recipes, "Appetizer");
});

const recipes = [
    {
        recipeName: "Creamy Lemon Parmesan Chicken",
        type: "Main Dish",
        prep: [
            "Ingredients for Breading:",
            "1 cup all-purpose flour",
            "1/4 cup Parmesan cheese (blend with flour in food processor)",
            "1 1/2 tsp. garlic powder",
            "Kosher salt",
            "Freshly ground black pepper",
            "Chicken Prep and Frying:",
            "4-5 boneless skinless chicken breasts filleted into thin strips",
            "3 tbsp. extra virgin olive oil",
            "Prepping Sauce:",
            "2 tbsp. butter",
            "3 cloves garlic, minced",
            "1 1/2 cup heavy cream (2 cups heavy cream)",
            "1 cup low-sodium chicken broth (1 1/3 cup low sodium chicken broth)",
            "1/2 cup lemon juice (2/3 cup lemon juice)",
            "3/4 cup freshly grated Parmesan, to be mixed into sauce"
        ],
        directions: [
            "Using a large Ziploc plastic bag, combine flour with garlic powder, salt, and pepper. Mix by shaking the closed bag. Coat each chicken strip with the 2 flour mixture. Set aside.",
            "In a large skillet over medium-high heat, heat oil until shimmering but not smoking. Add chicken and sear until golden, 6 minutes. Flip and cook until opposite side is golden, around 6 minutes more. Remove from pan and set aside.",
            "Turn heat down to medium to prevent burning and add butter to pan. When butter is melted, add garlic and cook until fragrant, about 1 minute. DO NOT BROWN GARLIC. Add chicken broth, cream, lemon juice, and remaining 3/4 cup Parmesan and season with more salt and pepper. Stir to combine. Simmer and cook until thickened slightly, 3 to 4 minutes. Return chicken to skillet and simmer until chicken is cooked through, 5 to 6 minutes more.",
            "When chicken is cooked, remove skillet from heat and serve."
        ]
    },
    {
        recipeName: "Chicken Cheesy Pasta",
        type: "Main Dish",
        prep: [
            "2 packages of pasta (rotini or farfalle)",
            "garlic salt and pepper to taste (roughly 1-1 1/2 tsp each)",
            "1 large can or 2 small cans cream of chicken",
            "4-6 cups shredded cheese",
            "1 lb cooked chicken"
        ],
        directions: [
            "Cook all pasta to al dente in hot pot",
            "Drain pasta and return to pot",
            "Add cheese and chicken to pot, stirring to ensure even heating",
            "Season with garlic salt and pepper",
            "Once cheese is well melted, pour mixture into greased pan",
            "Put pan in oven and bake at 350 for 15 minutes"
        ]
    },
    {
        recipeName: "Delicious Sugar Cookies",
        type: "Cookie",
        prep: [
            "2 cubes real butter",
            "1 1/2 cups sugar",
            "2 eggs",
            "3 1/2 teaspoons real vanilla",
            "3 cups flour",
            "1 3/4 teaspoons baking powder",
            "1/8 teaspoon salt"
        ],
        directions: [
            "Preheat oven to 350",
            "Cream butter and sugar together. Then add vanilla and eggs",
            "Beat until frothy",
            "Add dry ingredients and mix well",
            "Chill dough for a little while if it needs it",
            "Roll out and cut dough into your favorite shapes",
            "Bake for 10 minutes",
            "Do not overcook",
            "Editor's Note: I like to roll these out thicker than average so that they are softer and chewier"
        ]
    },
    {
        recipeName: "Crescent Rolls",
        type: "Appetizer",
        prep: [
            "1/2 cup margarine or butter, melted",
            "1 cup milk scalded, scalded",
            "1/2 cup sugar",
            "1 teaspoon salt",
            "1 package yeast",
            "5 cups flour",
            "2 eggs, well beaten"
        ],
        directions: [
            "Mix part of the flour and dry ingredients",
            "Add the liquids and mix- should be soupy",
            "Add 1-2 cups of flour at a time as needed",
            "Knead, let set until it doubles in size (1h20m)",
            "Punch down split into thirds",
            "Roll and cut into 12's",
            "Bake 325 for 20-25 minutes",
            "You can freeze them for now, later, or even much, much later to use at your leisure"
        ]
    },
    {
        recipeName: "Snickerdoodles",
        type: "Cookie",
        prep: [
            "1 cup margarine, slightly softened",
            "1 1/2 cups sugar",
            "2 eggs",
            "2 3/4 cups flour",
            "3 teaspoons baking powder",
            "3 tablespoons sugar",
            "3 teaspoons cinnamon"
        ],
        directions: [
            "Preheat oven to 400",
            "Cream margarine and sugar",
            "Add eggs and mix well",
            "Combine dry ingredients then add into butter micture",
            "Mix well",
            "Roll into balls, and roll balls into mixture of cinnamon sugar",
            "Bake for 8 to 10 minutes"
        ]
    }
];


// initial recipe adding
addRecipes(recipes);

function formatInstructions(instructions) {
    return instructions.map(inst => `<p>${inst}</p>`).join("");
}

function formatRecipeCards(recipe) {
    return `<div class="recipe-card">
                <h2>${recipe.recipeName}</h2>
                <div class="recipe">
                    <h3>Preparation</h3>
                    ${formatInstructions(recipe.prep)}
                    <h3>Directions</h3>
                    ${formatInstructions(recipe.directions)}
                </div>
            </div>`;
}


function addRecipes(recipeList) {
    gallery.innerHTML = recipeList.map(formatRecipeCards).join("");
}

function filterRecipes(recipeList, type) {
    gallery.innerHTML = recipeList.filter(recipe => recipe.type === type).map(formatRecipeCards).join("");
}