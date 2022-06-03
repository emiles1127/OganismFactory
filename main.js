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

//My Code Starts Below
const pAequorFactory = (num, strand) => {
  return {
    specimenNum : num,
    dna : strand,
    mutate () {
      let i = Math.floor(Math.random()*15);
      let mutation = returnRandBase();
      if (this.dna[i] !== mutation) {
        this.dna[i] = mutation;
      } else {
        let mutation2 = returnRandBase();
        mutation == mutation2 ? console.log('Mutation Failed! Try Again.') : this.dna[i] = mutation2;
      }
    },
    compareDNA (newObj) {
      let matching = 0;
      for (let i=0; i < 15; i++) {
        newObj.dna[i] == this.dna[i] ? matching++ : matching += 0;
      }
      console.log(matching);
      let result = Math.floor((matching/15)*100);
       console.log(`Specimen #${this.specimenNum} and Specimen #${newObj.specimenNum} have ${result}% DNA in common!`);
    },
    willLikelySurvive () {
      let good = 0;
      for (let j=0; j<15; j++) {
        this.dna[j] == 'C' ? good++ : good += 0;
        this.dna[j] == 'G' ? good++ : good += 0;
      }
      if ((good/15)*100 > 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand () {
      let strand2 = [];
      for (let n = 0; n < 15; n++) {
        if (this.dna[n] == 'C') {
          strand2.push('G');
        } else if (this.dna[n] == 'G') {
          strand2.push('C');
        } else if (this.dna[n] == 'A') {
          strand2.push('T');
        } else {
          strand2.push('A');
        }
      }
      console.log(strand2);
    }
  }
};

let surviveArray = [];
for (let k = 1; k > 0; k++) {
  let org = pAequorFactory(k, mockUpStrand());
  if (org.willLikelySurvive(org.dna) == true) {
    surviveArray.push(org);
  }
  if (surviveArray.length == 30) {
    break;
  }
};


let org1 = pAequorFactory(1, mockUpStrand());
console.log(org1.dna);
console.log(org1.complementStrand());