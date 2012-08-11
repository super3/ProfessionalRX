// Created by iWeb 3.0.1 local-build-20100610

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,379),url:'Home_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Home_files/stroke_1.png'},{rect:new IWRect(2,-2,460,4),url:'Home_files/stroke_2.png'},{rect:new IWRect(462,-2,5,4),url:'Home_files/stroke_3.png'},{rect:new IWRect(462,2,5,379),url:'Home_files/stroke_4.png'},{rect:new IWRect(462,381,5,4),url:'Home_files/stroke_5.png'},{rect:new IWRect(2,381,460,4),url:'Home_files/stroke_6.png'},{rect:new IWRect(-2,381,4,4),url:'Home_files/stroke_7.png'}],new IWSize(465,383))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
