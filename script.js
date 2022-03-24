const calcNumbers = (string) => {
        let newstring = string.replace(/÷/g , '/'); newstring = newstring.replace(/x/g ,'*')
        result = eval(newstring)
        return result
}

const getNumber = (n) => {
    if(true){
        let print = document.getElementById("result")
        print.innerHTML += n
    }
}

const clearFields = (n) => {
    if(n == 1){
        let clearField = document.getElementById("result")
        clearField.innerHTML = clearField.innerHTML.slice(0,-1)
    }else{
        document.getElementById("result").innerHTML = ''
        document.getElementById("account").innerHTML = ''
    }
}

const equal = () => {
    let value = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = calcNumbers(value)
    document.getElementById("account").innerHTML = value
}