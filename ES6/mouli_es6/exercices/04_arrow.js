
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 */

const arrow1 = (arg) => {return arg + 1};

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 *   - le mot clée "return" est interdis
 */

const arrow2 = (arg) => arg + 1;

console.log("Résultat d'arrow1 :" + arrow1(10));

console.log("Résultat d'arrow2 :" + arrow2(10));

module.exports = {arrow1, arrow2};