import { View } from "react-native";
import * as Contacts from "expo-contacts";

export default async function GetContact() {
  let all_contact = [];
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === "granted") {
    const { data } = await Contacts.getContactsAsync();
    if (data.length > 0) {
      // console.log(data.length);
      // Save the contacts to state
      // let all_contact = [];
      for (let i = 0; i < data.length + 1; i++) {
        let contact = {};
        let name = "";
        let numbers = [];
        if (data[i].lastName) {
          name = data[i].firstName + " " + data[i].lastName;
        } else {
          name = data[i].firstName;
        }
        let numbers_count = data[i].phoneNumbers.length;
        var number_set = new Set();
        for (let j = 0; j < numbers_count; j++) {
          var num = data[i].phoneNumbers[j].number;
          if (num.charAt(0) == "+") {
            num = num.replace("+91", "");
            num = num.replace(/\s/g, "");
          }
          if (num.length <= 10) {
            if (number_set.has(num) == false && num != false) {
              number_set.add(num);
              numbers.push(num);
            }
          }
        }
        if (numbers.length > 0) {
          contact["name"] = name;
          contact["numbers"] = numbers;
        }
        all_contact.push(contact);
      }

      return all_contact;
    }
  }
}
