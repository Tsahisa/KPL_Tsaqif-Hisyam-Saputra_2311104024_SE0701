import fs from "fs";

class AnggotaTim2311104024 {
  static ReadJSON() {
    const rawData = fs.readFileSync(
      "./JSON/jurnal7_2_2311104024.json"
    );
    const json = JSON.parse(rawData);
    const members = json.members;

    console.log("Team member list:");
    members.forEach((member) => {
      const fullName = `${member.firstName} ${member.lastName}`;
      console.log(`${member.nim} ${fullName} (${member.age} ${member.gender})`);
    });
  }
}

export default AnggotaTim2311104024;