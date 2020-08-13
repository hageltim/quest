(this.webpackJsonpquest=this.webpackJsonpquest||[]).push([[14],{233:function(e,t,i){"use strict";i.r(t);var n=i(44),o=i(14),m=i(0),r=i.n(m),u=i(193),a=i(73),d=(i(210),i(74)),s=i(75),b=i(80),N=i(77),c=i(211),l=i.n(c),p=function(e){Object(b.a)(i,e);var t=Object(N.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.children({containerWidth:this.props.containerWidth,containerHeight:this.props.containerHeight}))}}]),i}(r.a.Component),f=l()()(p),h=i(56),v=i(2),A=i(76),E=i(51),C=i(78);t.default=function(){var e=Object(v.f)(),t=Object(m.useState)(""),i=Object(o.a)(t,2),d=i[0],s=i[1],b=Object(m.useState)([]),N=Object(o.a)(b,2),c=N[0],l=N[1],p=Object(m.useState)(!1),j=Object(o.a)(p,2),O=j[0],y=j[1],g=u.b.fromNote("c5"),F=u.b.fromNote("b5"),D={instrumentName:"acoustic_grand_piano",noteRange:{first:g,last:F},keyboardShortcutOffset:0},G=(u.a.create({firstNote:g,lastNote:F,keyboardConfig:u.a.HOME_ROW}),new(window.AudioContext||window.webkitAudioContext));return Object(m.useEffect)((function(){O&&Object(a.a)(A.b,130)}),[O]),r.a.createElement("div",{className:"Piano Page"},r.a.createElement("button",{style:{fontSize:"14px"},onClick:function(){e.goBack()}},"\u2190 Back"),r.a.createElement(a.b,{audioContext:G,instrumentName:D.instrumentName,hostname:"https://d1pzp51pvbm36p.cloudfront.net",render:function(e){var t=e.isLoading,i=e.playNote,o=e.stopNote;e.stopAllNotes;return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-4"},r.a.createElement(f,null,(function(e){var m=e.containerWidth;return r.a.createElement("div",null,t&&r.a.createElement("h3",null,"Loading..."),r.a.createElement(u.c,{noteRange:D.noteRange,playNote:function(e){i(e),function(e){var t=A.a.find((function(t){return t.midiNumber===e})),i=t&&t.note,o=Object(n.a)(c);o.push(i),o.length>8&&(o=o.slice(1,9)),l(o),s(i),"A5 G5 F# G5 G5 F5 E5 F5"===o.join(" ")&&y(!0)}(e)},stopNote:o,disabled:t,width:m}))}))))}}),r.a.createElement("div",null,d),r.a.createElement("div",null,O&&r.a.createElement("div",null,r.a.createElement("h2",null,"Well done!"),r.a.createElement("p",null,"Look beneath a place where you might hear this song."),r.a.createElement(E.a,null))),r.a.createElement(h.a,{active:O}),r.a.createElement(C.a,null))}},51:function(e,t,i){"use strict";var n=i(0),o=i.n(n),m=i(8),r=i(41),u=i(43);t.a=function(e){var t=e.primary,i=Object(r.a)(),n=u.a[0].id===i;return o.a.createElement("div",{className:"center"},o.a.createElement(m.b,{to:"/clue/".concat(i)},o.a.createElement("button",{className:t?"primary":""},n?"Start":"Continue")))}},56:function(e,t,i){"use strict";var n=i(0),o=i.n(n),m=i(66),r=i.n(m);t.a=function(e){var t=e.active;return o.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},o.a.createElement(r.a,{active:t,config:{spread:120,angle:90}}))}},73:function(e,t,i){"use strict";i.d(t,"a",(function(){return v}));var n=i(46),o=i.n(n),m=i(93),r=i(47),u=i(21),a=i(74),d=i(75),s=i(80),b=i(77),N=i(0),c=i.n(N),l=i(94),p=i.n(l),f=i(59),h=function(e){Object(s.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).loadInstrument=function(e){n.setState({instrument:null}),p.a.instrument(n.props.audioContext,e,{format:n.props.format,soundfont:n.props.soundfont,nameToUrl:function(e,t,i){return"".concat(n.props.hostname,"/").concat(t,"/").concat(e,"-").concat(i,".js")}}).then((function(e){n.setState({instrument:e})}))},n.playNote=function(e){n.resumeAudio().then((function(){var t=n.state.instrument.play(e);n.setState({activeAudioNodes:Object.assign({},n.state.activeAudioNodes,Object(u.a)({},e,t))})}))},n.stopNote=function(e){n.resumeAudio().then((function(){n.state.activeAudioNodes[e]&&(n.state.activeAudioNodes[e].stop(),n.setState({activeAudioNodes:Object.assign({},n.state.activeAudioNodes,Object(u.a)({},e,null))}))}))},n.resumeAudio=function(){return"suspended"===n.props.audioContext.state?n.props.audioContext.resume():Promise.resolve()},n.stopAllNotes=function(){n.props.audioContext.resume().then((function(){Object.values(n.state.activeAudioNodes).forEach((function(e){e&&e.stop()})),n.setState({activeAudioNodes:{}})}))},n.state={activeAudioNodes:{},instrument:null},n}return Object(d.a)(i,[{key:"componentDidMount",value:function(){this.loadInstrument(this.props.instrumentName)}},{key:"componentDidUpdate",value:function(e,t){if(e.instrumentName!==this.props.instrumentName&&this.loadInstrument(this.props.instrumentName),t.instrument!==this.state.instrument){if(!this.props.onLoad)return;this.props.onLoad({playNote:this.playNote,stopNote:this.stopNote,stopAllNotes:this.stopAllNotes})}}},{key:"render",value:function(){return this.props.render?this.props.render({isLoading:!this.state.instrument,playNote:this.playNote,stopNote:this.stopNote,stopAllNotes:this.stopAllNotes}):null}}]),i}(c.a.Component);h.defaultProps={format:"mp3",soundfont:"MusyngKite",instrumentName:"acoustic_grand_piano"},t.b=h;var v=function(){var e=Object(r.a)(o.a.mark((function e(t,i){var n,r,u,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.instrument(new AudioContext,"acoustic_grand_piano");case 2:n=e.sent,r=Object(m.a)(t),e.prev=4,r.s();case 6:if((u=r.n()).done){e.next=13;break}return a=u.value,n.play(a),e.next=11,Object(f.a)(i);case 11:e.next=6;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[4,15,18,21]])})));return function(t,i){return e.apply(this,arguments)}}()},76:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return o}));var n=[79,78,75,69,68,76,80,84],o=[{midiNumber:127,note:"G9"},{midiNumber:126,note:"F#"},{midiNumber:125,note:"F9"},{midiNumber:124,note:"E9"},{midiNumber:123,note:"D#"},{midiNumber:122,note:"D9"},{midiNumber:121,note:"C#"},{midiNumber:120,note:"C9"},{midiNumber:119,note:"B8"},{midiNumber:118,note:"A#"},{midiNumber:117,note:"A8"},{midiNumber:116,note:"G#"},{midiNumber:115,note:"G8"},{midiNumber:114,note:"F#"},{midiNumber:113,note:"F8"},{midiNumber:112,note:"E8"},{midiNumber:111,note:"D#"},{midiNumber:110,note:"D8"},{midiNumber:109,note:"C#"},{midiNumber:108,note:"C8"},{midiNumber:107,note:"B7"},{midiNumber:106,note:"A#"},{midiNumber:105,note:"A7"},{midiNumber:104,note:"G#"},{midiNumber:103,note:"G7"},{midiNumber:102,note:"F#"},{midiNumber:101,note:"F7"},{midiNumber:100,note:"E7"},{midiNumber:99,note:"D#"},{midiNumber:98,note:"D7"},{midiNumber:97,note:"C#"},{midiNumber:96,note:"C7"},{midiNumber:95,note:"B6"},{midiNumber:94,note:"A#"},{midiNumber:93,note:"A6"},{midiNumber:92,note:"G#"},{midiNumber:91,note:"G6"},{midiNumber:90,note:"F#"},{midiNumber:89,note:"F6"},{midiNumber:88,note:"E6"},{midiNumber:87,note:"D#"},{midiNumber:86,note:"D6"},{midiNumber:85,note:"C#"},{midiNumber:84,note:"C6"},{midiNumber:83,note:"B5"},{midiNumber:82,note:"A#"},{midiNumber:81,note:"A5"},{midiNumber:80,note:"G#"},{midiNumber:79,note:"G5"},{midiNumber:78,note:"F#"},{midiNumber:77,note:"F5"},{midiNumber:76,note:"E5"},{midiNumber:75,note:"D#"},{midiNumber:74,note:"D5"},{midiNumber:73,note:"C#"},{midiNumber:72,note:"C5"},{midiNumber:71,note:"B4"},{midiNumber:70,note:"A#"},{midiNumber:69,note:"A4"},{midiNumber:68,note:"G#"},{midiNumber:67,note:"G4"},{midiNumber:66,note:"F#"},{midiNumber:65,note:"F4"},{midiNumber:64,note:"E4"},{midiNumber:63,note:"D#"},{midiNumber:62,note:"D4"},{midiNumber:61,note:"C#"},{midiNumber:60,note:"C4"},{midiNumber:59,note:"B3"},{midiNumber:58,note:"A#"},{midiNumber:57,note:"A3"},{midiNumber:56,note:"G#"},{midiNumber:55,note:"G3"},{midiNumber:54,note:"F#"},{midiNumber:53,note:"F3"},{midiNumber:52,note:"E3"},{midiNumber:51,note:"D#"},{midiNumber:50,note:"D3"},{midiNumber:49,note:"C#"},{midiNumber:48,note:"C3"},{midiNumber:47,note:"B2"},{midiNumber:46,note:"A#"},{midiNumber:45,note:"A2"},{midiNumber:44,note:"G#"},{midiNumber:43,note:"G2"},{midiNumber:42,note:"F#"},{midiNumber:41,note:"F2"},{midiNumber:40,note:"E2"},{midiNumber:39,note:"D#"},{midiNumber:38,note:"D2"},{midiNumber:37,note:"C#"},{midiNumber:36,note:"C2"},{midiNumber:35,note:"B1"},{midiNumber:34,note:"A#"},{midiNumber:33,note:"A1"},{midiNumber:32,note:"G#"},{midiNumber:31,note:"G1"},{midiNumber:30,note:"F#"},{midiNumber:29,note:"F1"},{midiNumber:28,note:"E1"},{midiNumber:27,note:"D#"},{midiNumber:26,note:"D1"},{midiNumber:25,note:"C#"},{midiNumber:24,note:"C1"},{midiNumber:23,note:"B0"},{midiNumber:22,note:"A#"},{midiNumber:21,note:"A0"},{midiNumber:20,note:""},{midiNumber:19,note:""},{midiNumber:18,note:""},{midiNumber:17,note:""},{midiNumber:16,note:""},{midiNumber:15,note:""},{midiNumber:14,note:""},{midiNumber:13,note:""},{midiNumber:12,note:""},{midiNumber:11,note:""},{midiNumber:10,note:""},{midiNumber:9,note:""},{midiNumber:8,note:""},{midiNumber:7,note:""},{midiNumber:6,note:""},{midiNumber:5,note:""},{midiNumber:4,note:""},{midiNumber:3,note:""},{midiNumber:2,note:""},{midiNumber:1,note:""},{midiNumber:0,note:""}]}}]);
//# sourceMappingURL=14.4dcd0e21.chunk.js.map