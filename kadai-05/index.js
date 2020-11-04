const profile = {
    name: 'Ranjiro Hayashi' ,
    age: 23 ,
    hobby: 'MOTO Touring' ,
    major: 'Literature'
}

delete profile.hobby

const props = Object.keys(profile)

props.forEach(props =>{
    console.log('私の'+props+'は'+profile[props]+'です')
})