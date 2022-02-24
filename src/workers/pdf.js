const { default: axios } = require("axios");
const fs = require("fs");
const PDFDocument = require("pdfkit");

class PDFWorker {
  constructor(data) {
    this.data = data;
  }
  async fetchImage(src) {
    const image = await axios.get(src, {
      responseType: "arraybuffer",
    });
    return image.data;
  }
  async generatePDF() {
    let pdfDoc = new PDFDocument();
    for (const record of this.data) {
      pdfDoc
        .fontSize(25)
        .fillColor("orange")
        .text("Name= " + record.show.name, 100, 50);
      pdfDoc
        .fontSize(14)
        .fillColor("black")
        .text("Status= " + (record.show.status || "N/A"), 100, 80);
      pdfDoc
        .fontSize(14)
        .fillColor("black")
        .text("Type= " + (record.show.type || "N/A"), 100, 100);
      pdfDoc
        .fontSize(14)
        .fillColor("black")
        .text(
          "Official Site= " + (record.show.officialSite || "N/A"),
          100,
          120
        );
      if (record.show.image && record.show.image.medium) {
        const img = await this.fetchImage(record.show.image.medium);
        pdfDoc.image(img, 100, 150);
      }
      pdfDoc.addPage();
    }

    pdfDoc.pipe(fs.createWriteStream("ShowResult.pdf"));

    pdfDoc.end();
  }
}

module.exports = PDFWorker;
