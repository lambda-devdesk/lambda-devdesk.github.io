class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset;
    this.itemElement = document.querySelector(`.tab[data-tab="${this.data.tab}"]`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    const links = document.querySelectorAll(".tab-links a");
    links.forEach(link => link.classList.remove("link-selected"));

    this.element.classList.add("link-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tab");
    items.forEach(item => item.classList.remove("item-selected"));

    this.element.classList.add("item-selected");
  }
}

links = document.querySelectorAll(".tab-links a");
links.forEach(link => new TabLink(link));
