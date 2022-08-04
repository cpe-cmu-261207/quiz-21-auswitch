const Random = document.querySelector("#btn-random")
const imgprofile = document.querySelector("#img-profile")
const namee = document.querySelector("#p-name")
const email = document.querySelector("#p-email")
const address = document.querySelector("#p-address")
const uc = document.querySelector("#div-user-card")



async function callApi() 
{
  const resp = await axios.get("https://randomuser.me/api/");
}

callApi();

Random.onclick = () =>
{
  uc.style.display = "none";
  namee.innerText = resp.data.name;
};
