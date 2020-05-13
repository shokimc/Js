/***************************************
*
 * SAP Community Coding Challenge Nr2
 * Laura López Burgos
 *
 **************************************/
let nNumSteps = 0,
	nCount = 0,
	nResult,
	nMax = 0,
	nLoop = 0;

while (nMax < 1000000) {
	nLoop = nMax;
	nCount = 0;
	while (nLoop > 1) {
		nLoop % 2 == 0 ? nLoop = nLoop / 2 : nLoop = 3 * nLoop + 1;
		nCount = nCount + 1;
	}
	if (nNumSteps < nCount) {
		nNumSteps = nCount;
		nResult = nMax;
	}
	nMax = nMax + 1;
}

console.log("\nLa solución es", nResult, "en", nNumSteps, "pasos.");
