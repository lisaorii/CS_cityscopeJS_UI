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

  //////Where do I see the Output?
  RadarData() {
    var dataset = [];
    d3.csv("Radar_Data.csv", function(data) {
      dataset = data.map(function(d) {
        return [+d["People Working"], +d["Residents"]];
      });
      //console.log(dataset)
      return dataset / d.length;
    });
  }

  ///////////////////////////

  typeRatio(type) {
    let ratioCount = 0;
    let d = this.data.grid;
    for (let i = 0; i < d.length; i++) {
      if (d[i][0].toString() === type) {
        ratioCount += 1;
      }
    }
    let rat = 10 * (ratioCount / d.length);

    return rat;
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
      key: "BostonDYNAMIC",
      values: [
        { axis: "Residential Density", value: 0.7 + radarMath.typeRatio("0") },
        { axis: "Employment Density", value: 0.57 + radarMath.typeRatio("4") },
        {
          axis: "3rd places (day) Density",
          value: 0.4 + radarMath.ratioLiveWork("2", "0")
        },
        {
          axis: "3rd places (Night) Density",
          value: 0.2 + radarMath.uniqueTypes("1")
        },
        { axis: "Cultural Density", value: 0.5 + radarMath.uniqueTypes("1") },
        { axis: "Co-working Density", value: 0.55 + radarMath.typeRatio("3") },
        { axis: "Educational Density", value: 0.6 + radarMath.typeRatio("1") },
        { axis: "Access to Parks", value: 0.45 + radarMath.typeRatio("3") },
        {
          axis: "Access to public Transport",
          value: 0.5 + radarMath.typeRatio("3")
        },
        {
          axis: "Intersection Density",
          value: 0.4 + radarMath.uniqueTypes("1")
        },
        {
          axis: "Access to look-out (Police)",
          value: 0.5 + radarMath.typeRatio("0")
        },
        {
          axis: "Access to Healthy food",
          value: 0.35 + radarMath.typeRatio("3")
        },
        { axis: "Access to Sports", value: 0.54 + radarMath.typeRatio("2") },
        {
          axis: "Residential Diversity",
          value: 0.5 + radarMath.typeRatio("3")
        },
        {
          axis: "Employment Diversity",
          value: 0.47 + radarMath.typeRatio("3")
        },
        {
          axis: "3rd Places Diversity",
          value: 0.52 + radarMath.typeRatio("3")
        },
        { axis: "Cultural Diversity", value: 0.45 + radarMath.typeRatio("3") },
        { axis: "Educational Diversity", value: 0.5 + radarMath.timeRemap("1") }
        //axis: "Educational Diversity", value: 0.50 + radarMath.timeRemap() }
      ]
    },
    {
      key: "BostonEXISTING",
      values: [
        { axis: "Residentia Density", value: 0.7 },
        { axis: "Employment Density", value: 0.57 },
        { axis: "3rd places (day) Density", value: 0.4 },
        { axis: "3rd places (Night) Density", value: 0.2 },
        { axis: "Cultural Density", value: 0.5 },
        { axis: "Co-working Density", value: 0.55 },
        { axis: "Educational Density", value: 0.6 },
        { axis: "Access to Parks", value: 0.45 },
        { axis: "Access to public Transport", value: 0.5 },
        { axis: "Intersection Density", value: 0.4 },
        { axis: "Access to look-out (Police)", value: 0.5 },
        { axis: "Access to Healthy food", value: 0.35 },
        { axis: "Access to Sports", value: 0.54 },
        { axis: "Residential Diversity", value: 0.5 },
        { axis: "Employment Diversity", value: 0.47 },
        { axis: "3rd Places Diversity", value: 0.52 },
        { axis: "Cultural Diversity", value: 0.45 },
        { axis: "Educational Diversity", value: 0.5 }
        //{ axis: "J", value: radarMath.uniqueTypes() }
      ]
    }
    // {
    //   key: "Barcelona",
    //   values: [
    //     { axis: "Residentia Density", value: 0.85 },
    //     { axis: "Employment Density", value: 0.6 },
    //     { axis: "3rd places (day) Density", value: 0.85 },
    //     { axis: "3rd places (Night) Density", value: 0.78 },
    //     { axis: "Cultural Density", value: 0.8 },
    //     { axis: "Co-working Density", value: 0.65 },
    //     { axis: "Educational Density", value: 0.72 },
    //     { axis: "Access to Parks", value: 0.4 },
    //     { axis: "Access to public Transport", value: 0.91 },
    //     { axis: "Intersection Density", value: 0.89 },
    //     { axis: "Access to look-out (Police)", value: 0.55 },
    //     { axis: "Access to Healthy food", value: 0.65 },
    //     { axis: "Access to Sports", value: 0.6 },
    //     { axis: "Residential Diversity", value: 0.86 },
    //     { axis: "Employment Diversity", value: 0.79 },
    //     { axis: "3rd Places Diversity", value: 0.82 },
    //     { axis: "Cultural Diversity", value: 0.84 },
    //     { axis: "Educational Diversity", value: 0.69 }
    //     //{ axis: "J", value: radarMath.uniqueTypes() }
    //   ]
    // }
  ];
}
