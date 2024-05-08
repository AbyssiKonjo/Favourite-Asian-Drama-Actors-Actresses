const favourite = [
    {
        name: 'Xu Kai',
        age: '29 Years Old',
        gender: 'Male',
        country: 'Chinese Actor',
        image: './img/xu_kai.jpg' 
    },
    {
        name: 'Cheng Xiao',
        age: '25 Years Old',
        gender: 'Female',
        country: 'Chinese Actress',
        image: './img/cheng_xiao.jpg' 
    },
    {
        name: 'Mook Mookda Narinrak',
        age: '27 Years Old',
        gender: 'Female',
        country: 'Thai Actress',
        image: './img/narinrak.jpg' 
    },
    {
        name: 'Mik Thongraya',
        age: '31 Years Old',
        gender: 'Male',
        country: 'Thai Actor',
        image: './img/mik.jpg' 
    },
    {
        name: 'Yang Mi',
        age: '37 Years Old',
        gender: 'Female',
        country: 'Chinese Actress',
        image: './img/yang_mi.jpg' 
    },
    {
        name: 'Dilraba Dilmurat',
        age: '31 Years Old',
        gender: 'Female',
        country: 'Chinese Actress',
        image: './img/dilraba.jpg' 
    },
    {
        name: 'Gao Wei Guang',
        age: '41 Years Old',
        gender: 'Male',
        country: 'Chinese Actor',
        image: './img/gao.jpg'  
    },
    {
        name: 'Kim So Hyeon',
        age: '25 Years Old',
        gender: 'Female',
        country: 'South Korean Actress',
        image: './img/kim-so-hyun.png.jpeg' 
    },
    {
        name: 'Song Kang',
        age: '30 Years Old',
        gender: 'Male',
        country: 'South Korean Actor',
        image: './img/song_kang.jpg'  
    },
    {
        name: 'Yang Yang',
        age: '32 Years Old',
        gender: 'Male',
        country: 'Chinese Actor',
        image: './img/yang_yang.jpg' 
    },
    {
        name: 'Zhao Li Ying',
        age: '36 Years Old',
        gender: 'Female',
        country: 'Chinese Actress',
        image: './img/zhao.jpg'  
    },
    {
        name: 'Lee Min Ho',
        age: '37 Years Old',
        gender: 'Male',
        country: 'South Korean Actor',
        image: './img/lee-min-ho.jpg'  
    },
    {
        name: 'Mike Angelo',
        age: '34 Years Old',
        gender: 'Male',
        country: 'Thai-Chinese Actor',
        image: './img/mike.jpg' 
    },
    {
        name: 'James Jirayu Tangsrisuk',
        age: '30 Years Old',
        gender: 'Male',
        country: 'Thai Actor',
        image: './img/james.jpg'  
    },
    {
        name: 'Yaya Urassaya Sperbund',
        age: '31 Years Old',
        gender: 'Female',
        country: 'Thai Actress',
        image: './img/yaya.jpg'  
    },
    {
        name: 'Ahn Bo Hyun',
        age: '35 Years Old',
        gender: 'Male',
        country: 'South Korean Actor',
        image: './img/ahn-bo-hyun.jpg'  
    },
    {
        name: 'Um Apasiri Nitibhon',
        age: '52 Years Old',
        gender: 'Female',
        country: 'Thai Actress',
        image: './img/um-apasiri-nitibhon.jpg' 
    },
    {
        name: 'Push Puttichai Kasetsin',
        age: '37 Years Old',
        gender: 'Male',
        country: 'Thai Actor',
        image: './img/push.jpg' 
    },
    {
        name: 'Kao Supassara Thanachart',
        age: '29 Years Old',
        gender: 'Female',
        country: 'Thai Actress',
        image: './img/kao.jpg'  
    },
    {
        name: 'Mark Prin Suparat',
        age: '34 Years Old',
        gender: 'Male',
        country: 'Thai Actor',
        image: './img/mark.jpg'  
    },
]

const results = document.getElementById('results');
const sortButton = document.getElementById('nameButton');
const countryButton = document.getElementById('countryButton');
const ageButton = document.getElementById('ageButton');
const genderButton = document.getElementById('genderButton');

function populateCards(array) {
    results.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        results.innerHTML += `
            <div class="card">
                <img src="${array[i].image}" alt="">
                <div class="card-details">
                    <h3>${array[i].name}</h3>
                    <h4>${array[i].age}</h4>
                    <p>${array[i].country}</p>
                </div>
            </div>
        `
    }
}

populateCards(favourite);

// Sort by Name
function sortbyName() {
    function compareByName(a, b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    }
    const sortedNames = favourite.sort(compareByName);
    console.log(sortedNames);
    populateCards(sortedNames);
}

sortButton.addEventListener('click', function() {
    console.log('sort button working');
    sortbyName();
});

// Sort by Country
function sortbyCountry() {
    function compareByCountry(a, b) {
        return a.country.toLowerCase().localeCompare(b.country.toLowerCase());
    }
    const sortedCountries = favourite.sort(compareByCountry);
    populateCards(sortedCountries);
}

countryButton.addEventListener('click', function() {
    console.log('country button working');
    sortbyCountry();
});

// Sort by Age
function sortbyAge() {
    function compareByAge(a, b) {
        const ageA = parseInt(a.age);
        const ageB = parseInt(b.age);
        return ageA - ageB;
    }
    const sortedAges = favourite.sort(compareByAge);
    populateCards(sortedAges);
}

ageButton.addEventListener('click', function() {
    console.log('age button working');
    sortbyAge();
});

// Sort by Gender
function sortbyGender() {
    function compareByGender(a, b) {
        return a.gender.toLowerCase().localeCompare(b.gender.toLowerCase());
    }
    const sortedGenders = favourite.sort(compareByGender);
    populateCards(sortedGenders);
}

genderButton.addEventListener('click', function() {
    console.log('gender button working');
    sortbyCountry();
});
