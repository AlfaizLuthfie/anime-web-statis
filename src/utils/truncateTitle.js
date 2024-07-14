function truncateTitle (title) {
    if (title.length <= 30){
        return title;
    }
    return title.slice(0,50) + '...';
};

export default truncateTitle;