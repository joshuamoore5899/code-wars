// Complementary DNA
//
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
// If you want to know more: http://en.wikipedia.org/wiki/DNA
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//
// Example: (input --> output)
//
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// P - string, either "A", "T", "C", "G", "A" complements "T" and "C" complements "G"
// R - return complementary strings
// E - input - "AAA", return - "TTT", input "ACGT", return - "TGCA"
// P - create ans variable as empty string
//   - create object with letters and their complements as key value pairs
//   - loop through input string
//   - for each element add complement from object to ans variable
//   - return ans

function DNAStrand(dna){
  let ans = "";
  let complement = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  for (let i = 0; i < dna.length; i++) {
    ans += complement[dna[i]]
  }

  return ans;
}
