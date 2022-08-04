const Random = document.querySelector("#btn-random")
const imgprofile = document.querySelector("#img-profile")
const namee = document.querySelector("#p-name")
const email = document.querySelector("#p-email")
const address = document.querySelector("#p-address")
const uc = document.querySelector("#div-user-card")
const lopro = document.querySelector("#div-loading-card")
const gender = document.querySelector("#span-gender-icon")

callApi();

async function callApi() 
{
  uc.style.display = "none";
  lopro.style.display = "";

  const resp = await axios.get("https://randomuser.me/api/");

  uc.style.display = "";
  lopro.style.display = "none";

  const data = resp.data.results[0]
  imgprofile.src = data.picture.large;
  namee.innerText = `${data.name.first} ${data.name.last}` ;
  address.innerText =  `${data.location.city} ${data.location.state}${data.location.country} ${data.location.postcode}`;
  email.innerText = data.email;

  if(resp.data.results[0].gender === "male") 
  {
    gender.innerText = "👨";
  }
  else
  {
    gender.innerText = "👩";
  }


}

Random.onclick =  async ()=>
{
  callApi();
};
