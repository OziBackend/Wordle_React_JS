var getWord = async (Data) => {
    return Data[Math.floor(Math.random() * Data.length)];
}


export {
    getWord
};