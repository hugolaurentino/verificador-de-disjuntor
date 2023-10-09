const disjuntores = [false, false, true, false, false, true, false, false];
const disjuntores1 = [false, true, true, false, false, true, false, false, true, true];

const ligados1 = []
for (let index = 0; index < disjuntores1.length; index++) {
    if (disjuntores1[index]) {
        ligados1.push(index);
    }
}

const ligados = []
let total = 0
for (const funcionando of disjuntores) {
    if (funcionando) {
        ligados.push(total);
    }
    total++
}
console.log(ligados1);
console.log(ligados);