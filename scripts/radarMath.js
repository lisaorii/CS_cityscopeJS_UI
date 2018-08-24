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
    return uniqueItems.length / this.data.grid.length;
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
      key: "Boston",
      values: [
        { axis: "Work", value: radarMath.typeRatio("0") },
        { axis: "Live", value: radarMath.typeRatio("1") },
        { axis: "ratioLW", value: radarMath.ratioLiveWork("2", "0") }
        // { axis: "Open", value: radarMath.typeRatio("3") },
        // { axis: "Unique", value: radarMath.uniqueTypes() },
        // { axis: "A", value: radarMath.timeRemap() },
        // { axis: "B", value: radarMath.typeRatio("1") },
        // { axis: "C", value: radarMath.timeRemap() },
        // { axis: "D", value: radarMath.timeRemap() },
        // { axis: "E", value: radarMath.uniqueTypes() },
        // { axis: "F", value: radarMath.typeRatio("0") },
        // { axis: "G", value: radarMath.timeRemap() },
        // { axis: "H", value: radarMath.typeRatio("2") },
        // { axis: "I", value: radarMath.typeRatio("3") },
        // { axis: "J", value: radarMath.timeRemap() }
      ]
    },
    {
      key: "Andorra",
      values: [
        { axis: "Work", value: 0.2 },
        { axis: "Live", value: 0.5 },
        { axis: "ratioLW", value: 0.2 }
        // { axis: "Open", value: 0.1 },
        // { axis: "Unique", value: 0.5 },
        // { axis: "A", value: 0.74 },
        // { axis: "B", value: 0.4 },
        // { axis: "C", value: 0.8 },
        // { axis: "D", value: 0.1 },
        // { axis: "E", value: 0.5 },
        // { axis: "F", value: 0.74 },
        // { axis: "G", value: 0.43 },
        // { axis: "H", value: 0.4 },
        // { axis: "I", value: 0.2 },
        // { axis: "J", value: radarMath.uniqueTypes() }
      ]
    }
  ];
}
