// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, dna, compared) => {
  // number += 1;
  dna = mockUpStrand();
  // console.log(dna);

  const mutate = () => {
    dna[Math.floor(Math.random() * 15)] = mockUpStrand()[Math.floor(Math.random()*15)]
    return dna
  };

  const compareDNA = (pAequor) => {
    
  }
  return {specimenNum: number, dna: mutate(), compared: compareDNA()}
}




console.log(pAequorFactory(1, mockUpStrand()), 0);







