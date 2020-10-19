1. Write a function that takes a string and reverses it.

   ``` reverseWord('hello') // olleh
       reverseWord('world') // dlrow ``.


const reverseWord = (str) => {
    const reversed = str.split('').reverse().join('')
    console.log(reversed)
}
reverseWord('hello') // olleh
reverseWord('world') // dlrow
