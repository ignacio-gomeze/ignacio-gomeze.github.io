---
title: Race-time-simulator
layout: page
---

## Race time simulator

|       |     Pace    | Distance |     Time    |
|:-----:|:-----------:|:--------:|:-----------:|
|  Swim |  <input type="text" id="swim_pace_minutes" placeholder="0" maxlength="1" size="1" onKeyPress='validateNumber(event)' onInput='calculateTime()'>:<input type="text" id="swim_pace_seconds" placeholder="00" maxlength="2" size="2" onkeypress='validateNumber(event)' onInput='calculateTime()'> min/100m |  <input type="text" id="swim_distance" placeholder="1900" maxlength="4" size="4" onKeyPress='validateNumber(event)' onInput='calculateTime()'> m  | <span style="font-weight:bold" id="swim_time">0:00:00</span> h:mm:ss |
|   T1  |             |          | <input type="text" id="t1_minutes" placeholder="0" maxlength="1" size="1" onKeyPress='validateNumber(event)' onInput='calculateTime()'>:<input type="text" id="t1_seconds" placeholder="00" maxlength="2" size="2" onKeyPress='validateNumber(event)' onInput='calculateTime()'> m:ss |
|  Bike |  <input type="text" id="bike_pace" placeholder="0"  maxlength="4" size="4" onkeypress='validateNumber(event)' onInput='calculateTime()'> km/h | <input type="text" id="bike_distance" placeholder="90" maxlength="3" size="3" onKeyPress='validateNumber(event)' onInput='calculateTime()'> km | <span style="font-weight:bold" id="bike_time">0:00:00</span> h:mm:ss |
|   T2  |             |          | <input type="text" id="t2_minutes" placeholder="0" maxlength="1" size="1" onKeyPress='validateNumber(event)' onInput='calculateTime()'>:<input type="text" id="t2_seconds" placeholder="00" maxlength="2" size="2" onKeyPress='validateNumber(event)' onInput='calculateTime()'> m:ss |
|  Run  |  <input type="text" id="run_pace_minutes" placeholder="0" maxlength="1" size="1" onKeyPress='validateNumber(event)' onInput='calculateTime()'>:<input type="text" id="run_pace_seconds" placeholder="00" maxlength="2" size="2" onkeypress='validateNumber(event)' onInput='calculateTime()'> min/km | <input type="text" id="run_distance" placeholder="21" maxlength="2" size="2" onKeyPress='validateNumber(event)' onInput='calculateTime()'> km | <span style="font-weight:bold" id="run_time">0:00:00</span> h:mm:ss |
| Total |             |          | <span style="font-weight:bold" id="total_time">0:00:00</span> h:mm:ss |

<script src="{{ base.url | prepend: site.url }}/assets/js/scripts.js"></script>
