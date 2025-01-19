window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var cost1 = 0
var ret1 = 0
var top = 0
var r1 = 0
var player = GetPlayer();
cost1 = player.GetVar("cost1");
ret1 = player.GetVar("ret1");
top = ret1-cost1
r1 = (top/cost1)*100
var r1rounded = Math.round(r1);
player.SetVar("r1", r1rounded);
}

window.Script2 = function()
{
  var cost1 = 0
var ret1 = 0
var top = 0
var r1 = 0
var player = GetPlayer();
cost1 = player.GetVar("cost1");
ret1 = player.GetVar("ret1");
top = ret1-cost1
r1 = (top/cost1)*100
var r1rounded = Math.round(r1);
player.SetVar("r1", r1rounded);
}

};
