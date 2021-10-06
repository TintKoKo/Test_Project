import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

interface contactType {
  id: string;
  name: string;
  phoneNumber: string;
}
export const useContacts = () => {
  const [data, setData] = useState<contactType[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        let contactsList = [];
        for (let i = 0; i < data.length; i++) {
          const phNos = data[i].phoneNumbers;
          if (phNos && phNos.length > 0) {
            for (let j = 0; j < phNos.length; j++) {
              contactsList.push({
                id: phNos[j].id,
                name: data[i].name,
                phoneNumber: phNos[j].number,
              } as contactType);
            }
          }
        }
        setData([...contactsList]);
      } else {
        alert("Allow app to access the contacts.");
      }
    })();
  }, []);

  return { data };
};
