

export function emailValidation(email){
    let regExp = /^[a-z]+[0-9]*@[a-z A-Z]+[.]+[a-z]+$/

    let res = regExp.test(email);

    return res;
}

export function passwordValidation(pasword){
   let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&]{8,}$/

    let res = regExp.test(pasword);

    return res;
}