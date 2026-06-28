import Before1 from "../assets/before1.jpg";
import After1 from "../assets/after1.jpg";
import Before from "../assets/before.jpg";
import After from "../assets/after.jpg";
import Before2 from "../assets/before2.jpg";
import After2 from "../assets/after2.jpg";

export const imagePairs = [
  {
    id: 1,
    title: "Mounting section Repair",
    description:
      "Door mounting section repaired but crack remains in the door panel. Further repair or replacement assessment required.",
    tags: ["Crack Repair", "Carpentry", "Door Panel Damage"],
    beforeImage: Before1,
    afterImage: After1,
  },
  {
    id: 1,
    title: "Screw holes have been filled",
    description:
      "Filled screw holes left an uneven/bumpy surface. Additional sanding and repainting required to achieve a smooth finish.",
    tags: ["Uneven Surface", "Cosmetic Defect"],
    beforeImage: Before,
    afterImage: After,
  },
  {
    id: 3,
    title: "Window Frame Realignment and Hinge Inspection",
    description:
      "The profile has been re-secured flush against the frame. However, heavily rusted screws on the friction hinge were left unaddressed, and dirt remains in the tracks. The primary alignment issue is resolved, but the maintenance is incomplete due to the neglected corroded hardware.",
    tags: ["frame alignment",
"hinge maintenance",
"rust corrosion",
"facility inspection"],
    beforeImage: Before2,
    afterImage: After2,
  },

];