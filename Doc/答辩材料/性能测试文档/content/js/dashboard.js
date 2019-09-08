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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.922, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9985, 500, 1500, "\u53D1\u5E03\u7CBE\u5F69\u77AC\u95F4"], "isController": false}, {"data": [0.9995, 500, 1500, "\u67E5\u627E\u8BFE\u7A0B\u63D0\u95EE"], "isController": false}, {"data": [0.487, 500, 1500, "\u83B7\u5F97\u8BFE\u7A0B\u8BC4\u8BBA"], "isController": false}, {"data": [0.9995, 500, 1500, "\u83B7\u53D6\u8BFE\u7A0B\u8BC4\u6D4B"], "isController": false}, {"data": [0.997, 500, 1500, "\u8BFE\u7A0B\u8BE6\u60C5\u9875\u63A5\u53E3"], "isController": false}, {"data": [0.746, 500, 1500, "\u7CBE\u5F69\u77AC\u95F4\u63A5\u53E3"], "isController": false}, {"data": [0.9935, 500, 1500, "\u5C01\u7981\u8BC4\u8BBA"], "isController": false}, {"data": [1.0, 500, 1500, "\u5BF9\u8BFE\u7A0B\u63D0\u95EE"], "isController": false}, {"data": [0.999, 500, 1500, "\u8BFE\u7A0B\u641C\u7D22\u63A5\u53E3"], "isController": false}, {"data": [1.0, 500, 1500, "\u83B7\u53D6\u7528\u6237\u4FE1\u606F"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 10000, 0, 0.0, 308.01099999999883, 12, 29615, 700.0, 2823.899999999998, 3108.0, 26.51711016533418, 18.770478252655025, 5.805796971746019], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["\u53D1\u5E03\u7CBE\u5F69\u77AC\u95F4", 1000, 0, 0.0, 133.0830000000002, 24, 995, 210.0, 220.0, 282.95000000000005, 2.6800598189351588, 0.44754905179483606, 0.918653316842032], "isController": false}, {"data": ["\u67E5\u627E\u8BFE\u7A0B\u63D0\u95EE", 1000, 0, 0.0, 95.62799999999986, 12, 533, 301.0, 309.0, 329.99, 2.680864525192084, 0.7676069128772647, 0.5497866702054078], "isController": false}, {"data": ["\u83B7\u5F97\u8BFE\u7A0B\u8BC4\u8BBA", 1000, 0, 0.0, 1728.2769999999991, 271, 29615, 3107.9, 3289.7999999999997, 3503.59, 2.660090921907711, 9.00897980192963, 0.5429287135534292], "isController": false}, {"data": ["\u83B7\u53D6\u8BFE\u7A0B\u8BC4\u6D4B", 1000, 0, 0.0, 57.440000000000005, 14, 1258, 101.0, 112.89999999999986, 144.98000000000002, 2.6814396112985137, 0.4870583668960191, 0.5132443006001062], "isController": false}, {"data": ["\u8BFE\u7A0B\u8BE6\u60C5\u9875\u63A5\u53E3", 1000, 0, 0.0, 190.645, 31, 1065, 318.9, 330.0, 387.94000000000005, 2.678408810893624, 2.537164596256656, 0.496970384833778], "isController": false}, {"data": ["\u7CBE\u5F69\u77AC\u95F4\u63A5\u53E3", 1000, 0, 0.0, 430.75899999999956, 74, 1946, 779.9, 812.0, 918.96, 2.677906733864273, 2.8617931497806794, 0.5387195187266018], "isController": false}, {"data": ["\u5C01\u7981\u8BC4\u8BBA", 1000, 0, 0.0, 207.22199999999998, 35, 2007, 368.0, 385.0, 454.9100000000001, 2.6802537664266053, 0.4475814395106929, 0.49993014588621254], "isController": false}, {"data": ["\u5BF9\u8BFE\u7A0B\u63D0\u95EE", 1000, 0, 0.0, 117.98699999999995, 24, 416, 208.0, 218.94999999999993, 276.99, 2.6814683720805514, 0.44778426916579517, 0.756781601104765], "isController": false}, {"data": ["\u8BFE\u7A0B\u641C\u7D22\u63A5\u53E3", 1000, 0, 0.0, 60.72599999999994, 16, 6864, 94.89999999999998, 102.0, 131.0, 2.6804836664727785, 0.9659164774691945, 0.5732675028882211], "isController": false}, {"data": ["\u83B7\u53D6\u7528\u6237\u4FE1\u606F", 1000, 0, 0.0, 58.342999999999996, 13, 229, 92.0, 98.94999999999993, 141.98000000000002, 2.6831519522613605, 0.9301942803249833, 0.47426806968682245], "isController": false}]}, function(index, item){
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
