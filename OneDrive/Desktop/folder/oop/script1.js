function findCommonWords() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    
    const words1 = text1.toLowerCase().split(' ').filter(word => word);
    const words2 = text2.toLowerCase().split(' ').filter(word => word);
    
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    const commonWords = [];
    for (const word of set1) {
        if (set2.has(word)) {
            commonWords.push(word);
        }
    }

    const resultElement = document.getElementById('result');
    if (commonWords.length > 0) {
        resultElement.innerHTML = `Спільні слова: ${commonWords.join(', ')}`;
    } else {
        resultElement.innerHTML = 'Спільних слів не знайдено';
    }
}