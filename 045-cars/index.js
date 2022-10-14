const describe_car = (manufacturer,model,...args) => {
    const obj = {
        manufacturer,
        model
    }
    for (let arg in args) {
        obj[Object.keys(args[arg])[0]] = Object.values(args[arg])[0]
    }
    return obj;
}
console.log(describe_car('Honda','BR-V',{'color':'White'},{'mileage':'500'}))