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

    var data = {"OkPercent": 43.875, "KoPercent": 56.125};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.41208333333333336, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.4266666666666667, 500, 1500, "\u83B7\u5F97\u8BFE\u7A0B\u8BC4\u8BBA"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u56DE\u590D\u8BFE\u7A0B\u8BC4\u8BBA"], "isController": false}, {"data": [0.43, 500, 1500, "\u8BFE\u7A0B\u8BE6\u60C5\u9875\u63A5\u53E3"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u5BF9\u8BFE\u7A0B\u63D0\u95EE"], "isController": false}, {"data": [0.45, 500, 1500, "\u8BFE\u7A0B\u641C\u7D22\u63A5\u53E3"], "isController": false}, {"data": [0.08333333333333333, 500, 1500, "\u56FE\u7247\u89C6\u9891\u83B7\u53D6\u63A5\u53E3"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u53D1\u5E03\u7CBE\u5F69\u77AC\u95F4"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u67E5\u627E\u8BFE\u7A0B\u63D0\u95EE"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u6DFB\u52A0\u95EE\u9898\u56DE\u7B54"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u83B7\u53D6\u8BFE\u7A0B\u8BC4\u6D4B"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u6DFB\u52A0\u8BFE\u7A0B\u8BC4\u8BBA\u63A5\u53E3"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u6DFB\u52A0\u8BFE\u7A0B\u8BC4\u6D4B"], "isController": false}, {"data": [0.5233333333333333, 500, 1500, "\u7CBE\u5F69\u77AC\u95F4\u63A5\u53E3"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u5C01\u7981\u8BC4\u8BBA"], "isController": false}, {"data": [0.41333333333333333, 500, 1500, "\u70B9\u8D5E\u8BFE\u7A0B\u8BC4\u8BBA"], "isController": false}, {"data": [0.4266666666666667, 500, 1500, "\u83B7\u53D6\u7528\u6237\u4FE1\u606F"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2400, 1347, 56.125, 818.5412500000002, 7, 21403, 1051.0, 1075.8999999999996, 8239.99, 13.819551210074453, 158.46103822257538, 1.4121741428999177], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["\u83B7\u5F97\u8BFE\u7A0B\u8BC4\u8BBA", 150, 86, 57.333333333333336, 624.2999999999998, 20, 1147, 1049.0, 1060.9, 1133.7400000000002, 0.9156950125144985, 2.6965668113973504, 0.07974177400647091], "isController": false}, {"data": ["\u56DE\u590D\u8BFE\u7A0B\u8BC4\u8BBA", 150, 86, 57.333333333333336, 606.1933333333333, 10, 1261, 1049.0, 1053.6999999999998, 1159.5100000000018, 0.9045517041754106, 1.421123750964855, 0.11043068721808139], "isController": false}, {"data": ["\u8BFE\u7A0B\u8BE6\u60C5\u9875\u63A5\u53E3", 150, 82, 54.666666666666664, 648.7866666666665, 29, 1081, 1051.0, 1064.1499999999999, 1078.45, 0.9328822329469127, 7.377142811054032, 0.07846900032339918], "isController": false}, {"data": ["\u5BF9\u8BFE\u7A0B\u63D0\u95EE", 150, 86, 57.333333333333336, 605.6333333333336, 10, 1100, 1042.0, 1052.8, 1083.1700000000003, 0.8829242450997704, 1.3871452667902762, 0.10631879451409737], "isController": false}, {"data": ["\u8BFE\u7A0B\u641C\u7D22\u63A5\u53E3", 150, 82, 54.666666666666664, 711.8666666666666, 13, 13019, 1054.9, 1103.6, 9709.100000000059, 0.9389671361502347, 1.485408108372457, 0.09103579812206573], "isController": false}, {"data": ["\u56FE\u7247\u89C6\u9891\u83B7\u53D6\u63A5\u53E3", 150, 78, 52.0, 3390.266666666666, 301, 21403, 9644.2, 11926.249999999996, 19450.720000000034, 0.9432479169941833, 142.6557464431693, 0.0888716396792957], "isController": false}, {"data": ["\u53D1\u5E03\u7CBE\u5F69\u77AC\u95F4", 150, 86, 57.333333333333336, 641.5533333333333, 9, 6525, 1049.0, 1060.0, 3748.0500000000493, 0.8883624518803672, 1.3956891286644952, 0.12992300858750372], "isController": false}, {"data": ["\u67E5\u627E\u8BFE\u7A0B\u63D0\u95EE", 150, 86, 57.333333333333336, 620.3733333333333, 9, 3521, 1051.0, 1058.0, 2271.5000000000223, 0.8725140620182996, 1.4725833359993485, 0.0763449804266012], "isController": false}, {"data": ["\u6DFB\u52A0\u95EE\u9898\u56DE\u7B54", 150, 86, 57.333333333333336, 685.3200000000003, 10, 13030, 1049.0, 1058.0, 6931.420000000109, 0.8777113967899168, 1.3789783183342208, 0.10349680220481103], "isController": false}, {"data": ["\u83B7\u53D6\u8BFE\u7A0B\u8BC4\u6D4B", 150, 86, 57.333333333333336, 815.5, 9, 13029, 1049.0, 1060.0, 13028.49, 0.8937189432667215, 1.4097369003145892, 0.07298704703344892], "isController": false}, {"data": ["\u6DFB\u52A0\u8BFE\u7A0B\u8BC4\u8BBA\u63A5\u53E3", 150, 86, 57.333333333333336, 624.8266666666667, 12, 1988, 1050.0, 1068.9, 1800.3200000000033, 0.9271392192251589, 1.4414238270143644, 0.11627871041115533], "isController": false}, {"data": ["\u6DFB\u52A0\u8BFE\u7A0B\u8BC4\u6D4B", 150, 86, 57.333333333333336, 622.9000000000002, 29, 1114, 1050.0, 1052.45, 1106.3500000000001, 0.8990703612464712, 1.4125121187192442, 0.10863766865061526], "isController": false}, {"data": ["\u7CBE\u5F69\u77AC\u95F4\u63A5\u53E3", 150, 71, 47.333333333333336, 563.6066666666663, 18, 6518, 1048.8, 1054.1499999999999, 3933.320000000046, 0.9489646795346277, 2.2072016435277444, 0.10054330204913106], "isController": false}, {"data": ["\u5C01\u7981\u8BC4\u8BBA", 150, 86, 57.333333333333336, 606.9466666666667, 8, 1194, 1049.0, 1062.0, 1178.7000000000003, 0.9213929003605718, 1.447582629747477, 0.07332751832036218], "isController": false}, {"data": ["\u70B9\u8D5E\u8BFE\u7A0B\u8BC4\u8BBA", 150, 88, 58.666666666666664, 627.9733333333335, 26, 1101, 1048.9, 1057.9, 1094.88, 0.9100616415085182, 1.4332167380053875, 0.08152635538513808], "isController": false}, {"data": ["\u83B7\u53D6\u7528\u6237\u4FE1\u606F", 150, 86, 57.333333333333336, 700.6133333333333, 7, 13020, 1047.9, 1058.0, 8180.100000000086, 0.8674080113803931, 1.4245934205656656, 0.06541702085827131], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 261,940)", 1, 0.07423904974016332, 0.041666666666666664], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 148,780)", 1, 0.07423904974016332, 0.041666666666666664], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 183,280)", 1, 0.07423904974016332, 0.041666666666666664], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 116,600)", 1, 0.07423904974016332, 0.041666666666666664], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException\/Non HTTP response message: Connection reset", 3, 0.22271714922049, 0.125], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 157,060)", 1, 0.07423904974016332, 0.041666666666666664], "isController": false}, {"data": ["500", 2, 0.14847809948032664, 0.08333333333333333], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException\/Non HTTP response message: 47.103.30.166:8000 failed to respond", 5, 0.3711952487008166, 0.20833333333333334], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 198,608)", 1, 0.07423904974016332, 0.041666666666666664], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 1325, 98.36674090571641, 55.208333333333336], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection timed out: connect", 5, 0.3711952487008166, 0.20833333333333334], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 184,660)", 1, 0.07423904974016332, 0.041666666666666664], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2400, 1347, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 1325, "Non HTTP response code: org.apache.http.NoHttpResponseException\/Non HTTP response message: 47.103.30.166:8000 failed to respond", 5, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection timed out: connect", 5, "Non HTTP response code: java.net.SocketException\/Non HTTP response message: Connection reset", 3, "500", 2], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["\u83B7\u5F97\u8BFE\u7A0B\u8BC4\u8BBA", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 86, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["\u56DE\u590D\u8BFE\u7A0B\u8BC4\u8BBA", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 86, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["\u8BFE\u7A0B\u8BE6\u60C5\u9875\u63A5\u53E3", 150, 82, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 82, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["\u5BF9\u8BFE\u7A0B\u63D0\u95EE", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 86, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["\u8BFE\u7A0B\u641C\u7D22\u63A5\u53E3", 150, 82, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 77, "Non HTTP response code: java.net.SocketException\/Non HTTP response message: Connection reset", 3, "Non HTTP response code: org.apache.http.NoHttpResponseException\/Non HTTP response message: 47.103.30.166:8000 failed to respond", 1, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection timed out: connect", 1, null, null], "isController": false}, {"data": ["\u56FE\u7247\u89C6\u9891\u83B7\u53D6\u63A5\u53E3", 150, 78, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 71, "Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 116,600)", 1, "Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 261,940)", 1, "Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 157,060)", 1, "Non HTTP response code: org.apache.http.ConnectionClosedException\/Non HTTP response message: Premature end of Content-Length delimited message body (expected: 319,666; received: 198,608)", 1], "isController": false}, {"data": ["\u53D1\u5E03\u7CBE\u5F69\u77AC\u95F4", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 86, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["\u67E5\u627E\u8BFE\u7A0B\u63D0\u95EE", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 86, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["\u6DFB\u52A0\u95EE\u9898\u56DE\u7B54", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 85, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection timed out: connect", 1, null, null, null, null, null, null], "isController": false}, {"data": ["\u83B7\u53D6\u8BFE\u7A0B\u8BC4\u6D4B", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 84, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection timed out: connect", 2, null, null, null, null, null, null], "isController": false}, {"data": ["\u6DFB\u52A0\u8BFE\u7A0B\u8BC4\u8BBA\u63A5\u53E3", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 82, "Non HTTP response code: org.apache.http.NoHttpResponseException\/Non HTTP response message: 47.103.30.166:8000 failed to respond", 4, null, null, null, null, null, null], "isController": false}, {"data": ["\u6DFB\u52A0\u8BFE\u7A0B\u8BC4\u6D4B", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 86, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["\u7CBE\u5F69\u77AC\u95F4\u63A5\u53E3", 150, 71, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 71, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["\u5C01\u7981\u8BC4\u8BBA", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 86, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["\u70B9\u8D5E\u8BFE\u7A0B\u8BC4\u8BBA", 150, 88, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 86, "500", 2, null, null, null, null, null, null], "isController": false}, {"data": ["\u83B7\u53D6\u7528\u6237\u4FE1\u606F", 150, 86, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection refused: connect", 85, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to 47.103.30.166:8000 [\\\/47.103.30.166] failed: Connection timed out: connect", 1, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
