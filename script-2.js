const petsModule = (function () {
    const _data = [
        {
            image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
            name: "Sam",
            type: "Golden Retriever/St. Bernard Mix",
            sound: "bark",
            soundText: "Bark - type b"
        },
        {
            image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
            name: "Mellie",
            type: "Domestic Shorthair",
            sound: "meow",
            soundText: "Meow - type m"
        }
    ];
    const $tbodyEl = document.querySelector("tbody");
    const $buttons = document.querySelectorAll("button");

    const getButtons = function () {
        return document.querySelectorAll("button");
    }

    const createPetElement = function (pet) {
        return "<tr class='pet-row'><td><img class='pet-image' src='" + pet.image + "' /></td><td>" + pet.name + "</td><td>" + pet.type + "</td><td><button data-sound='" + pet.sound + "'>" + pet.soundText + "</button></td></tr>"
    };

    const addToTable = function (content) {
        $tbodyEl.innerHTML += content;
    }

    const putPetsInHtml = function () {
        for (let i = 0; i < _data.length; i++) {
            addToTable(createPetElement(_data[i]));
        }
    }

    const bindEvents = function () {
        const buttons = getButtons();
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function (event) {
                event.stopPropagation();
                const soundId = this.dataset.sound;
                const soundElement = document.getElementById(soundId);
                if (soundElement) {
                    soundElement.play();
                }
            });
        }
    }

    const bindBarkTypeEvent = function () {
        let bark = document.querySelector('#bark');

        document.addEventListener('keydown', (e) => {
            if (e.code == 'KeyB') {
                bark.play();
            }
        })
    }

    const bindMeowTypeEvent = function () {
        let meow = document.querySelector('#meow');

        document.addEventListener('keydown', (e) => {
            if (e.code == 'KeyM') {
                meow.play();
            }
        })
    }

    const changeRowColorAndImg = function () {
        let petRow = document.querySelectorAll('.pet-row');

        for (let i = 0; i < petRow.length; i++) {
            petRow[i].addEventListener("click", function (e) {
                if (petRow[i].style.backgroundColor) {
                    petRow[i].style.backgroundColor = "";
                } else {
                    petRow[i].style.backgroundColor = "red";
                }
                let mainImg = document.querySelector('.main-image');
                let childImgSrc = petRow[i].childNodes[0].firstChild.currentSrc

                mainImg.setAttribute("src", childImgSrc)
            });
        }


    }

    const init = function () {
        putPetsInHtml();
        bindEvents();
        bindBarkTypeEvent();
        bindMeowTypeEvent();
        changeRowColorAndImg();
    }

    return {
        init: init
    }
})();