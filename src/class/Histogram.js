export default class Histogram {
  label = "";
  histogramData = [];
  hasData = false;
  isReady = false;
  histogramName = "";
  isReady = false;
  status = "em espera";

  constructor() {}

  run = () => {
    console.log("abstraindo histograma...");
    if (this.histogramData.length === 0) {
      this.status = "x";
    }
    // this.checkNodeGenerator();
  };

  getHistogramData = () => {
    return this.histogramData;
  };
}
