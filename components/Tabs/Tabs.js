class TabLink {
  constructor(tabElement){

    this.tabElement = element;
    this.tabData = this.element.dataset.tab;
  
    if(this.tabData === 'all'){
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab="${data}"]`);

      this.cards = Array.from(this.cards).map(card => new TabCard(card));

      this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab(){
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => tab.classList.remove('active-tab'));

    const tabs = document.querySelectorAll('.card');

    cards.forEach(card => card.style.display = 'none');

    this.tabElement.classList.add('active-tab');

    this.cards.forEach(card => card.selectCard());

  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    // this.cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
  }

}

let tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab => new TabLink(tab));