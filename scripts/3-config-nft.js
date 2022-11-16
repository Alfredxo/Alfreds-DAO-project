import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xE67F55F6f7839d6D0110FC41cD743F28281e026b", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Pilot Wings",
        description: "This NFT will give you access to AviationDAO!",
        image: readFileSync("scripts/assets/Wings.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();