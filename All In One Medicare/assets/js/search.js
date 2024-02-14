// let availableKeywords = [
//     //     'HTML',
//     //     'CSS',
//     //     'Code Artistic',
//     // '    Web Design Tutorial',
//     //     'JavaScript',
//     //     'Where to learn coding online',
//     //    ' Where to learn Web design',
//     //     'Where to learn a Website',
//     //     'Where to learn HTML',
//         'sanjivani hospital',
//         'sara',
//         'sima',
//         'sita',
//     ];
    
//     const resultbox = document.querySelector('.result-box');
//     const inputBox = document.getElementById('input-box');
    
//     inputBox.onkeyup = function(){
//         let result = [];
//         let input = inputBox.value;
//         if(input.length){
//             result = availableKeywords.filter((keyword)=>{
//                return keyword.toLowerCase().includes(input.toLowerCase());
//             });
//             console.log(result);
//         }
//         display(result);
    
//         if(!result.length){
//             resultbox.innerHTML = '';
//         }
//     }
    
//     function display(result){
//         const content = result.map((list)=>{
//             return "<li onclick=selectInput(this)>" + list + "</li>";
    
//         });
    
//         resultbox.innerHTML = "<ul>" + content.join('')  + "</ul>" 
//     }
//     function selectInput(list){
//         inputBox.value = list.innerHTML;
//         resultbox.innerHTML = '';
//     }

let suggestions = [   
    "Sanjivani Hospital, Near Data Mandir, Virar (W)",
    "Arogya Pharma,Karadi Wadi, Vasai (W)",
    "Sankhe Maternity Hospital, Vishwakarma Estate, Vasai (W)",
    "Dr Kale Hospital, Suyog Nagar, Vasai (W)",
    "Vaarush Multispeciality Hospital & Icu Nallsopara (W)",
    "Shree Balaji Hospital Virar (E)",
    "Om Sai Hospital Nallsopara (E)",
    "K & K SUPERSPECIALITY HOSPITAL Nallsopara (E)",
    "Care N Cure Multispeciality Hospital Nallsopara (E)",
    "Sopara Multispeciality Hospital Nallsopara (E)",
    "Meera Orthopaedic & Multispeciality Hospital Nallospara (E)",
    "Arise Hospital & ICU Nallsopara (W)",
    "Lifecare Charitable Hospital Nallsopara (E)",
    "Badar Multispeciality Hospital Nallsopara (W)",
    
];

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
