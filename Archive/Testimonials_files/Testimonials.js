// Created by iWeb 3.0.1 local-build-20100612

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Users/hatch1/Desktop/ProfessionalRX/ProfessionalRX/Testimonials_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/hatch1/Desktop/ProfessionalRX/ProfessionalRX',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/hatch1/Desktop/ProfessionalRX/ProfessionalRX',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(1,new IWSize(652,652),new IWSize(652,18),new IWSize(652,685),27,27,0,new IWSize(2,2)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,322),url:'Testimonials_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Testimonials_files/stroke_1.png'},{rect:new IWRect(2,-2,486,4),url:'Testimonials_files/stroke_2.png'},{rect:new IWRect(488,-2,5,4),url:'Testimonials_files/stroke_3.png'},{rect:new IWRect(488,2,5,322),url:'Testimonials_files/stroke_4.png'},{rect:new IWRect(488,324,5,4),url:'Testimonials_files/stroke_5.png'},{rect:new IWRect(2,324,486,4),url:'Testimonials_files/stroke_6.png'},{rect:new IWRect(-2,324,4,4),url:'Testimonials_files/stroke_7.png'}],new IWSize(490,326))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Testimonials_files/TestimonialsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
