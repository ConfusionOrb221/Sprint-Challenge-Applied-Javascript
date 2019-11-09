// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        response.data.topics.forEach(i => {
            const tab = document.createElement('div');
            tab.className = 'tab';
            tab.textContent = i;
            
            if(i.toLocaleLowerCase() === 'node.js'){
                tab.dataset.tab = 'node';
            }
            else{
                tab.dataset.tab = i;
            }
            tab.addEventListener('click', changeCards);
            topics.append(tab);
        });
    })
    .catch(err => console.log(err));

function changeCards(event){
    const cards = document.querySelectorAll('.card');
    console.log(cards);
    cards.forEach(i =>{
        console.log(i.dataset.type);
        console.log(event.target.getAttribute('type'));
        if(i.dataset.type === event.target.dataset.tab){
            i.style.display = 'flex';
        }
        else{
            i.style.display = 'none';
        }
    });
}
