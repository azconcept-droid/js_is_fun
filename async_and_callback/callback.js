const doSomething = (callback) => {
    let result = 'I am in callback'
    callback(result)
}

doSomething((result) => {
    console.log(result)
})