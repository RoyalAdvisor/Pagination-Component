const list_items = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
    "item 11",
    "item 12",
    "item 13",
    "item 14",
    "item 15",
    "item 16",
    "item 17",
    "item 18",
    "item 19",
    "item 20",
]

const list_element = document.querySelector(".list");
const pagination_element = document.querySelector(".pagination");

let current_page = 1;
let rows = 5;

Displaylist = (items,wrapper,rows_per_page,page) => {
    wrapper.innerHTML ="";
    page--;

    let start = rows_per_page * page;
    let end =  start + rows_per_page;
    let paginatedItems = items.slice(start,end);

    for(let i = 0; i < paginatedItems.length; i++){
        let item = paginatedItems[i];

        let item_element = document.createElement("div");
        item_element.classList.add("item");
        item_element.innerText = item;

        wrapper.appendChild(item_element);
    }   
};

SetupPagination = () => {
    let list = document.querySelector(".buttons");
    list.innerHTML = "";
    let page_count = list_items.length / rows;
    for(let i = 1; i <= page_count; i++){
        let btn = PaginationButtons(i);
        list.append(btn);
    }
}

PaginationButtons = (page) => {
    let button = document.createElement('button');
    button.innerText = page;
    button.addEventListener('click', () => {
        current_page = page;
        Displaylist(list_items, list_element,rows,current_page);
    })
    return button;
};



Displaylist(list_items, list_element,rows,current_page);
SetupPagination(list_items,pagination_element,rows);


const btns = document.querySelectorAll('button');
btns.forEach(element => {
    element.addEventListener('click', (e) => {
       btns.forEach(item => {
           item.classList.remove('active')
       })
       e.target.classList.add("active")
    })
})