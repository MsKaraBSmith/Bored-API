
let buttonLetsGo = document.getElementById("lets-go");
    console.log(buttonLetsGo);
    buttonLetsGo.addEventListener('click', bustBoredom);
    buttonLetsGo.addEventListener('click', enableButton);



function bustBoredom() {
    let apiURL = "https://www.boredapi.com/api/activity";
    fetch(apiURL)
    .then((response) => response.json())
    .then(result => displayActivityInfo(result))
    .catch((error) => console.log(error));
    console.log('Hey there from bustBoredom() function');
}

const results = document.getElementById('btn-to-top');

function enableButton() {
    document.getElementById('btn-to-top').hidden = false;
}
    


function displayActivityInfo(boredomBuster) {
    console.log(boredomBuster);

    let displayFetch = document.getElementById('results');

    displayFetch.innerText = "";

    let displayActivity = document.createElement('p');
    displayActivity.setAttribute('id', 'display-Activity');
    displayActivity.innerText = boredomBuster.activity;

    let displayType = document.createElement('p');
    displayType.setAttribute('id', 'display-Type');
    displayType.innerText = boredomBuster.type;

    let imageTag = document.createElement('img');
    imageTag.setAttribute('id', 'image-Type');
    imageTag.src = findPhoto(boredomBuster.type);

    displayFetch.appendChild(displayActivity);
    displayFetch.appendChild(displayType);
    displayFetch.appendChild(imageTag);  
};




function findPhoto(displayType) {
    let displayImage = {
        education : "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
        recreational : "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        social : "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        diy : "https://images.unsplash.com/photo-1522065893269-6fd20f6d7438?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGl5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        charity : "https://images.pexels.com/photos/6348129/pexels-photo-6348129.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        cooking : "https://images.unsplash.com/photo-1549590143-d5855148a9d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        relaxation : "https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        music:"https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        busywork : "https://images.unsplash.com/photo-1547480053-7d174f67b557?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    };

    if (displayImage.hasOwnProperty(displayType)) {
        return displayImage[displayType];
    } else {
        return "";
    }
};


