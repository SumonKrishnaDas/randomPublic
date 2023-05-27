
const loadUser =() =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then( data => displayUser(data) )



}


const displayUser = user =>{
    console.log(user)

    const genderTag = document.getElementById('gender');

    genderTag.innerHTML=user.results[0].gender

    const nameTag = document.getElementById('name');
    nameTag.innerHTML= user.results[0].name.title +' '+user.results[0].name.first +' '+user.results[0].name.last;
    const location = document.getElementById('location');
    location.innerHTML = user.results[0].location.city ;
    const img = document.getElementById('img');
    img.src = user.results[0].picture.large;
 


}



loadUser()


