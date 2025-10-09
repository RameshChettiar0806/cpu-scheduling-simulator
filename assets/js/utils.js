const utils = (() => {
    const getRandomColor = () => {
        return `hsl(${Math.random() * 360}, 70%, 50%)`;
    };
    return {
        getRandomColor
    };
})();