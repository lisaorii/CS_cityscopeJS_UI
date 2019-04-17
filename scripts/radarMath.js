import { getCityIO } from "./index";
////////////////////////////////////////////////////////////////////////////////////
//a class to preform math on data arriving from cityIO and return to radar
////////////////////////////////////////////////////////////////////////////////////

export class RadarMath {
  constructor(data) {
    this.data = data;
  }
  ///////////////////////////
  uniqueTypes() {
    var uniqueItems = Array.from(new Set(this.data.grid));
    let u = uniqueItems.length / this.data.grid.length;
    return u;
  }

  ///////////////////////////

  moduleCall() {
    console.log();
  }

  ///////////////////////////

  typeRatio(type) {
    let ratioCount = 0;
    let d = this.data.grid;

    for (let i = 0; i < d.length; i++) {
      if (d[i].toString() === type) {
        ratioCount += 1;
      }
    }
    return ratioCount / d.length;
  }
  ///////////////////////////

  ratioLiveWork(type1, type2) {
    let rc1 = 0;
    let rc2 = 0;
    let d = this.data.grid;

    for (let i = 0; i < d.length; i++) {
      if (d[i].toString() === type1) {
        rc1 += 1;
      } else if (d[i].toString() === type2) {
        rc2 += 1;
      } else {
        // return;
        continue;
      }
    }
    return rc2 / rc1;
  }
  ///////////////////////////

  timeRemap() {
    var cityioTime = this.data.meta.timestamp;
    var d = new Date();
    var n = d.getTime();
    return (Math.random() * cityioTime) / n;
  }
}

////////////////////////////////////////////////////////////////////////////////////
//a class to set the radar structure
////////////////////////////////////////////////////////////////////////////////////
export function radarStruct(radarMath) {
  return [
    {
      key: "Grasbrook",
      values: [
        { axis: "Work", value: radarMath.typeRatio("0") },
        { axis: "Live", value: radarMath.typeRatio("1") },
        { axis: "live/work", value: radarMath.ratioLiveWork("2", "0") },
        { axis: "Unique", value: radarMath.uniqueTypes() },
        { axis: "joy", value: radarMath.typeRatio("0") },
        { axis: "love", value: radarMath.typeRatio("1") },
        { axis: "withoutness", value: radarMath.typeRatio("0") },
        { axis: "withness", value: radarMath.typeRatio("0") },
        { axis: "inovation", value: radarMath.uniqueTypes() },
        { axis: "money", value: radarMath.typeRatio("0") }
      ]
    }
  ];
}
