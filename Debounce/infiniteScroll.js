let page = 1;

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

const fetchData = () => {
    return Array.from({length: 100}).forEach((_,index) => {
        generateItems(index+1)
    })
}

const generateItems = (index) => {
    if (!isNaN(index)) {
        const modIndex = (page-1)*100 + index;
        const itemDiv = document.createElement('div')
        itemDiv.className = 'item'
        itemDiv.innerText = `Item-${modIndex}`
        document.getElementById('content').appendChild(itemDiv)
    }
}

fetchData();

const loadMoreDataOnScroll = debounce(async () => {
    const data = fetchData()
    generateItems(data);
}, 500)

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        page++;
        loadMoreDataOnScroll()
    }
})