import { useEffect, useState } from "react";

import {
  Timestamp,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase";

const Words = () => {
  // console.log(firestore);
  // const cafeRef = doc(firestore, "cafeNmarketRank");
  const cafeRef2 = doc(firestore, "cafeNmarketRank", "Rh58NTmUDfpfzTUc0ppE");
  // console.log(cafeRef);
  console.log(cafeRef2);
  const cafeNmarketRank = firestore.collection("cafeNmarketRank");
  console.log("cafeNmarketRank===>", cafeNmarketRank);
  cafeNmarketRank
    .doc("Rh58NTmUDfpfzTUc0ppE")
    .get()
    .then((doc) => {
      console.log("doc ===>", doc);
      console.log("doc.data() ===>", doc.data());
      // console.log("doc.id ===>", doc.id);
      // console.log("doc.benefitRank ===>", doc.benefitRank);
    });
  const docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
      a: 15,
      b: {
        nested: "foo",
      },
    },
  };
  setDoc(doc(firestore, "data", "one2"), docData);
  // const userRef = collection(firestore, "cafeNmarketRank"); // 참조
  // const [fireData, setFireData] = useState(null);
  // const getData = async () => {
  //   console.log("getData 데이터 불러오기 시도");
  //   await getDocs(userRef)
  //     .then((res) => {
  //       console.log("res ====>", res);
  //       setFireData(
  //         res.docs.map((data) => {
  //           return { ...data.data(), id: data.id };
  //         })
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   console.log("getData=====>start");
  //   getData();
  //   console.log("getData=====>end");
  //   console.log(fireData);
  // }, []);
  // const firestoreService = require("firestore-export-import");
  // const firebaseConfig = require("../firebase");
  // // const firebaseConfig = require("./config.js");
  // const serviceAccount = require("../firebase/cardBenefit.json");
  // // const serviceAccount = require("./serviceAccount.json");

  // // JSON To Firestore
  // const jsonToFirestore = async () => {
  //   try {
  //     console.log("Initialzing Firebase");
  //     await firestoreService.initializeApp(
  //       serviceAccount,
  //       firebaseConfig.databaseURL
  //     );
  //     console.log("Firebase Initialized");

  //     await firestoreService.restore("./data-clean/firebase/users.json");
  //     console.log("Upload Success");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // jsonToFirestore();

  return (
    <div>
      {/* <Card>
        <CardContent>
          <Typography> */}
      {/* {cardAll.map((item) => {
        console.log(item);
      })} */}
      word
      {/* </Typography>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Words;
