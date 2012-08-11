// Created by iWeb 3.0.1 local-build-20100610

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,217),url:'The_Professional_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'The_Professional_files/stroke_1.png'},{rect:new IWRect(2,-2,386,4),url:'The_Professional_files/stroke_2.png'},{rect:new IWRect(388,-2,4,4),url:'The_Professional_files/stroke_3.png'},{rect:new IWRect(388,2,4,217),url:'The_Professional_files/stroke_4.png'},{rect:new IWRect(388,219,4,4),url:'The_Professional_files/stroke_5.png'},{rect:new IWRect(2,219,386,4),url:'The_Professional_files/stroke_6.png'},{rect:new IWRect(-2,219,4,4),url:'The_Professional_files/stroke_7.png'}],new IWSize(390,221))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('The_Professional_files/The_ProfessionalMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
