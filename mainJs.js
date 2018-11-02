let str = "function(){}[]";

validSequence = (string) => {
    let stack = [];

    for (let i = 0; i < string.length; i++) {
        //console.log(string[i])
        if (string[i] === '[' || string[i] === '(' || string[i] === '{') { // если на входе скобка открыв.,
            stack.push(string[i]); //то добавляем в стэк
            //console.log(stack)
        } else if (string[i] === ']' || string[i] === ')' || string[i] === '}') { //если на входе закрыв. скобка
            if (stack.length > 0) { // и стэк не пустой
                stack.pop(); //удаляем скобку
            } else return false  //если закрывающаяся на входе и стэк пустой
        }
    }
    return stack.length === 0; //если на выходе стэк пустой, то последовательность правильная
};

console.log(validSequence(str)); //true
