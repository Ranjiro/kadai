const day = parseInt(process.argv[2])
if(day >=21){
    console.log('あなたは勝気な性格です')
}else if(day >=11){
    console.log('あなたはマイペースな性格です')
}else{
    console.log('あなたは内気な性格です')
}