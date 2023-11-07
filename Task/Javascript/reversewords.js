function reverseWords(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
}

const inputSentence = prompt("Enter a sentence:");
const reversed = reverseWords(inputSentence);
console.log(reversed);
