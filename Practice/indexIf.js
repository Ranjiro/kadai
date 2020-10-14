const max = parseInt(process.argv[2])

for (let n = 1;n < 100; n = n + 1){
    if (n % 10 ===3){
        console.log(n +　'は下一桁が３の数字です')
    }else{
        console.log(n)
    }
}