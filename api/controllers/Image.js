const _0x2a3e=['value','exports','../utils/writer.js','findSingleExerciseImage','exerciseId','size','updateExerciseImage','direction','app','page','swagger','CREATED','repository','findExerciseImages','http-status-codes','imageId','params','../service/ImageService','writeJson','locals','addExerciseImage','body','user','routineId','cycleId'];(function(_0x11e85c,_0x2a3ea6){const _0x35b223=function(_0x808e20){while(--_0x808e20){_0x11e85c['push'](_0x11e85c['shift']());}};_0x35b223(++_0x2a3ea6);}(_0x2a3e,0x186));const _0x35b2=function(_0x11e85c,_0x2a3ea6){_0x11e85c=_0x11e85c-0x0;let _0x35b223=_0x2a3e[_0x11e85c];return _0x35b223;};const _0x10471c=_0x35b2;'use strict';const HttpStatus=require(_0x10471c('0x18')),Utils=require(_0x10471c('0xc')),Image=require(_0x10471c('0x2'));module[_0x10471c('0xb')][_0x10471c('0x5')]=async(_0x808e20,_0x410dfc,_0x20e06f)=>{const _0x1744aa=_0x10471c;try{const _0x350e25=_0x808e20[_0x1744aa('0x12')][_0x1744aa('0x4')][_0x1744aa('0x16')],_0x1d091a=_0x808e20[_0x1744aa('0x14')][_0x1744aa('0x1')][_0x1744aa('0x8')]['value'],_0x565ed4=_0x808e20[_0x1744aa('0x14')][_0x1744aa('0x1')][_0x1744aa('0x9')][_0x1744aa('0xa')],_0x993a65=_0x808e20[_0x1744aa('0x14')][_0x1744aa('0x1')][_0x1744aa('0xe')][_0x1744aa('0xa')],_0x1e0ebe=_0x808e20[_0x1744aa('0x14')][_0x1744aa('0x1')]['body'][_0x1744aa('0xa')],_0x37410f=_0x808e20['user'],_0x38c2b7=await Image['addExerciseImage'](_0x350e25,_0x37410f,_0x1d091a,_0x565ed4,_0x993a65,_0x1e0ebe);Utils[_0x1744aa('0x3')](_0x410dfc,_0x38c2b7,HttpStatus[_0x1744aa('0x15')]);}catch(_0x2d40cb){_0x20e06f(_0x2d40cb);}},module[_0x10471c('0xb')]['deleteExerciseImage']=async(_0x2912da,_0x396ed0,_0x3bc57b)=>{const _0x3ad847=_0x10471c;try{const _0x99d7ea=_0x2912da[_0x3ad847('0x12')][_0x3ad847('0x4')][_0x3ad847('0x16')],_0x2aefe7=_0x2912da[_0x3ad847('0x14')][_0x3ad847('0x1')][_0x3ad847('0x8')][_0x3ad847('0xa')],_0xfe548e=_0x2912da['swagger']['params']['cycleId'][_0x3ad847('0xa')],_0x37fd9e=_0x2912da[_0x3ad847('0x14')][_0x3ad847('0x1')][_0x3ad847('0xe')]['value'],_0x38cb46=_0x2912da[_0x3ad847('0x14')]['params']['imageId']['value'],_0x54eccd=_0x2912da[_0x3ad847('0x7')],_0x37a7df=await Image['deleteExerciseImage'](_0x99d7ea,_0x54eccd,_0x2aefe7,_0xfe548e,_0x37fd9e,_0x38cb46);Utils[_0x3ad847('0x3')](_0x396ed0,_0x37a7df,HttpStatus['OK']);}catch(_0x55c869){_0x3bc57b(_0x55c869);}},module[_0x10471c('0xb')][_0x10471c('0x17')]=async(_0x562e03,_0x5d60fa,_0x5464f2)=>{const _0x488ded=_0x10471c;try{const _0x4bc546=_0x562e03[_0x488ded('0x12')][_0x488ded('0x4')][_0x488ded('0x16')],_0x11149a=_0x562e03[_0x488ded('0x14')][_0x488ded('0x1')][_0x488ded('0x8')]['value'],_0xf0660=_0x562e03[_0x488ded('0x14')][_0x488ded('0x1')][_0x488ded('0x9')][_0x488ded('0xa')],_0x536638=_0x562e03[_0x488ded('0x14')][_0x488ded('0x1')][_0x488ded('0xe')][_0x488ded('0xa')],_0x1673e3=(_0x562e03[_0x488ded('0x14')][_0x488ded('0x1')][_0x488ded('0x13')]||{})['value'],_0x5553=(_0x562e03['swagger'][_0x488ded('0x1')][_0x488ded('0xf')]||{})['value'],_0x212f68=(_0x562e03[_0x488ded('0x14')][_0x488ded('0x1')]['orderBy']||{})[_0x488ded('0xa')],_0x1cc89f=(_0x562e03['swagger'][_0x488ded('0x1')][_0x488ded('0x11')]||{})[_0x488ded('0xa')],_0xf21060=await Image[_0x488ded('0x17')](_0x4bc546,_0x11149a,_0xf0660,_0x536638,_0x1673e3,_0x5553,_0x212f68,_0x1cc89f);Utils[_0x488ded('0x3')](_0x5d60fa,_0xf21060,HttpStatus['OK']);}catch(_0x4ec2d7){_0x5464f2(_0x4ec2d7);}},module[_0x10471c('0xb')][_0x10471c('0xd')]=async(_0x1372f8,_0xb4ebb8,_0x1dc3b6)=>{const _0xbcbf27=_0x10471c;try{const _0x2feb2d=_0x1372f8[_0xbcbf27('0x12')][_0xbcbf27('0x4')][_0xbcbf27('0x16')],_0x53ac75=_0x1372f8[_0xbcbf27('0x14')][_0xbcbf27('0x1')][_0xbcbf27('0x8')][_0xbcbf27('0xa')],_0x110765=_0x1372f8[_0xbcbf27('0x14')][_0xbcbf27('0x1')][_0xbcbf27('0x9')]['value'],_0x4da43e=_0x1372f8['swagger'][_0xbcbf27('0x1')]['exerciseId'][_0xbcbf27('0xa')],_0x39532c=_0x1372f8[_0xbcbf27('0x14')][_0xbcbf27('0x1')][_0xbcbf27('0x0')][_0xbcbf27('0xa')],_0x3f1dfb=await Image[_0xbcbf27('0xd')](_0x2feb2d,_0x53ac75,_0x110765,_0x4da43e,_0x39532c);Utils[_0xbcbf27('0x3')](_0xb4ebb8,_0x3f1dfb,HttpStatus['OK']);}catch(_0x130677){_0x1dc3b6(_0x130677);}},module['exports'][_0x10471c('0x10')]=async(_0x1761da,_0x467603,_0xe90aa3)=>{const _0x514939=_0x10471c;try{const _0x4eb5cb=_0x1761da[_0x514939('0x12')]['locals'][_0x514939('0x16')],_0x1220fa=_0x1761da[_0x514939('0x14')][_0x514939('0x1')][_0x514939('0x8')][_0x514939('0xa')],_0xabe8f7=_0x1761da['swagger']['params'][_0x514939('0x9')][_0x514939('0xa')],_0x461845=_0x1761da[_0x514939('0x14')][_0x514939('0x1')][_0x514939('0xe')][_0x514939('0xa')],_0x21c9f4=_0x1761da[_0x514939('0x14')][_0x514939('0x1')][_0x514939('0x0')][_0x514939('0xa')],_0x36279e=_0x1761da['swagger']['params'][_0x514939('0x6')][_0x514939('0xa')],_0x3cb910=_0x1761da['user'],_0x2915e8=await Image[_0x514939('0x10')](_0x4eb5cb,_0x3cb910,_0x1220fa,_0xabe8f7,_0x461845,_0x21c9f4,_0x36279e);Utils[_0x514939('0x3')](_0x467603,_0x2915e8,HttpStatus['OK']);}catch(_0xd94e0a){_0xe90aa3(_0xd94e0a);}};