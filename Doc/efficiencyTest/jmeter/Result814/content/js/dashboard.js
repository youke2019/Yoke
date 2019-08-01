/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 6;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.99995, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "\u53D1\u5E03\u7CBE\u5F69\u77AC\u95F4"], "isController": false}, {"data": [1.0, 500, 1500, "\u67E5\u627E\u8BFE\u7A0B\u63D0\u95EE"], "isController": false}, {"data": [1.0, 500, 1500, "\u83B7\u5F97\u8BFE\u7A0B\u8BC4\u8BBA"], "isController": false}, {"data": [1.0, 500, 1500, "\u83B7\u53D6\u8BFE\u7A0B\u8BC4\u6D4B"], "isController": false}, {"data": [1.0, 500, 1500, "\u8BFE\u7A0B\u8BE6\u60C5\u9875\u63A5\u53E3"], "isController": false}, {"data": [0.9995, 500, 1500, "\u7CBE\u5F69\u77AC\u95F4\u63A5\u53E3"], "isController": false}, {"data": [1.0, 500, 1500, "\u5C01\u7981\u8BC4\u8BBA"], "isController": false}, {"data": [1.0, 500, 1500, "\u5BF9\u8BFE\u7A0B\u63D0\u95EE"], "isController": false}, {"data": [1.0, 500, 1500, "\u8BFE\u7A0B\u641C\u7D22\u63A5\u53E3"], "isController": false}, {"data": [1.0, 500, 1500, "\u83B7\u53D6\u7528\u6237\u4FE1\u606F"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 10000, 0, 0.0, 73.62959999999968, 27, 794, 121.0, 142.0, 185.0, 77.29468599033817, 162.8925120772947, 16.92330917874396], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["\u53D1\u5E03\u7CBE\u5F69\u77AC\u95F4", 1000, 0, 0.0, 59.15300000000005, 31, 166, 82.0, 94.0, 126.94000000000005, 7.853978825673087, 0.9587376496182967, 2.692135320128177], "isController": false}, {"data": ["\u67E5\u627E\u8BFE\u7A0B\u63D0\u95EE", 1000, 0, 0.0, 51.67300000000005, 27, 255, 72.0, 79.94999999999993, 99.97000000000003, 7.870235556150195, 1.0760087674424095, 1.6140131511636142], "isController": false}, {"data": ["\u83B7\u5F97\u8BFE\u7A0B\u8BC4\u8BBA", 1000, 0, 0.0, 96.964, 43, 251, 140.89999999999998, 159.0, 192.0, 7.842030144763876, 26.20647183142772, 1.6005706057184084], "isController": false}, {"data": ["\u83B7\u53D6\u8BFE\u7A0B\u8BC4\u6D4B", 1000, 0, 0.0, 87.09699999999995, 29, 427, 150.0, 177.89999999999986, 251.92000000000007, 7.849170342694778, 1.0731287577903015, 1.502380260906422], "isController": false}, {"data": ["\u8BFE\u7A0B\u8BE6\u60C5\u9875\u63A5\u53E3", 1000, 0, 0.0, 124.17200000000004, 62, 253, 164.0, 176.0, 206.96000000000004, 7.830056454707038, 111.57065794006876, 1.45284250624447], "isController": false}, {"data": ["\u7CBE\u5F69\u77AC\u95F4\u63A5\u53E3", 1000, 0, 0.0, 96.46399999999991, 57, 794, 120.0, 128.94999999999993, 153.98000000000002, 7.764879450246535, 17.251074950498893, 1.5620753581550646], "isController": false}, {"data": ["\u5C01\u7981\u8BC4\u8BBA", 1000, 0, 0.0, 52.56100000000002, 29, 255, 72.0, 78.0, 93.99000000000001, 7.839816861878107, 0.9570088942722298, 1.462309590447967], "isController": false}, {"data": ["\u5BF9\u8BFE\u7A0B\u63D0\u95EE", 1000, 0, 0.0, 60.662999999999954, 31, 198, 84.0, 97.0, 131.99, 7.860275738472906, 0.9595063157315559, 2.218378601971357], "isController": false}, {"data": ["\u8BFE\u7A0B\u641C\u7D22\u63A5\u53E3", 1000, 0, 0.0, 58.27499999999997, 31, 474, 77.0, 82.0, 96.99000000000001, 7.808900584886653, 2.4631590712093643, 1.6700676055568138], "isController": false}, {"data": ["\u83B7\u53D6\u7528\u6237\u4FE1\u606F", 1000, 0, 0.0, 49.27399999999999, 28, 346, 68.0, 78.0, 91.0, 7.870669164292347, 2.4134669117068333, 1.3912022643915185], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Percentile 1
            case 8:
            // Percentile 2
            case 9:
            // Percentile 3
            case 10:
            // Throughput
            case 11:
            // Kbytes/s
            case 12:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 10000, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
