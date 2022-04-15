function checkProvadier(
    cardnumber,
    cardsRequirementsArray
    // in first verion i used this kind of destictirazation { Mastercard, Visa, AmericanExpress }
    //but i resigne from it, and chose a Array with object
    //this first opction bloced adding another cards requirements
  ) {
    let provaiderfromloop = "unknown";
    for (card of cardsRequirementsArray) {
      for (startnum of card.startNumbers) {
        const cutstartofcard = String(cardnumber).slice(
          0,
          String(startnum).length
        );
        if (
          cutstartofcard == startnum &&
          card.numberLength.includes(String(cardnumber).length)
        ) {
          provaiderfromloop = card.name;
        }
      }
    }
    //if metohod
    //first method used object as a cardRequirements
    //i change it into loop from array becasue when u add another card Requerments this one will not woked
    // let provaider = "unknown";
    // const firstDigitNum = Number(String(cardnumber).slice(0, 1));
    // const first2DigitNum = Number(String(cardnumber).slice(0, 2));
    // if (
    //   Mastercard.startNumbers.includes(first2DigitNum) &&
    //   String(cardnumber).length == Mastercard.numberLength
    // ) {
    //   provaider = Mastercard.name;
    // } else if (
    //   (Visa.startNumbers.includes(firstDigitNum) &&
    //     String(cardnumber).length == Visa.numberLength[0]) ||
    //   String(cardnumber).length == Visa.numberLength[1]
    // ) {
    //   provaider = Visa.name;
    // } else if (
    //   AmericanExpress.startNumbers.includes(first2DigitNum) &&
    //   String(cardnumber).length == AmericanExpress.numberLength
    // ) {
    //   provaider = AmericanExpress.name;
    // }
    return provaiderfromloop;
  }
  
  //algoritm to check card valdiaton
  function luhna(cardnumber) {
    const reversearrya = String(cardnumber).split("").reverse();
    let sumofnumbers = 0;
    reversearrya.forEach((number, index) => {
      if (index % 2 == 1 && index > 0) {
        let numberx2 = number * 2;
        let arraynumx2 = String(numberx2).split("");
        sumofnumbers += Number(arraynumx2[0]);
        if (typeof arraynumx2[1] !== "undefined") {
          sumofnumbers += Number(arraynumx2[1]);
        }
      } else {
        sumofnumbers += Number(number);
      }
    });
    if (sumofnumbers % 10 == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  
  function cardValidtor(cardnumber, repeat) {
    let counter = false
    // cardnumber = prompt.get("Brak numeru karty, proszę podaj nr. karty");
  
    //object to first metohod used if
    //i resigned of this method
    // const cardsRequirementsObject = {
    //   Mastercard: {
    //     name: "Mastercard",
    //     numberLength: [16],
    //     startNumbers: [51, 52, 53, 54, 55],
    //   },
    //   Visa: {
    //     name: "Visa",
    //     numberLength: [13, 16],
    //     startNumbers: [4],
    //   },
    //   AmericanExpress: {
    //     name: "AmericanExpress",
    //     numberLength: [15],
    //     startNumbers: [34, 37],
    //   },
    // };
  
    const cardsRequirementsArray = [
      {
        name: "Mastercard",
        numberLength: [16],
        startNumbers: [51, 52, 53, 54, 55],
      },
      {
        name: "Visa",
        numberLength: [13, 16],
        startNumbers: [4],
      },
      {
        name: "AmericanExpress",
        numberLength: [15],
        startNumbers: [34, 37],
      },
    ];
  
    const provaider = checkProvadier(cardnumber, cardsRequirementsArray); //to use if method place in check provider cardsRequirementsObject
  
    if (provaider !== "unknown") {
      const isvalid = luhna(cardnumber);
      if (isvalid == true) {
        console.log(
          `Karta nr. ${cardnumber} Wystawca karty ${provaider}, numer karty jest poprawny.`
        );
      } else {
        console.log(
          `Wystawca karty nr. ${provaider}, ale numer karty jest niepoprawny.`
        );
      }
    } else {
      console.log(`Wystawca karty nr. ${cardnumber} nieznany.`);
    }
  //if maded for node.js, while infinite while loop on the end dont work.
    if (cardnumber == false || repeat) {
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.question('Podaj nr. karty ', card => {
        readline.close();
        cardValidtor(card, true)
      });
    }
  }
  
  console.log(
    "Walidator kart sprwadza porpawność kart, w momencie odaplenia sprawdza nr. przekazany do funkcji w formie:"
  );
  cardValidtor(5193080150954111, ); //mastercard
  cardValidtor(4012888888881881, ); //visa
  cardValidtor(378282246310005, ); //amercianexpress
  cardValidtor(519308015095411, ); //niepoprawna
  cardValidtor(5111111111111111, ); //niepoprawna
  console.log("W przypadku braku karty program poprosi o nią:");
  cardValidtor( "" ,true); //podaj nr. karty
  