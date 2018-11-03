let str = "function(''){\"\"}[``]";

validSequence = (string) => {
    let stack = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '[' || string[i] === '(' || string[i] === '{' || string[i] === '\'' && stack.indexOf('\'') === -1 || string[i] === '"' && stack.indexOf('"') === -1 || string[i] === '`' && stack.indexOf('`') === -1) { // если на входе скобка открыв.,
            stack.push(string[i]); //то добавляем в стэк
        } else if (string[i] === ']' || string[i] === ')' || string[i] === '}' || string[i] === '\'' || string[i] === '"' || string[i] === '`') { //если на входе закрыв. скобка
            if (stack.length > 0) { // и стэк не пустой
                stack.pop(); //удаляем скобку
            } else return false  //если закрывающаяся на входе и стэк пустой
        }
    }
    return stack.length === 0; //если на выходе стэк пустой то всё совпадает
};

console.log(validSequence(str));
