//Como listar as propriedades de um objeto, umas das possibilidades é usando FOR..IN
const coolestTvShow1 = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow1) {
  console.log(property);
}

//! FOR..IN é um loop de repetição que itera sobre as propriedades do objeto

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// for (const property in coolestTvShow) {
//   console.log(property);
// }

console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

const student1 = {
  html: "Muito Bom",
  css: "Bom",
  javascript: "Ótimo",
  softskills: "Ótimo",
};

const student2 = {
  html: "Bom",
  css: "Ótimo",
  javascript: "Ruim",
  softskills: "Ótimo",
  git: "Bom", // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(
      `${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`
    );
  }
};

console.log("Estudante 1");
listSkills(student1); // logo em seguida a função lista todas as habilidades do estudante no console.

console.log("Estudante 2");
listSkills(student2);
