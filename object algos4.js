
/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
      name: "Sulforaphane",
      treatableSymptoms: [
        "dementia",
        "alzheimer's",
        "cancer",
        "inflammation",
        "neuropathy",
      ],
    },
    {
      name: "Longvida Curcumin",
      treatableSymptoms: [
        "pain",
        "inflammation",
        "depression",
        "arthritis",
        "anxiety",
      ],
    },
    {
      name: "Hericium erinaceus",
      treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
    },
    {
      name: "Nicotinamide mononucleotide",
      treatableSymptoms: [
        "ageing",
        "low NAD",
        "obesity",
        "mitochondrial myopathy",
        "diabetes",
      ],
    },
    {
      name: "PainAssassinator",
      treatableSymptoms: [
        "pain",
        "inflammation",
        "cramps",
        "headache",
        "toothache",
        "back pain",
        "fever",
      ],
    },
  ];

  /*
  Input: ailments1, medications
  Output: ["PainAssassinator", "Longvida Curcumin"]
  */
  const ailments1 = ["pain"];

  /*
  Input: ailments2, medications
  Output: ["Longvida Curcumin"]
  */
  const ailments2 = ["pain", "inflammation", "depression"];

  /*
  Input: ailments3, medications
  Output: []
  */
  const ailments3 = ["existential dread"];


  function getMeds(ailments, meds) {
      // set a max
      let maxSymptomMatchCount = 0;

      // set a map
      const ailmentsMap = {};
      let matchedMeds = [];

      // create map of ailments to avoid relooping
      for(const ailment of ailments) {
        ailmentsMap[ailment] = true;
      }

      // loop your meds..
      for (const med of meds) {
          let symptomsMatchCount = 0;

          // loop the symptoms of each med...
          for (const symptom of med.treatableSymptoms) {
              // check if symptom is in our ailmentsMap
              if(ailmentsMap.hasOwnProperty(symptom)) { // 0(1)
                  symptomsMatchCount++;
              }
          }

          // so we matched symptoms from our ailment to this med...
          if (symptomsMatchCount > 0) {
            // if they're equal to our max, add the med, it's good
            if (symptomsMatchCount === maxSymptomMatchCount){
                matchedMeds.push(med.name);
            // if they're more than our max...
            }else if (symptomsMatchCount > maxSymptomMatchCount) {
                // update the max, toss the entire old array of matched meds
                // start a new array with this better med as the first element
                maxSymptomMatchCount = symptomsMatchCount;
                matchedMeds = [med.name];
            }
          }
      }
      return matchedMeds;
  }


  // runtime O(n * m)
  // where n is the ailments
  // and m is the number of medications