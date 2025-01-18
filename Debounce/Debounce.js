function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Example usage:
const myDebouncedFunction = debounce(() => {
    console.log('Function executed!');
}, 300);

// Call the debounced function
myDebouncedFunction();