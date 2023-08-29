const loadPhone = async(searchText=5) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhone(phones);
}

const displayPhone = phones =>{
 

    const phoneId = document.getElementById('phone-container');
    // clear previus content when you search new content 
    phoneId.textContent = "";

    // display show all button if there are more thn 12 product 
const showAllcontainer = document.getElementById('show-all')
    if(phones.length > 12){
      showAllcontainer.classList.remove('hidden')
    } else{
        showAllcontainer.classList.add('hidden')
    }


    //  only show 10 product for user 
    phones = phones.slice(0,10);
    phones.forEach(phone =>{
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card card-compact w-96 bg-base-100 shadow-xl p-[15px] border border-[#CFCFCF]`;
        phoneCard.innerHTML = `
        <figure class="py-4 px-5 bg-gray-400"><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body flex justify-center items-center my-2">
          <h2 class="card-title text-[#403F3F] font-bold text-[25px]">${phone.phone_name}</h2>
          <p class="text-[#706F6F] text-center">There are many variations of passages of available, but the majority have suffered</p>

          <h2 class="text-[#403F3F] font-bold text-[25px] my-2">$899</h2>
          <div class="card-actions justify-end">
            <button onclick="showDeatils('${phone.slug}')" class="btn btn-primary">Show Details</button>
          </div>
        </div>
        
        
        
        `
        phoneId.appendChild(phoneCard);


    });
    // loading spinner hide 
    loadingSpinner(false);

}


const showDeatils= async(id) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone = data.data;
  console.log(phone)
  showmodalDisplay(phone)
}

const showmodalDisplay = (phone) =>{
  my_modal_5.showModal();
  const showDetailsContainer = document.getElementById('modalDisplay-container');
  showDetailsContainer.innerHTML=`
  <div class="bg-[#f3f7ff] p-2 w-full flex justify-center text-left items-center">
  <img src="${phone.image}" alt="images">
</div>

<h3 class="font-bold my-2 text-lg text-left">${phone.name}</h3>
<p class="py-4"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
<div class="text-left"> 
<p><span class="text-1xl font-medium">Brand: </span>${phone.brand}</p>
<p><span class="text-1xl font-medium">Storage: </span>${phone.mainFeatures.storage}</p>
<p><span class="text-1xl font-medium">Display Size: </span>${phone.mainFeatures.displaySize}</p>

<p><span class="text-1xl font-medium">Chipset: </span>${phone.mainFeatures.chipSet}</p>
<p><span class="text-1xl font-medium">Memory: </span>${phone.mainFeatures.memory}</p>
<p><span class="text-1xl font-medium">Sensors: </span>${phone.mainFeatures.sensors}</p>
<p><span class="text-1xl font-medium">Release date: </span>${phone.releaseDate}</p>
<p><span class="text-1xl font-medium">slug: </span>${phone.slug}</p>
<p><span class="text-1xl font-medium"> Bluetooth: </span>${phone.others.Bluetooth}</p>
<p><span class="text-1xl font-medium"> GPS: </span>${phone.others.GPS}</p>
<p><span class="text-1xl font-medium"> NFC: </span>${phone.others.NFC}</p>
<p><span class="text-1xl font-medium"> Radio: </span>${phone.others.Radio}</p>
<p><span class="text-1xl font-medium"> USB: </span>${phone.others.USB}</p>
<p><span class="text-1xl font-medium"> WLAN: </span>${phone.others.WLAN}</p>
</div>


<div class="modal-action flex justify-end items-end ">
<!-- if there is a button in form, it will close the modal -->
<button class="btn btn-warning">Close</button>
</div>
  
  
  `
}





// search button add with find any collection 

const findPhone = () =>{
  loadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText)
    searchField.value = "";
}



// loading spinner 

const loadingSpinner= (isLoading) =>{
  const load = document.getElementById('loading');
 if(isLoading){
  load.classList.remove('hidden');
 }else{
  load.classList.add('hidden')
 }
}




loadPhone()