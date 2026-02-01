export function getAllCharacters(word, usedLetters) {
    // THIS FUNCTION WILL RETURN A STRING WITH ALL THE CHARACTERS OF THE WORD THAT HAVE GUESSED SO FAR
    usedLetters = usedLetters.map(letter => letter.toUpperCase());//['b','e']->['B','E']
    const guessedLetters = new Set(usedLetters);//{'B','E'}
    const characters = word.toUpperCase().split("").map(char => {
        if (guessedLetters.has(char)) {
            return char;
        }
        return "_"

    }
    );//['_', '_',' _' ,'B', '_', 'E' ]
    return characters.join("")//___B_E 
}