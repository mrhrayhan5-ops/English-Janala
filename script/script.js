const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
        .then((res) => res.json()) //promise of json data
        .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    words.forEach(word => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-lg shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="text-2xl font-bold">${word.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="text-xl font-medium font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF15] hover:bg-[#1A91FF70]"><i class="fa-solid fa-volume-high"></i></button>
                <button class="btn bg-[#1A91FF15] hover:bg-[#1A91FF70]"><i class="fa-solid fa-circle-info"></i></button>
            </div>
        </div>
        `;
        wordContainer.append(card);
    });
}

const displayLesson = (lessons) => {

    //1. get the container & empty

    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    //2. get into every lesson

    for (let lesson of lessons) {

        //3. create element

        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `

        //4. append into container

        levelContainer.append(btnDiv);
    }
}

loadLessons();