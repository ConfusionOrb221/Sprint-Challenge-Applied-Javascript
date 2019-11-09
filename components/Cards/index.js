// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContent = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
         // this is crazy good code if i dont say so myself
        for (const keys in response.data.articles){
            response.data.articles[keys].forEach(content =>{
                const card = document.createElement('div');
                const headline = document.createElement('div');
                const author = document.createElement('div');
                const imgContainer = document.createElement('div');
                const img = document.createElement('img');
                const authorName = document.createElement('span');

                card.className = 'card';
                card.dataset.type = keys;

                headline.className = 'headline';
                headline.textContent = content.headline;

                author.className = 'author';

                imgContainer.className = 'img-container';
                img.src = content.authorPhoto;

                authorName.textContent = `By ${content.authorName}`;

                card.append(headline);
                imgContainer.append(img);
                author.append(imgContainer);
                author.append(authorName);
                card.append(author);

                cardsContent.append(card);
            });
        }
    })
    .catch(err => console.log(err));
