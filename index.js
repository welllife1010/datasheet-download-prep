// Format JSON file to prepare downloading the image based on it

const fs = require("fs")
const json = require("./reference-files/product-microcontrollers-0502_9.json") // Load JSON data

const outputJsonFileName = "./generated-files/microcontroller_9_0516.json"

async function createNewJsonAndCsv(outputJsonFileName) {
  const newData = json.map((item) => {
    return {
      ManufacturerProductNumber: item.ManufacturerProductNumber,
      DatasheetUrl: item.DatasheetUrl,
    }
  })

  try {
    // Write the results to a JSON file
    await fs.promises.writeFile(
      outputJsonFileName,
      JSON.stringify(newData, null, 2)
    )

    console.log(
      `Successfully converted to JSON and saved as ${outputJsonFileName}`
    )
    console.log(newData.length)
    console.log("Files generated successfully!")
  } catch (error) {
    console.error("Error occurred:", error)
  }
}

createNewJsonAndCsv(outputJsonFileName)
